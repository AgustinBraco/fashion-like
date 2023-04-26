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
from users.domain.user_repository import UserRepository



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




