# Django
from django.utils.deprecation import MiddlewareMixin
from django.utils.translation import gettext_lazy as _

# Django REST Framework
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status

# Python 
import re

# Project
from users.domain.token_repository import TokenRepository
from project_settings.settings.base import SIMPLE_JWT
import jwt


class AccessTokenMiddleware(MiddlewareMixin):
    
    tkn = TokenRepository()
    
    def process_request(self, request, *args, **kwargs):
        authorization_header = request.headers.get('Authorization')
        if authorization_header != None:
            try:
                token = authorization_header.split(' ')[1]
                if authorization_header.split(' ')[0] != 'Bearer':
                    raise ValueError()
            except Exception:
                message = {
                    'request_error':_('Access token sent incorrectly.')
                }
                # Se crea la respuesta a la petición usando el formato JSON.
                response = Response(message, status=status.HTTP_400_BAD_REQUEST)
                response.accepted_renderer = JSONRenderer()
                response.accepted_media_type = 'application/json'
                response.renderer_context = {'indent': 4}
                response.render()
                return response
            instance = self.tkn.token_exists(token)
            if instance:    
                message = {
                    'token_error':_('Access token is blacklisted.')
                }
                # Se crea la respuesta a la petición usando el formato JSON.
                response = Response(message, status=status.HTTP_400_BAD_REQUEST)
                response.accepted_renderer = JSONRenderer()
                response.accepted_media_type = 'application/json'
                response.renderer_context = {'indent': 4}
                response.render()
                return response
            path = re.search(r".*/(\d+)/?$", request.path_info)
            if path:
                pk = path.group(1)
                try:
                    decoded_token = jwt.decode(
                        token,
                        SIMPLE_JWT['SIGNING_KEY'],
                        algorithms=[SIMPLE_JWT['ALGORITHM']],
                    )
                except Exception as e:
                    message = {
                        'token_error':_(f'{str(e)}.')
                    }
                    # Se crea la respuesta a la petición usando el formato JSON.
                    response = Response(message, status=status.HTTP_400_BAD_REQUEST)
                    response.accepted_renderer = JSONRenderer()
                    response.accepted_media_type = 'application/json'
                    response.renderer_context = {'indent': 4}
                    response.render()
                    return response
                if not str(decoded_token['user_id']) == pk:
                    message = {
                        'token_error':_('The "user_id" sent in the URL does not match the "user_id" in the access token.')
                    }
                    # Se crea la respuesta a la petición usando el formato JSON.
                    response = Response(message, status=status.HTTP_400_BAD_REQUEST)
                    response.accepted_renderer = JSONRenderer()
                    response.accepted_media_type = 'application/json'
                    response.renderer_context = {'indent': 4}
                    response.render()
                    return response


class RefreshTokenMiddleware(MiddlewareMixin):
    
    def process_request(self, request, *args, **kwargs):
        refresh_token = request.POST.get('refresh_token')
        if refresh_token is not None:
            path = re.search(r".*/(\d+)/?$", request.path_info)
            if path:
                pk = path.group(1)
                try:
                    decoded_token = jwt.decode(
                        refresh_token,
                        SIMPLE_JWT['SIGNING_KEY'],
                        algorithms=[SIMPLE_JWT['ALGORITHM']],
                    )
                except Exception as e:
                    message = {
                        'token_error':_(f'{str(e)}.')
                    }
                    # Se crea la respuesta a la petición usando el formato JSON.
                    response = Response(message, status=status.HTTP_400_BAD_REQUEST)
                    response.accepted_renderer = JSONRenderer()
                    response.accepted_media_type = 'application/json'
                    response.renderer_context = {'indent': 4}
                    response.render()
                    return response
                if not str(decoded_token['user_id']) == pk:
                    message = {
                        'token_error':_('The "user_id" sent in the URL does not match the "user_id" in the refresh token.')
                    }
                    # Se crea la respuesta a la petición usando el formato JSON.
                    response = Response(message, status=status.HTTP_400_BAD_REQUEST)
                    response.accepted_renderer = JSONRenderer()
                    response.accepted_media_type = 'application/json'
                    response.renderer_context = {'indent': 4}
                    response.render()
                    return response



