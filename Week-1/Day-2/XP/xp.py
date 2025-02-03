# # 🌟 Exercise 1 : Favorite Numbers
# # Instructions
# # Create a set called my_fav_numbers with all your favorites numbers.

# my_fav_numbers={33,12,12,3}

# # Add two new numbers to the set.

# my_fav_numbers.add(66)
# my_fav_numbers.add(99)
# print(my_fav_numbers)

# # Remove the last number.

# my_fav_numbers.pop()
# print(my_fav_numbers)

# # Create a set called friend_fav_numbers with your friend’s favorites numbers.

# friend_fav_numbers={44,21,89,0}

# # Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# our_fav_numbers=friend_fav_numbers|my_fav_numbers
# print(our_fav_numbers)

# # 🌟 Exercise 2: Tuple
# # Instructions
# # Given a tuple which value is integers, is it possible to add more integers to the tuple?

# # Tuple is an ordered, immutable sequence,  they cannot be modified (i.e., no adding or removing elements after creation).


# # 🌟 Exercise 3: List
# # Instructions
# # Using this list:
# basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# # Remove “Banana” from the list.

# basket.remove('Banana')
# print(basket)

# # Remove “Blueberries” from the list.
# basket.remove('Blueberries')
# print(basket)

# # Add “Kiwi” to the end of the list.

# basket.append("Kiwi")
# print(basket)

# # Add “Apples” to the beginning of the list.

# basket.insert(0,"Apples")
# print(basket)

# # Count how many apples are in the basket.

# count=basket.count('Apples')
# print(count)

# # Empty the basket.
# basket.clear()

# # Print(basket)
# print(basket)


# # Exercise 4: Floats
# # Instructions
# # Recap – What is a float? What is the difference between an integer and a float?
# # Create a list containing the following sequence of floats and integers (it should be a list with mixed types): 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# # Can you think of another way to generate a sequence of floats?

# # Float and integers are both numeric values. Float is  not complete  (for example 4.33) while integer is (4).

# nums=[1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

# #can be generate by user input, for example:

# nums.append(float(input('please add a num:')))
# print(nums)

# # can be created using range:

# new_gen_list = [x / 2 for x in range(3, 11)]  # Generates values: 1.5, 2, 2.5, ..., 5
# print(new_gen_list)  # Output: [1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]

# # 🌟 Exercise 5: For Loop
# # Instructions
# # Use a for loop to print all numbers from 1 to 20, inclusive.

# for i in range (1,21): print(i)


# # Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# numbers=range(1,21)

# for number in numbers:
#     if number%2==0 : print(number)
    

# # 🌟 Exercise 6 : While Loop
# # Instructions
# # Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# my_name="Olga"
# user_name = ''
# while user_name != my_name:
#   user_name = input('pls enter your name:')


# # 🌟 Exercise 7: Favorite fruits
# # Instructions
# # Ask the user to input their favorite fruit(s) (one or several fruits).
# # Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".

# fav_fruits=input('pls enter your fav fruits separated by space:')

# # Store the favorite fruit(s) in a list (convert the string of words into a list of words).

# fruits_list=fav_fruits.split()
# print(fruits_list)

# # Now that we have a list of fruits, ask the user to input a name of any fruit.
# new_fruit=input('pls enter your new fruit:')

# # If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# # If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# if new_fruit in fruits_list: print('You chose one of your favorite fruits! Enjoy!')
# else: print('You chose a new fruit. I hope you enjoy')

# # Exercise 8: Who ordered a pizza ?
# # Instructions
# # Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# # As they enter each topping, print a message saying you’ll add that topping to their pizza.
# # Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# # pizza_topings=''
# # all_pizza_topings=[]

# # while pizza_topings!='Quit': 
# #       pizza_topings=input('pls enter pizza topping to add it or Quit to finish:')
# #       print(f'Adding {pizza_topings} to your pizza')
# #       all_pizza_topings.append(pizza_topings)
# # if pizza_topings=='Quit': total_price = 10 + (len(all_pizza_topings) * 2.5)
# # print (f'Your pizza now has following topings{all_pizza_topings} and total price is {total_price}')


# pizza_topings = ''
# all_pizza_topings = []

# while pizza_topings!= 'Quit':  
#     pizza_topings = input('Please enter pizza topping to add it or "Quit" to finish: ')

#     if pizza_topings!= 'Quit':  
#         print(f'Adding {pizza_topings} to your pizza')
#         all_pizza_topings.append(pizza_topings)

# total_price = 10 + (len(all_pizza_topings) * 2.5)

# print(f'Your pizza now has the following toppings: {all_pizza_topings} and the total price is ${total_price}')


# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.


# baby_age=0
# teen_age=10
# adult_age=15
# family_ages=[]
# total_cost=0

# people_in_family = int(input('How many family member are you?'))
# for i in range(people_in_family):
#     age = int(input(f'Please enter the age of person {i + 1}: '))
#     family_ages.append(age)
#     print(family_ages)

# for age in family_ages:
#  if age<=3: total_cost+=baby_age
#  elif 3 <= age <= 12: total_cost+=teen_age
#  else: total_cost+=adult_age

# print(f'Total cost for all family members are:${total_cost}')


# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

# list_of_teens=['Elli','Donald','Luka','Mario','Sam']
# # filtered_list=[]

# for teen in list_of_teens[:]:
#     teenager_age=int(input(f'Whats your age, {teen}?'))
#     if  16<=teenager_age<=21: list_of_teens.remove(teen)
#     # filtered_list=list_of_teens
# print(list_of_teens)


# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches=[]

while 'Pastrami sandwich' in sandwich_orders: 
    sandwich_orders.remove('Pastrami sandwich')
print(sandwich_orders)

for sandwhich in sandwich_orders:
    finished_sandwiches.append(sandwhich)
print(finished_sandwiches)

for item in finished_sandwiches:
    print(f'I made your {item}')

