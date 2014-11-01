from django.db import models


class ImageTag(models.Model):
    name = models.CharField(max_length=64)


class Image(models.Model):
    tag = models.ForeignKey(ImageTag)
    picture = models.ImageField(upload_to='images')
