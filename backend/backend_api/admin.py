from django.contrib import admin
from .models import Bikes
# Register your models here.

class BikesAdmin(admin.ModelAdmin):
    list = ('Brand', 'Model', 'Price')

    admin.site.register(Bikes)