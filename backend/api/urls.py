from getpass import getuser
from django import views
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, StatusViewSet, StoryViewSet, createStory, getUser
from rest_framework_nested import routers

router=routers.DefaultRouter()
router.register('status', StatusViewSet, basename='status')
router.register('story', StoryViewSet, basename='story')

urlpatterns=router.urls
urlpatterns += [
    path('register/',RegisterView.as_view()),
    path('createstory/', createStory.as_view()),
    path('getuser/', getUser.as_view())
]