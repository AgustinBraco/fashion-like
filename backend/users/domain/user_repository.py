# Django
from django.contrib.auth import get_user_model


class UserRepository:

    model = get_user_model()

    def create(self, name, surname, email, phone_number, password):
        instance = self.model.objects.create_user(
            name=name,
            surname=surname,
            email=email,
            phone_number=phone_number,
            password=password,
        )
        instance.save()
        return instance

    def get_by_id(self, id=None):
        return self.model.objects.filter(is_active=True, id=id).only('name', 'surname', 'email', 'phone_number').first()
    
    def get_by_only_id(self, id=None):
        return self.model.objects.filter(is_active=True, id=id).only('id').first()

    def update(self, instance, data):
        for key, value in data.items():
            setattr(instance, key, value)
        instance.save()
        return instance

    def update_password(self, id, password):
        instance = self.model.objects.filter(is_active=True, id=id).only('password').first()
        instance.set_password(password)
        instance.save()
        return instance
        
    def delete(self, id=None):
        instance = self.model.objects.filter(is_active=True, id=id).only('is_active').first()
        instance.is_active = False
        instance.save()
        return instance

