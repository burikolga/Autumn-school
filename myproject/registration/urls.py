from django.contrib import admin
from django.urls import path
from . import views
from .views import submitF
app_name = 'registration'

urlpatterns = [
    path('regist2', submitF, name="submitF"),
]
