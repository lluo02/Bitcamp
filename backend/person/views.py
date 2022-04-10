from .models import Person
from django.http import HttpResponse
import sys
sys.path.insert(0, '../')
from api import api
import json
# Create your views here.

def index (request):
    if request.method == 'POST':
        data = json.loads(request.body)
        r = api.choose_one(data['zipcode'], data['type_of_food'], data['price_range'])
        Person(name=data['name'], zipcode=data['zipcode'], phone=data['phone']).save()
        print(r)
        return HttpResponse(r)
    else: 
        return HttpResponse('HTTP get')
    
    

    