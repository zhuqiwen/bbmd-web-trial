from django.conf.urls import url, include

from rest_framework.routers import DefaultRouter

from . import api, views


router = DefaultRouter()
router.register(
    r'run',
    api.RunViewset, base_name="run")
router.register(
    r'run/(?P<run_id>\d+)/models',
    api.ModelSettingsViewset,
    base_name="models")
router.register(
    r'run/(?P<run_id>\d+)/bmds',
    api.BMDAnalysisViewset,
    base_name="bmds")
router.register(
    # r'run/(?P<run_id>\d+)/lde',
    r'lde',
    api.LowDoseExtrapolationViewset,
    base_name="lde")


urlpatterns = [

    # api
    url(r'^api/', include(router.urls, namespace="api")),

    # CRUD views
    url(r'^create/$',
        views.RunCreate.as_view(),
        name="run_create"),
    url(r'^run/(?P<uuid>[^/]+)/$',
        views.RunDetail.as_view(),
        name="run_detail"),
    url(r'^run/(?P<uuid>[^/]+)/execute/$',
        views.RunExecute.as_view(),
        name="run_execute"),
    url(r'^run/(?P<uuid>[^/]+)/update/$',
        views.RunUpdate.as_view(),
        name="run_update"),
    url(r'^run/(?P<uuid>[^/]+)/delete/$',
        views.RunDelete.as_view(),
        name="run_delete"),
]
