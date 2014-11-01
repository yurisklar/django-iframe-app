from django.shortcuts import render

from django.views.generic import TemplateView


class IframeView(TemplateView):
    template_name = "iframe.html"