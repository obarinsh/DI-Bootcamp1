

# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.




string = input('please add string of 10 characters long: ')
string_len=len(string)

if string_len<10 : print('string is not long enough')
elif string_len==10:  print('perfect string')
else: print('string too long')

# Then, print the first and last characters of the given text.
# The user enters "HelloWorld"
# Then you have to print 
# H
# d
# print(string[0])
# print(string[len(string)-1])

# 3. Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld
full_sentence=""
for letter in string: 
    full_sentence+= letter
    print(full_sentence)


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod

import random
letters_in_string=list(string)
# print(converted_string)
random.shuffle(letters_in_string)
new_word = "".join(letters_in_string)
print(new_word)
