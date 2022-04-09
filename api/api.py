import api_interactions as ai
import parsing_lst as par

near_by_resturants = ai.search_nearby('20742', 5000, 'chinese')
print('----------places with name and their place_id----------')
print(near_by_resturants)
print('--------------------------------')
final_result = []

for tuple in near_by_resturants:
    place_id = tuple[1]
    address_info_lst = ai.place_id_to_address_lst(place_id)
    final_address = par.info_lst_to_address(address_info_lst)
    temp = (tuple[0], final_address)
    final_result.append(temp)

print(final_result)











