from django.db import models

# Create your models here.

class Person(models.Model):
    name = models.CharField(max_length=120)
    zipcode = models.IntegerField()
    phone = models.IntegerField(default=1234567890)

    def __str__(self):
        return self.name

