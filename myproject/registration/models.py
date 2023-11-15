from django.db import models
from datetime import datetime

class Item(models.Model):
    # Поля для фотографии
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    # Поля для описания пользователя
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10, choices=[('Парень', 'Парень'), ('Девушка', 'Девушка')], default='other')
    Age = models.DateTimeField(default=datetime.now)
    tg = models.CharField(max_length=100, default='')
    phone = models.CharField(max_length=15, default='')
    descr = models.TextField(default='')