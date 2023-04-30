# Django REST Framework
from rest_framework.routers import DefaultRouter

# Project
from users.infrastructure.api.port.views import UserViewSet

router = DefaultRouter()
router.register(r'user', UserViewSet, basename='user')
urlpatterns = router.urls