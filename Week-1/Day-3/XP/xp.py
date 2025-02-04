# 🌟 Exercise 1 : Convert lists into dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# new_list=dict(zip(keys,values))
# print(new_list)

# 🌟 Exercise 2 : Cinemax #2
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:


# print(f'Total cost for all family members are:${total_cost}'

# price_per_person=0
# total_cost=0

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# for value in family.values():
#     if value<=3: price_per_person=0
#     elif 3 <= value <= 12: price_per_person=10
#     else: price_per_person=15
#     total_cost+=price_per_person
#     print(f'Price per person: {price_per_person}')
# print(f'Total price for the whole family:{total_cost}')

# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable
# (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

# new_family={}
# total_cost=0

# count=int(input('how many family memebrs you have:'))

# for i in range(count):
#     name=input('Please add a name: ')
#     age=int(input('Please add the age: '))
#     new_family.update({name:age})
#     print(new_family)

# for value in new_family.values():
#     if value<=3: price_per_person=0
#     elif 3 <= value <= 12: price_per_person=10
#     else: price_per_person=15
#     total_cost+=price_per_person
#     print(f'Price per person: {price_per_person}')
# print(f'Total price for the whole family: {total_cost}')

#  Exercise 3: Zara
# Instructions
# Here is some information about a brand.
# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.

# brand={
#     'name': 'Zara',
#     'creation_date': 1975, 
#     'creator_name': 'Amancio Ortega Gaona', 
#     'type_of_clothes': ['men', 'women', 'children', 'home' ],
#     'international_competitors': ['Gap', 'H&M', 'Benetton'],
#     'number_stores': 7000,
#     'major_color': {
#         'France': 'blue', 
#         'Spain': 'red', 
#         'US': ['pink', 'green']}
# }

# # 3. Change the number of stores to 2.

# brand.update({'number_stores':2}) 
# print(brand)

# # 4. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.

# print(f'{brand['name']} had following clients in a market : {' '.join(brand['type_of_clothes'])}')

# # 5. Add a key called country_creation with a value of Spain.

# brand['country_of_creation']='Spain'
# print(brand)

# # 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.

# if 'international_competitors' in brand: 
#     brand['international_competitors'].append('Desigual')
#     print(brand)

# # 7. Delete the information about the date of creation.

# del brand['creation_date']
# print(brand)

# # 8. Print the last international competitor.

# last_value=brand['international_competitors'][-1]
# print(last_value)

# # 9. Print the major clothes colors in the US.

# major_colors_us=','.join(brand['major_color']['US'])
# print(major_colors_us)

# # 10. Print the amount of key value pairs (ie. length of the dictionary).

# brand_lenght=len(brand)
# print(brand_lenght)

# # 11. Print the keys of the dictionary.

# brand_keys=brand.keys()
# print(brand_keys)

# # 12. Create another dictionary called more_on_zara with the following details:
# # creation_date: 1975 
# # number_stores: 10 000


# more_on_zara={
#     'creation_date': 1975 ,
#     'number_stores': 10000
# }

# # 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.

# # new_zara_info=zip(brand,more_on_zara)
# # print(new_zara_info)
# for key, val in more_on_zara.items():
#     brand[key] = val
# # 14. Print the value of the key number_stores. What just happened ?

# num_stores=brand['number_stores']

# print(num_stores)

# Exercise 4 : Disney characters
# Instructions
# Use this list :

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# Analyse these results :

#1/

disney_users_A = {name: index for index, name in enumerate(users)}
print(disney_users_A)

# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

disney_users_B = {index: name for index, name in enumerate(users)}
print(disney_users_B)

# #3/ 

users_sorted=sorted(users)
disney_users_C = {name: index for index, name in enumerate(users_sorted)}
print(disney_users_C)

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.

# new_list=[]
# letter = 'i'

# new_list = [item for item in users if letter in item]
# print(new_list)

# The characters, which names start with the letter “m” or “p”.
new_list=[]

new_list = [name for name in users if name.lower().startswith(('m', 'p'))]
print(new_list)