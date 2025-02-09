# # # 🌟 Exercise 1: Cats
# # # Instructions
# # # Using this class

# # class Cat:
# #     def __init__(self, cat_name, cat_age):
# #         self.name = cat_name
# #         self.age = cat_age


# # def find_oldest_cat(self):
# #     oldest_cat = ''
# #     if cat_1.age > cat_2.age and cat_1.age > cat_3.age:
# #         oldest_cat = cat_1
# #     elif cat_2.age > cat_1.age and cat_2.age > cat_3.age:
# #         oldest_cat = cat_2
# #     else:
# #         oldest_cat = cat_3
# #     return oldest_cat


# # # Instantiate three Cat objects using the code provided above.
# # # Outside of the class, create a function that finds the oldest cat and returns the cat.
# # # Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.


# # cat_1 = Cat('Emily', 9)
# # cat_2 = Cat('Lola', 12)
# # cat_3 = Cat('Murfis', 7)

# # oldest_cat = find_oldest_cat([cat_1, cat_2, cat_3])
# # print(f"The oldest cat is {oldest_cat.name}, aged {oldest_cat.age}.")


# # 🌟 Exercise 2 : Dogs
# # Instructions
# # Create a class called Dog.
# # In this class, create an __init__ method that takes
# # two parameters : name and height. This function instantiates \
# # two attributes, which values are the parameters.
# # Create a method called bark that prints the following
# # string “<dog_name> goes woof!”.
# # Create a method called jump that prints the following
# # string “<dog_name> jumps <x> cm high!”. x is the height*2.
# # Outside of the class, create an object called davids_dog.
# # His dog’s name is “Rex” and his height is 50cm.

# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def jump(self):
#         x = self.height*2
#         print(f'{self.name} jumps {x} cm high!')

#     def bark(self):
#         print(f'{self.name} goes woof!')


# davids_dog = Dog('Rex', 50)

# # Print the details of his dog (ie. name and height) and
# # call the methods bark and jump.

# print(
#     f'David has a dog, his name is {davids_dog.name} and his height is {davids_dog.height} cm.')

# davids_dog.bark()
# davids_dog.jump()

# # Create an object called sarahs_dog. Her dog’s name is
# # “Teacup” and his height is 20cm.

# sarahs_dog = Dog('Teacup', 20)

# # Print the details of her dog (ie. name and height) and call
# # the methods bark and jump.
# print(
#     f'Sara has a dog, his name is {sarahs_dog.name} and his height is {sarahs_dog.height} cm.')

# sarahs_dog.bark()
# sarahs_dog.jump()

# # Create an if statement outside of the class to check which dog
# # is bigger. Print the name of the bigger dog.


# def find_biggest_dog(self):
#     biggest_dog = ''
#     if sarahs_dog.height > davids_dog.height:
#         biggest_dog = sarahs_dog
#     else:
#         biggest_dog = davids_dog
#     return biggest_dog


# biggest_dog = find_biggest_dog([sarahs_dog, davids_dog])
# print(
#     f"The biggest dog is {biggest_dog.name}, his height is {biggest_dog.height} cm.")


# 🌟 Exercise 3 : Who’s the song producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments:
#     self and lyrics (a list).
# Inside your class create a method called sing_me_a_song
# that prints each element of lyrics on its own line.
# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that
#                 glitters is gold", "and she’s buying a stairway
#                 to heaven"])


# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         print("\n".join(self.lyrics))


# stairway = Song(["There’s a lady who's sure", "all that glitters is gold",
#                 "and she’s buying a stairway to heaven"])

# stairway.sing_me_a_song()

# Exercise 4 : Afternoon at the Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.grouped_animals = {}
#
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f'{self.animals}')

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def get_animals(self):
        print(self.animals)

    def sort_animals(self):
        self.animals.sort()
        for animal in self.animals:
            first_letter = animal[0]
            if first_letter in self.grouped_animals:
                self.grouped_animals[first_letter].append(animal)
            else:
                self.grouped_animals[first_letter] = [animal]

    def get_groups(self):
        print(self.grouped_animals)

# Create a method called get_animals that prints all the animals of the zoo.


ramat_gan_safari = Zoo('Ramat Gan Safari')
ramat_gan_safari.add_animal('Giraffe')
ramat_gan_safari.add_animal('Cat')
ramat_gan_safari.add_animal('Lion')
ramat_gan_safari.add_animal('Monkey')
ramat_gan_safari.add_animal('Mice')
ramat_gan_safari.add_animal('Spider')
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal('Lion')
ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()

# Create a method called sell_animal that
# takes one parameter animal_sold.
# This method removes the animal from the
# list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the
# animals alphabetically and groups them together
# based on their first letter.
# Example

# {
#     A: "Ape",
#     B: ["Baboon", "Bear"],
#     C: ['Cat', 'Cougar'],
#     E: ['Eel', 'Emu']
# }

# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)
