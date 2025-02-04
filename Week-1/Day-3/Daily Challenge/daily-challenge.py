# # Challenge 1
# # Ask a user for a word
# # Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# # Make sure the letters are the keys.
# # Make sure the letters are strings.
# # Make sure the indexes are stored in a list and those lists are values.
# # Examples

# # "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# # "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# # "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}

# word=input('please put a word: ')
# dictionary={}
# index=0

# for letter in word:
#     if letter in dictionary:
#         dictionary[letter].append(index)
#     else: dictionary[letter] = [index] 
#     index += 1
# print(dictionary)

# print(dictionary.keys())


# Challenge 2
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)
# 
# 
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.

items_purchase = {
"Water": "$1000",
"Bread": "$3000",
"TV": "$1,000",
"Fertilizer": "$40000"
}
wallet="$300"
shopping_list=[]


for item in items_purchase:
    price_of_item = int(items_purchase[item].replace('$', '').replace(',', ''))
    money_in_wallet = int(wallet.replace('$', '').replace(',', ''))
    if price_of_item<=money_in_wallet: 
        shopping_list.append(item)
        money_in_wallet=money_in_wallet-price_of_item
    else:print('Nothing')
print(money_in_wallet)
print(shopping_list)

# Sort the list in alphabetical order.
shopping_list.sort()
print(shopping_list)







# The key is the product, the value is the price

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"

# ➞ ["Bread", "Fertilizer", "Water"]

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100" 

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# # instead you can by the Spoon that is $2

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 

# ➞ "Nothing"
