# Django
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _

class UserLogin:
    
    def authenticate_user(self, request, status)->dict:
        """
        Verifica la identidad del usuario con el correo electronico y la contraseña.
        
        Returns:
            status (type:dict): Diccionario que contiene información sobre el estado de la petición y sus errores.
        """
        
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user:
            status['complete'] = True
            return status
        status['complete'] = False
        status['error'] = _('Invalid email or password.')
        return status
    
    def login(self, request)->dict:
        status = {
            'complete':None,
            'error':None,
        }
        return self.authenticate_user(request, status)

