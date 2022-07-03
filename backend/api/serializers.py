from dataclasses import field
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import Status, User
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer, UserSerializer as BaseUserSerializer


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username', 'password', 'email']


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'username', 'password',
                  'email',]

class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields= ['id', 'username', 'email']

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model=Status
        fields=['user', 'postedAt', 'content']


class CreateStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model=Status
        fields=['content']

    def save(self):
        user=User.objects.get(
            id=self.context['user_id']
        )
        status=Status.objects.create(
            user=user,
            content=self.validated_data['content']
        )

