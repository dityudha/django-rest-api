from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class Bikes(models.Model):
    Brand = models.CharField(max_length=50)
    Model = models.CharField(max_length=30)
    # Price = models.CharField(max_length=15)
    Price = models.CharField(max_length=15, validators=[RegexValidator(r'^\d{1,15}$')])
    
   

    def __str__(self):
        return self.Brand