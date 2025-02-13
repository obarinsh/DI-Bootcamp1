from anagram_checker import AnagramChecker

# Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.

# It should do the following:
# Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.
# If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
# Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
# Only alphabetic characters are allowed. No numbers or special characters.
# Whitespace should be removed from the start and end of the user’s input.
# with open("text.txt", "r", encoding="utf-8") as file:
#     text = file.read().splitlines()

checker = AnagramChecker('text.txt')


def menu():
    while True:
        word = input('please enter the word or write quit to exit:')
        word_splitted = word.split()
        valid_word_length = len(word_splitted)
        valid_string = " ".join(word_splitted)
        upper_valid_word = valid_string.upper()
        if upper_valid_word == 'QUIT':
            break
        elif valid_word_length > 1 or not upper_valid_word.isalpha():
            print("Only singe word is allowed")
        else:
            print(checker.is_valid_word(word))
            print(checker.get_anagrams(word))
            # print("Valid word:", word)


menu()
# Once your code has decided that the user’s input is valid, it should find out the following:
# All possible anagrams to the user’s word.
# Create an AnagramChecker instance and apply it to the steps created above.
# Display the information about the word in a user-friendly, nicely-formatted message such as:
# YOUR WORD :”MEAT”
# this is a valid English word.
# Anagrams for your word: mate, tame, team.
