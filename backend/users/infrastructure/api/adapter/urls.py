# Django
from django.urls import path, include

# Django REST Framework simpleJWT
from rest_framework_simplejwt.views import TokenRefreshView

# Project
from users.infrastructure.api.port.views import *


urlpatterns = [
    # Projetc
    path('create/user/', CreateUserAPIView.as_view(), name='create_user'),
]