from django.contrib import admin

from iframe.models import ImageTag, Image


class ImageTagAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


class ImageAdmin(admin.ModelAdmin):
    list_display = ('id', '__unicode__')


admin.site.register(ImageTag, ImageTagAdmin)
admin.site.register(Image, ImageAdmin)