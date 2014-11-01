from django.conf.urls import patterns, include, url
from django.contrib import admin

from iframe.views import IframeView

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
)

urlpatterns += patterns('',
    url(r'^iframe/', IframeView.as_view()),
)


