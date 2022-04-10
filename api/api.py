import api_interactions as ai
import parsing_lst as par
import random


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

DISTANCE = 3000

def choose_one(zipcode, type_of_food, price_level):
    resturants = get_near_by_resturants(zipcode, DISTANCE, type_of_food)
    possible_resturants = []

    for resturant in resturants:
        if resturant[2] == price_level:
            possible_resturants.append(resturant)
    
    if len(possible_resturants) == 0:
        return "No resturant selected, please try again!"
    else:
        return possible_resturants[random.randint(0, len(possible_resturants)-1)]

print(choose_one('20740', 'mexican', 1))