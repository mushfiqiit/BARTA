from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    pass

class Status(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    postedAt=models.DateTimeField(auto_now=True)
    content=models.TextField(blank=False)

class Story(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    postedAt=models.DateTimeField(auto_now=True)
    image=models.ImageField(upload_to='api/images')
    miniourl=models.CharField(max_length=255, null=True)
