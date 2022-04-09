import api_interactions as ai
import parsing_lst as par

def get_near_by_resturants(address_or_postalcode, radius, type_of_food):
    near_by_resturants = ai.search_nearby(address_or_postalcode, radius, type_of_food)
    final_result = []
    for tuple in near_by_resturants:
        place_id = tuple[1]
        address_info_lst = ai.place_id_to_address_lst(place_id)
        final_address = par.info_lst_to_address(address_info_lst)
        temp = (tuple[0], final_address)
        final_result.append(temp)

    return final_result

print('----------address 20740----------')
print('----------near by chinese food with in 1000 meter----------')
print(get_near_by_resturants('20740', 1000, 'chinese'))
print('----------near by mexican food with in 1000 meter----------')
print(get_near_by_resturants('20740', 1000, 'mexican'))












