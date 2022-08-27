from .serializers import CreateStorySerializer
from .serializers import StorySerializer
from .models import Story
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class StoryViewSet(ModelViewSet):
    def get_queryset(self):
        return Story.objects.all().order_by('-postedAt')[:10]
        
    def get_serializer_class(self):
        if(self.request.method=='POST'):
            return CreateStorySerializer
        return StorySerializer

    def get_serializer_context(self):
        return {
            'userid': self.request.user.id,
            'header':self.request.headers
        }