import requests
from urllib.parse import urlencode

with open('apikey.txt') as file:
    key = file.readlines()
file.close()
# api key
api_key = key[0]

# address could be both address or postalcode
# returns the latitude and longtitude of the address or postalcode
def extract_lat_lng(address_or_postalcode):
    data_type = 'json'
    endpoint = f"https://maps.googleapis.com/maps/api/geocode/{data_type}"
    params = {"address": address_or_postalcode, "key": api_key}
    url_params = urlencode(params)
    url = f"{endpoint}?{url_params}"
    r = requests.get(url)
    if r.status_code not in range(200, 299): 
        return {}
    latlng = {}
    try:
        latlng = r.json()['results'][0]['geometry']['location']
    except:
        pass
    return latlng.get("lat"), latlng.get("lng")

# returns the restaurants nearby based on parameters
# address_or_postalcode: address or postal code of current location
# radius: in meters, the radius of searching from current location
# type: what type of resturant? e.g. Chinese, Mexican, French... 
def search_nearby(address_or_postalcode, radius, type):
    data_type = 'json'
    endpoint = f'https://maps.googleapis.com/maps/api/place/nearbysearch/{data_type}'
    location_tup = extract_lat_lng(address_or_postalcode)
    location_str = f'{location_tup[0]}, {location_tup[1]}'
    params = {
        'location': location_str, 
        'radius': radius, 
        'type': 'restaurant', 
        'keyword': type, 
        'key': api_key
    }
    url_params = urlencode(params)
    url = f"{endpoint}?{url_params}"
    r = requests.get(url)
    json_results = r.json()['results']
    return_lst = []
    for result in json_results:
        temp = (result['name'], result['place_id'])
        return_lst.append(temp)
    
    return return_lst

# returns the list containing address info of the place_id 
# the function that parses and extract info from this list
# is found in parsing.py
def place_id_to_address_lst(place_id):
    data_type = 'json'
    endpoint = f'https://maps.googleapis.com/maps/api/geocode/{data_type}'
    params = {'place_id': place_id, 'key': api_key}
    url_params = urlencode(params)
    url = f'{endpoint}?{url_params}'
    r = requests.get(url)
    if r.status_code not in range(200, 299): 
        return {}
    return r.json()['results']