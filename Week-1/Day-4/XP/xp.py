# 🌟 Exercise 1 : What are you learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

# def display_message():
#     print('In this course we are learning Python')

# display_message()


# 🌟 Exercise 2: What’s your favorite book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.


# def favorite_book(title):
#     message=(f'One of my favorite books is {title}')
#     print(message)

# favorite_book('Harry Potter')


# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

# def describe_city(city, country: str='Israel'):
#     print(f'{city} is a capital of {country}')

# describe_city('Jerusalem')

# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

# import random

# def gen_rand_num(number):
#     random_num = random.randint(1, 100)
#     if number==random_num: print('Success!')
#     else: print(f'Failed, numbers are: {number} and {random_num}')


# gen_rand_num(33)




# # 🌟 Exercise 5 : Let’s create some personalized shirts !
# # Instructions
# # Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# # The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# # Call the function make_shirt().

# # Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# # Call the function, in order to make a large shirt with the default message
# # Make medium shirt with the default message
# # Make a shirt of any size with a different message.

# # Bonus: Call the function make_shirt() using keyword arguments.

# # def make_shirt(text: str="I love Python",size: str="L"):
# #     print(f'The size of the shirt is {size} and the text is {text}')

# # make_shirt()
# # make_shirt('I love JS')

# # def make_shirt(text, size="L"):
# #     print(f"Shirt size: {size}, Text: {text}")
# # make_shirt('I love coding')

# # 🌟 Exercise 6 : Magicians …
# # Instructions
# # # Using this list of magician’s names

# # magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# # # Create a function called show_magicians(), which prints the name of each magician in the list.

# # magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# # def show_magicians(magician_names):
# #     for name in magician_names:print(name)

# # show_magicians(magician_names)

# # # Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.

# # magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# # def make_great(magician_names):
# #     for i, name in enumerate(magician_names): 
# #         magician_names[i]=f'{name} Great'
# #         print(magician_names)

# # make_great(magician_names)
# # show_magicians(magician_names)
# # Call the function make_great().
# # Call the function show_magicians() to see that the list has actually been modified.

# # 🌟 Exercise 7 : Temperature Advice
# # Instructions
# # Create a function called get_random_temp().
# # This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# # Test your function to make sure it generates expected results.

# import random

# def get_random_temp():
#     random_temp = random.randint(-10, 40)
#     print (random_temp)
#     return random_temp

# get_random_temp()


# # # Create a function called main().
# # # Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# # # Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”
# # new_temp=''

# # def main():
# #     new_temp = get_random_temp()
# #     print(f'The temperature right now is {new_temp} degrees Celsius.')
# #     if new_temp<0: print('Brrr, that/’s freezing! Wear some extra layers today')
# #     elif 0<=new_temp<16: print('Quite chilly! Don/’t forget your coat')
# #     elif 16<=new_temp<=23: print('There is sun outside ')
# #     elif 24<=new_temp<32: print('Dont-forget sunscreen')
# #     elif 32<=new_temp<=40: print('Better to stay home!')

# # main()

# # Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# # below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# # between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# # between 16 and 23
# # between 24 and 32
# # between 32 and 40

# # Change the get_random_temp() function:
# # Add a parameter to the function, named ‘season’.
# # Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season,
# #  eg. if season is ‘winter’, temperatures should only fall between -10 and 16.

# import random

# def get_random_temp(season):
#     if season=='winter': random_temp=random.randint(-10, 15)
#     elif season=='spring': random_temp=random.randint(10, 20)
#     elif season=='summer': random_temp=random.randint(22, 40)
#     elif season=='fall': random_temp=random.randint(10, 30)
#     print (random_temp)
#     return random_temp

# get_random_temp('fall')

# # Now that we’ve changed get_random_temp(), let’s change the main() function:
# # Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly.
# #  Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# # Use the season as an argument when calling get_random_temp().

# def main():
#     season=input('Please add season: ')
#     new_temp = get_random_temp(season)
#     print(f'The temperature right now is {new_temp} degrees Celsius.')
#     if new_temp<0: print('Brrr, that/’s freezing! Wear some extra layers today')
#     elif 0<=new_temp<16: print('Quite chilly! Don/’t forget your coat')
#     elif 16<=new_temp<=23: print('There is sun outside ')
#     elif 24<=new_temp<32: print('Dont-forget sunscreen')
#     elif 32<=new_temp<=40: print('Better to stay home!')

# main()
# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.


# 🌟 Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. 
# Create a list of wrong_answers

correct_answers=0
wrong_answers=0

def print_result(correct_answers, wrong_answers):
    print(f'Amount of the correct answers are : {correct_answers}')
    print(f'Amount of the wrong answers are : {wrong_answers}')

def quiz(data):
    wrong_answers_list=[]
    user_answer=''
    global correct_answers, wrong_answers
    for item in data:
           print(item['question'])
           user_answer=input('Please put your answer:')
           if user_answer==item['answer']: correct_answers+=1
           else: 
               wrong_answers+=1 
               wrong_answers_list.append(user_answer)
           print(f'Correct answer is : {item['answer']}')
           print() 
# Create a function that informs the user of his number of correct/incorrect answers.
    print_result(correct_answers, wrong_answers)
    print(f'The list of wrong answers: {wrong_answers_list}')
    return correct_answers

quiz(data)



# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.