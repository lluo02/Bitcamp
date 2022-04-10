# this function takes in the list of address info 
# and extract and return the address in string
def info_lst_to_address(info_lst):
    address_info = info_lst[0]['address_components']
    result = ''
    for record in address_info:    
        if record['types'][0] == 'street_number':
            result = result + record['short_name'] + ' '
        elif record['types'][0] == 'route':
            result = result + record['short_name'] + ', '
        elif record['types'][0] == 'locality':
            result = result + record['short_name'] + ', '
        elif record['types'][0] == 'administrative_area_level_1':
            result = result + record['short_name'] + ', ' 
        elif record['types'][0] == 'postal_code':
            result = result + record['short_name']
    
    return result

