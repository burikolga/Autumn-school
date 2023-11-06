try:    
    from django.contrib import admin
    from django.urls import path
    from . import views
    app_name = 'registration'

    
    urlpatterns = [
        path('../../../registration/', views.submitF, name="submitF"),
    ]
except Exception as e:
    print(str(e))