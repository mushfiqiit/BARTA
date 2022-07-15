from rest_framework.permissions import AllowAny
from rest_framework import generics
from .serializers import CreateStatusSerializer, CreateStorySerializer, RegisterSerializer, StatusSerializer, StorySerializer
from .models import Status, Story, User
from rest_framework.viewsets import ModelViewSet
from django.db.models import Q
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

class RegisterView(generics.CreateAPIView):
    queryset=User.objects.all()
    permission_classes=(AllowAny,)
    serializer_class=RegisterSerializer


class StatusViewSet(ModelViewSet):
    def get_queryset(self):
        return Status.objects.filter(
            ~Q(user=self.request.user)).order_by('-postedAt')[:2]

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateStatusSerializer
        return StatusSerializer

    def get_serializer_context(self):
        return {
            'user_id':self.request.user.id,
        }


class StoryViewSet(ModelViewSet):
    def get_queryset(self):
        return Story.objects.filter(
            ~Q(user=self.request.user)).order_by('-postedAt')[:2]

    def get_serializer_class(self):
        if self.request.method=='POST':
            return CreateStorySerializer
        return StorySerializer

    def get_serializer_context(self):
        return {
            'user_id':self.request.user.id,
        }



class createStory(APIView):
    def get(self, request):
        return Response({'data':'empty'})

    def post(self, request):
        serializer=CreateStorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        image=serializer.validated_data['image']
        print(image)
        return Response({'data':'empty'})

