from django.shortcuts import render

from .serializers import CreateStatusSerializer
from .serializers import StatusSerializer
from .models import Status
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class StatusViewSet(ModelViewSet):
    def get_queryset(self):
        return Status.objects.all().order_by('-postedAt')[:10]
        
    def get_serializer_class(self):
        if(self.request.method=='POST'):
            return CreateStatusSerializer
        return StatusSerializer

    def get_serializer_context(self):
        return {
            'userid': self.request.user.id,
            'header':self.request.headers
        }