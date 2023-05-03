# Django REST Framework simpleJWT
from rest_framework_simplejwt.utils import datetime_from_epoch

# Project
from users.models import BlacklistedToken


class TokenRepository:

    model = BlacklistedToken
    
    def create(self, decoded_token=None, token=None, user_instance=None):
        self.model.objects.create(
            user_id=user_instance,
            token=str(token),
            jti=decoded_token['jti'],
            expires_at=datetime_from_epoch(decoded_token['exp']),
        )

    def get_by_only_token(self, token):
        return self.model.objects.filter(token=token).only('token').first()
    
    def token_exists(self, token):
        return self.model.objects.filter(token=token).exists()
