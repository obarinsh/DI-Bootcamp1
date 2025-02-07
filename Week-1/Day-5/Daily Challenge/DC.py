# Challenge 1 : Sorting


# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

# list=['without','hello','bag','world', 'apple','mama']
# new_list = [sorted(list)]
# print(new_list)

# Challenge 2 : Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"


def longest_word(sentence):
    longest_word=''
    word_list = sentence.split()
    for word in word_list:
        word_length=len(word)
        if word_length > len(longest_word):
            longest_word=word
    return longest_word

print(longest_word('Haliluya i f.inished all these homeworkkkkk'))
print(longest_word('all of this words will be short'))
print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))

