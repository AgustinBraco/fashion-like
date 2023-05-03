# Django REST Framework simpleJWT
from rest_framework_simplejwt.tokens import RefreshToken

# Django
from django.utils.translation import gettext_lazy as _

# Project
from users.domain.token_repository import TokenRepository
from users.domain.user_repository import UserRepository
from project_settings.settings.base import SIMPLE_JWT
import jwt


class UserLogout:
    
    user = UserRepository()
    
    def token_to_blacklist(self, request, status)->dict:
        """
        Decodifica el "access_token" enviado en el header de la petición. El "access _token" y el "refresh_token" son agregados respectivamnete a sus listas negras.
        
        Returns:
            status (type:dict): Diccionario que contiene información sobre el estado de la petición y sus errores.
        """
        
        if request.data.get("refresh_token") is None:
            status['complete'] = False
            status['error_list']['refresh_token_error'] = _('The "refresh_token" was not sent in the request.')
            return status
        try:
            refresh_token = RefreshToken(request.data.get("refresh_token"))
        except Exception as e:
            status['complete'] = False
            status['error_list']['refresh_token_error'] = _(f'{str(e)}.')
            return status
        status['complete'] = True
        authorization_header = request.headers.get('Authorization')
        token = authorization_header.split(' ')[1]
        decoded_token = jwt.decode(
            token,
            SIMPLE_JWT['SIGNING_KEY'],
            algorithms=[SIMPLE_JWT['ALGORITHM']],
        )
        user_instance = self.user.get_by_only_id(id=decoded_token['user_id'])
        if not user_instance:
            status['complete'] = False
            status['error_list']['user_error'] = _('The access token user does not exist. Invalid access token.')
            return status
        refresh_token.blacklist()
        tkn = TokenRepository()
        instance_token = tkn.create(
            decoded_token=decoded_token,
            token=token,
            user_instance=user_instance,
        )
        status['complete'] = True
        return status

    def logout(self, request)->dict:
        status = {
            'complete':None,
            'error_list':{
                'user_error':_("None error."),
                'refresh_token_error':_("None error."),
            }
        }
        return self.token_to_blacklist(request, status)


