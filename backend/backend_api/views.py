from django.shortcuts import render
from .models import Bikes
from .serializers import BikesSerializer
from rest_framework import viewsets

# Create your views here.
class BikesViewSet(viewsets.ModelViewSet):
    serializer_class = BikesSerializer
    queryset = Bikes.objects.all()