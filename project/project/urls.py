from django.contrib import admin
from django.conf import settings
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static

from iframe.views import IframeView, ImagesView

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
)

urlpatterns += patterns('',
    url(r'^iframe/', IframeView.as_view()),
)

urlpatterns += patterns('',
    url(r'^images/(?P<tag>.*)/$', ImagesView.as_view()),
)

if settings.DEBUG:
    # serve static files by django only in development mode
    urlpatterns += patterns('',
    ) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += patterns('',
    ) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
