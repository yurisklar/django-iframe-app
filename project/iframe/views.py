import json

from django.http import HttpResponse
from django.views.generic import TemplateView, View
from django.views.generic.base import ContextMixin
from django.views.decorators.clickjacking import xframe_options_exempt
from django.utils.decorators import method_decorator

from iframe.models import Image


class IframeView(TemplateView):
    template_name = "iframe.html"

    def get_context_data(self, **kwargs):
        return {
            "loading_images_count": Image.DEFAULT_LOAD_IMAGES_NUMER
        }

    @method_decorator(xframe_options_exempt)
    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        return self.render_to_response(context)


class ImagesView(View, ContextMixin):
    http_method_names = ['get']
    content_type = "application/json"

    def get_context_data(self, **kwargs):
        images = Image.objects.filter(tag__name=kwargs["tag"])
        if not images:
            images = Image.objects.order_by('?')[
                0: Image.DEFAULT_LOAD_IMAGES_NUMER]
        return images

    def render_to_json_response(self, context):
        return HttpResponse(self.convert_context_to_json(context))

    def convert_context_to_json(self, context):
        return json.dumps([{"image": image.picture.url} for image in context])

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        return self.render_to_json_response(context)
