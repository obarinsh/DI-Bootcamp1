#(Exercise 1 : Hello World-I love Python
#Instructions
#Print the following output in one line of code:
#Hello world
#Hello world
#Hello world
#Hello world
#I love python
#I love python
#I love python
#I love python

print ("Hello world "*4 + "I love python "*4)

#Exercise 2 : What is the Season ?
#Instructions
#Ask the user to input a month (1 to 12).
#Display the season of the month received :
#Spring runs from March (3) to May (5)
#Summer runs from June (6) to August (8)
#Autumn runs from September (9) to November (11)
#Winter runs from December (12) to February (2)

month=int(input('please enter month(1 to 12): '))

if month <= 5 and month >=3 : print("its Spring")
elif month <= 8 and month >=6 : print("its Summer")
elif month <= 11 and month >=9 : print("its Autumn")
else: print("its Winter")