from django.contrib import admin
from django.db import models
from datetime import date

class UserRegist(models.Model):
    name = models.CharField(default='', max_length=200)
    gender = models.CharField(default='', max_length=10, choices=[('male', 'Парень'), ('female', 'Девушка')])
    age = models.DateField(default=date(2000, 11, 11))
    telegram = models.CharField(default='', max_length=100)
    phone = models.CharField(default='', max_length=20)
    description = models.TextField(default='', max_length=1000)
    
# class User(admin.ModelAdmin):
#     list_display = ('name', 'gender', 'age', 'telegram', 'phone', 'description')
#     # list_filter = ('is_active', 'price')
#     # search_fields = ('name', 'description')
#     # list_display_links = ('id', 'name')


