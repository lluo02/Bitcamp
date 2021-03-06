from rest_framework import serializers
from .models import Person

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('last_name', 'first_name', 'zipcode', 'phone', 'type_of_food')