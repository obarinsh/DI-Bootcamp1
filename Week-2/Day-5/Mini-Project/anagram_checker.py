# Create a new file called anagram_checker.py which contains a class called AnagramChecker.

# The class should have the following methods:


# Note: None of the methods in the class should print anything.


class AnagramChecker():
    # __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
    def __init__(self, filename):
        with open(filename, "r", encoding="utf-8") as file:
            self.text = set(file.read().splitlines())

    def is_valid_word(self, word):
        word_upper = word.upper()
        if word_upper in self.text:
            return f'Your word is {word_upper}\nThis is a valid English word'
        else:
            return 'Word doesnt exists'

# Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.

    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2)

# get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)

    def get_anagrams(self, word):
        list_of_anagrams = []
        word_upper = word.upper()
        for item in self.text:
            if self.is_anagram(word_upper, item) and word_upper != item:
                list_of_anagrams.append(item)
        return f'Anagrams of your word:{list_of_anagrams}'


user1 = AnagramChecker('text.txt')
# user1.is_valid_word('meat')
# print(user1.get_anagrams('meat'))
