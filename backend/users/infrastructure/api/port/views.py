# Django REST Framework
from rest_framework.response import Response
from rest_framework import (
    generics, permissions, status, viewsets, mixins
)

# Django REST Framework simpleJWT
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# Django
from django.utils.translation import gettext_lazy as _

# Project
from users.infrastructure.api.adapter.serializers import *
from users.aplication.login import UserLogin
from users.aplication.logout import UserLogout
from users.domain.user_repository import UserRepository


class LoginAPIView(TokenObtainPairView):

    serializer_class = TokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        user = UserLogin()
        status_auth = user.login(request)
        
        if status_auth['complete']:
            serializer = self.serializer_class(data=request.data)

            if serializer.is_valid():
                message = {
                    'access_token':serializer.validated_data['access'],
                    'refresh_token':serializer.validated_data['refresh'],
                    'message':_('Login successful.'),
                    'next_url':'Por definir',
                }
                return Response(message, status=status.HTTP_200_OK)
            
        message = {
            'error':_(status_auth['error']),
        }
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


class LogoutAPIView(generics.GenericAPIView):
    
    permission_classes = (permissions.IsAuthenticated,)
    
    def post(self, request, *args, **kwargs):
        user = UserLogout()
        status_logout = user.logout(request)
        
        if status_logout['complete']:
            message = {
                'message':_('Session closed successfully.'),
                'next_url':'Por definir.',
            }
            return Response(message, status=status.HTTP_200_OK)
        
        message = {
            'error':status_logout['error_list'],
        }
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


class CreateUserAPIView(generics.GenericAPIView):
    
    serializer_class = CreateUserSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'method':request.method})
        
        if serializer.is_valid():
            serializer.save()
            message = {
                'message':_('Registration successful.'),
                'next_url':'login_user',
            }
            return Response(message, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




