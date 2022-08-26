from django.db import models

# Create your models here.
class Status(models.Model):
    userid=models.IntegerField()
    username=models.CharField(max_length=255, null=True)
    postedAt=models.DateTimeField(auto_now=True)
    content=models.TextField(blank=False)

