from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import PersonSerializer
from .models import Person
from django.http import HttpResponse
import sys
sys.path.insert(0, '../')
from api import api

# Create your views here.

def index (request):
    if request.method == 'POST':
        r = api.choose_one(request.POST.get('zipcode'), 5000, 'type_of_food')
        Person(name=request.POST.get('name'), zipcode=request.POST.get('zipcode'), phone=request.POST.get('phone')).save()
    else: 
        r = api.choose_one(request.GET.get('zipcode'), 5000, 'type_of_food')
        Person(name=request.GET.get('name'), zipcode=request.GET.get('zipcode'), phone=request.GET.get('phone')).save()
    return HttpResponse(r.text)

    