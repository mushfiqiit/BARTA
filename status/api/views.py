from urllib import request
from django.shortcuts import render

from .serializers import CreateStatusSerializer
from .serializers import StatusSerializer
from .models import Status
from rest_framework.viewsets import ModelViewSet
import requests
from django.db.models import Q

# Create your views here.
class StatusViewSet(ModelViewSet):
    def get_queryset(self):
        if 'authorization' not in self.request.headers:
            return Status.objects.all().order_by('-postedAt')[:10]
        session = requests.Session()
        session.trust_env = True
        result = session.get(
            url='http://user:5003/login/users/me',
            headers={"Authorization":self.request.headers['authorization']}
        )
        username=result.json()['username']
        userid=result.json()['id']
        return Status.objects.filter(
            ~Q(username=username)).order_by('-postedAt')[:10]

        
    def get_serializer_class(self):
        if(self.request.method=='POST'):
            return CreateStatusSerializer
        return StatusSerializer

    def get_serializer_context(self):
        return {
            'userid': self.request.user.id,
            'header':self.request.headers
        }