import sys
sys.path.insert(0, '../')
import api.api_interactions as ai
import api.parsing_lst as par
import random
import json


# this function returns the name of the resturant, address, and price level from 1-4, 
# 1 means very cheap and 4 means ver expensive
def get_near_by_resturants(address_or_postalcode, radius, type_of_food):
    near_by_resturants = ai.search_nearby(address_or_postalcode, radius, type_of_food)
    final_result = []
    for tuple in near_by_resturants:
        place_id = tuple[1]
        address_info_lst = ai.place_id_to_address_lst(place_id)
        final_address = par.info_lst_to_address(address_info_lst)
        temp = (tuple[0], final_address, tuple[2])
        final_result.append(temp)

    return final_result

# this function return one resturant that fit the price range 
# if no resturant is found, it returns error message
# if no resturant fit the price range, it gives user another resturant
# that is found in the area
def choose_one(zipcode, type_of_food, price_level):
    DISTANCE = 3000
    resturants = get_near_by_resturants(zipcode, DISTANCE, type_of_food)
    if len(resturants) == 0:
        return json.dumps('No resturant found, eat shit!')
    
    possible_resturants = []
    for resturant in resturants:
        if resturant[2] == price_level:
            possible_resturants.append(resturant)
    
    if len(possible_resturants) == 0:
        result = "No resturants in your price range, but check this out!\n"
        resturant = resturants[random.randint(0, len(resturants)-1)]
        result = result + 'name: ' + resturant[0] + ' address: ' + resturant[1]  
    else:
        resturant = possible_resturants[random.randint(0, len(possible_resturants)-1)]
        result = 'name: ' + resturant[0] + ' address: ' + resturant[1]
        
    return json.dumps(result)