#Exercise 1 : Hello World
#Instructions
#Print the following output in one line of code:

greeting = "Hello World "
print(greeting *4)

#Exercise 2 : Some Math
#Instructions
#Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

result = (99^3)*8
print(result)

#Exercise 3 : What is the output ?
#Instructions
#Predict the output of the following code snippets:

print(bool(5 < 3))
print(bool(3 == 3))
print(bool(3 == int("3")))
print(bool((int("3") > 3)))
print(bool("Hello" == "hello"))


#🌟 Exercise 4 : Your computer brand
#Instructions
#Create a variable called computer_brand which value is the brand name of your computer.
#Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand="Mac"

print(f'i have a {computer_brand} computer')


#🌟 Exercise 5 : Your information
#Instructions
#Create a variable called name, and set it’s value to your name.
#Create a variable called age, and set it’s value to your age.
#Create a variable called shoe_size, and set it’s value to your shoe size.
#Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
#Have your code print the info message.
#Run your code

name="Olga"
age=32
shoe_size=40
info=(f"hello, my name is {name}, im {age} y.o., i like shoes and my size is {shoe_size}")

print(info)

#🌟 Exercise 6 : A & B
#Instructions
#Create two variables, a and b.
#Each variable value should be a number.
#If a is bigger then b, have your code print Hello World.

a=5
b=6

if a>b: print('Hello world')
else: print ('a<b')


#Exercise 7 : Odd or Even
#Instructions
#rite code that asks the user for a number and determines whether this number is odd or even.

user_num=int(input('please enter your num:'))

if (user_num % 2==0): print('your number is even')
else:print('your number is odd')

###🌟 Exercise 8 : What’s your name ?
#Instructions
#Write code that asks the user for their 
# name and determines whether or not you have the same name, print out a funny message based on the outcome

my_name='olga'
user_name=input('please enter your name:')

if my_name==user_name: print('cool, we have the same name')
else: print('walla, you have a very unusual name')


#🌟 Exercise 9 : Tall enough to ride a roller coaster
#Instructions
#Write code that will ask the user for their height in centimeters.
#If they are over 145cm print a message that states they are tall enough to ride.
#If they are not tall enough print a message that says they need to grow some more to ride.

user_height=int(input('please enter your height:'))
if user_height>145: print ("they are tall enough to ride")
else: print ("you are not tall enough to ride")

