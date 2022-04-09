import requests
from urllib.parse import urlencode

with open('apikey.txt') as file:
    key = file.readlines()
file.close()

api_key = key[0]

# address could be both address or postalcode
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

print(extract_lat_lng('20742'))


