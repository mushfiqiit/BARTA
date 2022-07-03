from rest_framework.permissions import AllowAny
from rest_framework import generics
from .serializers import CreateStatusSerializer, RegisterSerializer, StatusSerializer
from .models import Status, User
from rest_framework.viewsets import ModelViewSet
from django.db.models import Q

class RegisterView(generics.CreateAPIView):
    queryset=User.objects.all()
    permission_classes=(AllowAny,)
    serializer_class=RegisterSerializer


class StatusViewSet(ModelViewSet):
    def get_queryset(self):
        return Status.objects.filter(
            ~Q(user=self.request.user))

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateStatusSerializer
        return StatusSerializer

    def get_serializer_context(self):
        return {
            'user_id':self.request.user.id,
        }

