from django.db import models

# Create your models here.

class Person(models.Model):
    last_name = models.CharField(max_length=120)
    first_name = models.CharField(max_length=120)
    zipcode = models.IntegerField()
    phone = models.IntegerField(default=1234567890)

    def __str__(self):
        return self.first_name + self.last_name

