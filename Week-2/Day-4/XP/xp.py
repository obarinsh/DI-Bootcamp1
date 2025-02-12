import json
# import random


# # Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?


# def get_words_from_file():
#     with open("random.txt", "r", encoding="utf-8") as file:
#         content = file.read().splitlines()
#     return content

# # get_words_from_file()

# # Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# # use the words list to get your random words.
# # the amount of words should be the value of the length parameter.
# # Take the random words and create a sentence (using a python method), the sentence should be lower case.


# def get_random_sentence(length):
#     words = get_words_from_file()
#     random_words = random.choices(words, k=length)
#     random_sentence = " ".join(random_words)
#     lower_case_centence = random_sentence.lower()
#     print(lower_case_centence)
#     return lower_case_centence


# # get_random_sentence(5)


# # Create a function called main which will:

# # Print a message explaining what the program does.

# # Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# # If the user inputs incorrect data, print an error message and end the program.
# # If the user inputs correct data, run your code.

# def main():
#     print('This programm generates random sentences of lenght of your choice!')
#     length = int(input(
#         'how long you want the sentence to be?Should be a num between 2 and 20.'))
#     if 2 <= length <= 20:
#         print(
#             f'Your random sentence is: {get_random_sentence(length)}')
#     else:
#         print("Error: Please enter a number between 2 and 20.")
#         return
#     exit()


# main()


# 🌟 Exercise 2: Working with JSON
# Instructions


# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.

sampleJson = {
    "company": {
        "employee": {
            "name": "emma",
            "payable": {
                "salary": 7000,
                "bonus": 800
            }
        }
    }
}

json_file = 'sample.json'

with open(json_file, 'w') as file_obj:
    json.dump(sampleJson, file_obj, indent=6)

print(sampleJson['company']['employee']['payable']['salary'])
sampleJson['company']['employee']['name'] = '30/12/1992'
print(sampleJson)

with open(json_file, 'w') as file_obj:
    json.dump(sampleJson, file_obj, indent=6)
