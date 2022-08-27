from django.db import models

# Create your models here.
class Story(models.Model):
    userid=models.IntegerField()
    username=models.CharField(max_length=255, null=True)
    postedAt=models.DateTimeField(auto_now=True)
    image=models.ImageField(upload_to='api/images')
    miniourl=models.CharField(max_length=255, null=True)