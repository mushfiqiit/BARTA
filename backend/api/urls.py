from django import views
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, StatusViewSet
from rest_framework_nested import routers

router=routers.DefaultRouter()
router.register('status', StatusViewSet, basename='status')

urlpatterns=router.urls
urlpatterns += [
    path('register/',RegisterView.as_view())
]