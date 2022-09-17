from .serializers import CreateStorySerializer
from .serializers import StorySerializer
from .models import Story
from rest_framework.viewsets import ModelViewSet
from django.db.models import Q
import requests

# Create your views here.
class StoryViewSet(ModelViewSet):
    def get_queryset(self):
        if 'authorization' not in self.request.headers:
            return Story.objects.all().order_by('-postedAt')[:10]

        print(self.request.headers['authorization'])
        result=requests.get(
            url='http://0.0.0.0:5003/login/users/me/',
            headers={"Authorization":self.request.headers['authorization']}
            )
        username=result.json()['username']
        userid=result.json()['id']
        return Story.objects.filter(
            ~Q(username=username)).order_by('-postedAt')[:10]
        
    def get_serializer_class(self):
        if(self.request.method=='POST'):
            return CreateStorySerializer
        return StorySerializer

    def get_serializer_context(self):
        return {
            'userid': self.request.user.id,
            'header':self.request.headers
        }