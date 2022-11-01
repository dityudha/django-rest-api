from rest_framework import serializers
from backend_api.models import Bikes

class BikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bikes
        fields = '__all__'