from django.db import models


class ImageTag(models.Model):
    name = models.CharField(max_length=64)

    def __unicode__(self):
        return self.name


class Image(models.Model):
    DEFAULT_LOAD_IMAGES_NUMER = 3

    tag = models.ForeignKey(ImageTag)
    picture = models.ImageField(upload_to='images')

    def __unicode__(self):
        return "Image with tag %s" % (self.tag.name, )
