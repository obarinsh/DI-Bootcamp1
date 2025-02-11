from faker import Faker
from datetime import datetime
import string
import random
from func import sum

# # 🌟 Exercise 1: Currencies
# # Instructions
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         return f'{self.amount} {self.currency}'

#     def __int__(self):
#         return self.amount

#     def __repr__(self):
#         return f'{self.amount} {self.currency}'

#     def __add__(self, other):
#         if isinstance(other, (int, float)):
#             return self.amount + other

#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 return self.amount + other.amount
#             raise TypeError(
#                 f'Cannot add different currencies Cannot add between Currency type {self.currency} and {other.currency}')

#         raise TypeError("Can only add numbers or another Currency object")

#     def __iadd__(self, other):
#         if isinstance(other, (int, float)):
#             self.amount += other
#             return self

#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 self.amount += other.amount
#                 return self
#             raise TypeError("Cannot add different currencies")
#         raise TypeError("Can only add numbers")


# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# # print(str(c1))

# # print(int(c1))

# # print(repr(c1))

# # total = c1+5
# # print(total)

# # new_total = c1+c2
# # print(new_total)

# # print(c1)
# print(c1.amount)

# print(c1)

# c1 += 5
# print(c1.amount)

# c1 += c2
# print(c1.amount)

# # sum = c1+c3
# # print(sum)

# 🌟 Exercise 2: Import
# Instructions
# In a file named func.py create a function that sum 2 numbers, and prints the result
# In a file named exercise_one.py import the function and call it to print the result
sum(2, 3)
# Hint: You can use the the following syntaxes:

# import module_name

# OR

# from module_name import function_name

# OR

# from module_name import function_name as fn

# OR

# import module_name as mn


# 🌟 Exercise 3: String module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

# random_string = ''.join(random.choices(
#     string.ascii_letters, k=5))
# print(random_string)


# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.


# def current_date():
#     today = datetime.date.today()
#     print(today)

# current_date()


# Exercise 5 : Amount of time left until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).


# def time_left(year, month, day, hour, minute):
#     now_time = datetime.now()
#     end_time = datetime(year, month, day, hour, minute)
#     difference = end_time-now_time

#     total_seconds = difference.total_seconds()
#     days, remainder = divmod(total_seconds, 86400)  # 1 day = 86400 seconds
#     hours, remainder = divmod(remainder, 3600)  # 1 hour = 3600 seconds
#     minutes, _ = divmod(remainder, 60)
#     print(f'{end_time} is in {days} days, {hours} hours, {minutes} minutes')


# time_left(2026, 1, 1, 12, 0)


# Exercise 6 : Birthday and minutes
# Instructions
# Create a function that accepts a birthdate as
# an argument (in the format of your choice),
# then displays a message stating how many minutes the user lived in his life.

def birth_day(year, month, day):
    today = datetime.now()
    birth_date = datetime(year, month, day)
    days_of_life = today - birth_date
    total_days = days_of_life.days
    minutes_of_life = total_days*1440
    print(f'You lived {minutes_of_life} minutes.')


birth_day(1992, 12, 30)

# now_year = today.year
# now_month = today.month
# now_day = today.day
# lived_years=(today.year-year)
# hour = today.hour
# minute = today.minute
# second = today.second
# minutes_of_life=


# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation
# and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list.
# Each user has the following keys: name, adress, langage_code.
# Use faker to populate them with fake data.

fake = Faker()


def fake_users_list(count):
    users = []
    for user in range(count):
        user = {
            'name': fake.name(),
            'address': fake.address(),
            'language_code': fake.language_code()
        }
        users.append(user)
    return users


print(fake_users_list(2))
