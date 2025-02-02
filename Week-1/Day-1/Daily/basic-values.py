#comment: Basic value types

print ('hello')

print (5)
print (2.54)
print ("good morning")


print(type(False))
print(4<6)

#values: integers, floats, string and booleans 

# string functions : methods 

my_name="Olga"

print(my_name[2:len(my_name)-1])
print(my_name[1:2])
print(my_name[1:len(my_name)])


first_name="Olga"
last_name="Barinshteyn"
full_name=first_name +" "+last_name

#print(full_name)

my_name="olga"
user_name=input("whats your name?")

#if my_name==user_name: print("we have the same name")

#else: print('we have different names')

#Ask the user for a number between 1 and 100

#If the number is a multiple of three, print Fizz

#If the number is a multiple of five, print Buzz.

#If the number is a multiple is a multiples of both three and five, print FizzBuzz instead.

user_num=input("please put num between 1 to 100: ")
user_num_new=int(user_num)

if user_num_new % 3==0: print("Fizz")

elif user_num_new % 5==0: print("Buzz")

elif  user_num_new  % 5==0 and  user_num_new % 3==0: print("FizzBuzz")

else : print('nothing')
