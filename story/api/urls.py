from django import views
from django.urls import path
from .views import StoryViewSet
from rest_framework_nested import routers

router=routers.DefaultRouter()
router.register('story', StoryViewSet, basename='story')

urlpatterns=router.urls