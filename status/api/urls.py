from django import views
from django.urls import path
from .views import StatusViewSet
from rest_framework_nested import routers

router=routers.DefaultRouter()
router.register('status', StatusViewSet, basename='status')

urlpatterns=router.urls