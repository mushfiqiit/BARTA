from asyncore import read
from dataclasses import field
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import Status, Story, User
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer, UserSerializer as BaseUserSerializer
import base64

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username', 'password', 'email']


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'username', 'password']

class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields= ['id', 'username',]

class StatusSerializer(serializers.ModelSerializer):
    user=UserSerializer(many=False, read_only=True)
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


class StorySerializer(serializers.ModelSerializer):
    user=UserSerializer(many=False, read_only=True)
    class Meta:
        model=Story
        fields=['id', 'user', 'image', 'postedAt']


class CreateStorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Story
        fields=['id', 'image']

    def save(self):
        user=User.objects.get(
            id=self.context['user_id']
        )
        story=Story.objects.create(
            user=user,
            **self.validated_data
        )