from dataclasses import field
from rest_framework import serializers
from .models import Status
import requests

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model=Status
        fields=['username', 'userid', 'postedAt', 'content']

class CreateStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model=Status
        fields=['content']

    def save(self):
        token=self.context['header']['authorization']
        result=requests.get(
            url='http://user:5003/login/users/me',
            headers={"Authorization":token}
            )
        username=result.json()['username']
        userid=result.json()['id']
        status=Status.objects.create(
            userid=userid,
            username=username,
            **self.validated_data
        )

