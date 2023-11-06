from django.contrib import admin

from .models import UserRegist

# admin.site.register(UserRegist)
class UserRegistAdmin(admin.ModelAdmin):
    list_display = ('name', 'gender', 'age', 'telegram', 'phone', 'description')
 # Определяем, какие поля отображать в списке записей

admin.site.register(UserRegist, UserRegistAdmin) 