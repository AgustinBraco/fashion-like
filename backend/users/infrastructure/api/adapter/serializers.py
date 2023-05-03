# Django REST Framework
from rest_framework import serializers

# Django
from django.contrib.auth.password_validation import validate_password
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

# Python
import re

# Project
from users.domain.user_repository import UserRepository


class CreateUserSerializer(serializers.ModelSerializer):
    
    password_confirm = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True,
        style={
            'input_type':'password',
        },
    )
    password = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True,
        style={
            'input_type':'password',
        },
    )
    
    class Meta:
        
        model = get_user_model()
        fields = ['name', 'surname', 'email', 'phone_number', 'password', 'password_confirm']
    
    # Validaciones
    def validate_email(self, value):
        email = value
        regex = re.compile(r"([A-Za-z0-9]+[-_.])*[A-Za-z0-9]+@[A-Za-z]+(\.[A-Z|a-z]{2,4}){1,2}")
        if not re.fullmatch(regex, email):
            raise serializers.ValidationError({
                'email':_('Invalid email'),
            })   
        return value

    def validate_password(self, value):
        try:
            validate_password(value)
        except ValidationError as e:
            raise serializers.ValidationError({
                'password':_(str(e)),
            })
        return value
    
    def validate(self, data):
        if self.context['method'] != 'PATCH':
            password1 = data['password']
            password2 = data['password_confirm']
            if password1 != password2:
                raise serializers.ValidationError({
                    'password':_('The two password fields didn’t match.'),
                })
            return data
        return data
    
    # Métodos
    def create(self, validated_data):
        user = UserRepository()
        create_user = user.create(
            name = validated_data['name'],
            surname = validated_data['surname'],
            email = validated_data['email'],
            phone_number = validated_data['phone_number'],
            password = validated_data['password'],
        )
        return create_user


class UserViewsetSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = get_user_model()
        fields = ['name', 'surname', 'email', 'phone_number']
    
    # Validaciones
    def validate_email(self, value):
        email = value
        regex = re.compile(r"([A-Za-z0-9]+[-_.])*[A-Za-z0-9]+@[A-Za-z]+(\.[A-Z|a-z]{2,4}){1,2}")
        if not re.fullmatch(regex, email):
            raise serializers.ValidationError({
                'email':_('Invalid email'),
            })   
        return value
    
    # Métodos
    def update(self, instance, validated_data):
        user = UserRepository()
        return user.update(instance=instance, data=validated_data)


class UserInfoSerializer(serializers.Serializer):

    name = serializers.CharField(read_only=True)
    surname = serializers.CharField(read_only=True)
    email = serializers.EmailField(read_only=True)
    phone_number = serializers.CharField(read_only=True)
    
    class Meta:
        fields = ['name', 'surname', 'email', 'phone_number']
        read_only_fields = fields



