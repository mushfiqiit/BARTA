from .models import Story
from rest_framework import serializers
import requests

class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Story
        fields=['id', 'userid', 'username', 'image', 'postedAt', 'miniourl']


class CreateStorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Story
        fields=['id', 'image']

    def save(self):
        token=self.context['header']['authorization']
        result=requests.get(
            url='http://127.0.0.1:5000/login/users/me',
            headers={"Authorization":token}
            )
        username=result.json()['username']
        userid=result.json()['id']
        story=Story.objects.create(
            userid=userid,
            username=username,
            **self.validated_data
        )

        from copyreg import pickle
        from minio import Minio

        access_key = "minioadmin"
        secret_key = "minioadmin"

        client = Minio("127.0.0.1:9000", access_key, secret_key, secure=False)
        print(client)
        # buckets = client.list_buckets()
        # for bucket in buckets:
        #     print(bucket.name, bucket.creation_date)

        bucket_name = "facebookmini"
        print(story.image)
        path=str(story.image)
        path="media/"+path
        print("hello")
        print(path)
        fin_path = path.split("/")
        fin_path = fin_path[len(fin_path)-1]
        print(fin_path)

        print(client.fput_object(bucket_name, fin_path, path))
