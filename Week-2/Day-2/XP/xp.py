# 🌟 Exercise 1 : Pets
# Instructions
# Using this code:

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())


# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'


# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'


# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'


# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'


# cat1 = Bengal('lola', 4)
# cat2 = Chartreux('mishell', 12)
# cat3 = Siamese('leticia', 3)

# all_cats = [cat1, cat2, cat3]
# sara_pets = Pets(all_cats)

# sara_pets.walk()

# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.


# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight.
# The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.

# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         print(f'{self.name} is barking')

#     def run_speed(self):
#         return self.weight/self.age*10

#     def fight(self, other_dog):
#         if (self.run_speed()*self.weight) > (other_dog.run_speed()*other_dog.weight):
#             print(f'{self.name} won the fight')
#         elif (self.run_speed()*self.weight) == (other_dog.run_speed()*other_dog.weight):
#             print(f'Its a tie')
#         else:
#             print(f'{other_dog.name} won the fight')


# dog1 = Dog('Chuch', 12, 10)
# dog2 = Dog('Rony', 2, 8)
# dog3 = Dog('Soll', 6, 17)

# dog1.bark()
# dog1.fight(dog2)
# dog2.fight(dog1)

# dog2.fight(dog3)
# dog3.fight(dog2)

# dog1.fight(dog3)
# dog3.fight(dog1)


# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.
# import random


# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight
#         self.trained = False

#     def bark(self):
#         print(f'{self.name} is barking')

#     def run_speed(self):
#         return self.weight/self.age*10

#     def fight(self, other_dog):
#         if (self.run_speed()*self.weight) > (other_dog.run_speed()*other_dog.weight):
#             print(f'{self.name} won the fight')
#         elif (self.run_speed()*self.weight) == (other_dog.run_speed()*other_dog.weight):
#             print(f'Its a tie')
#         else:
#             print(f'{other_dog.name} won the fight')

#     def train(self):
#         self.bark()
#         self.trained = True

#     def play(self, *args):
#         dog_names = ', '.join([dog.name for dog in args])
#         print(f'{dog_names} all play together')

#     def do_a_trick(self):
#         sentences = [
#             '{} does a barrel roll',
#             '{} stands on his back legs',
#             '{} shakes your hand',
#             '{} plays dead'
#         ]
#         if self.trained == True:
#             random_sentence = random.choice(sentences)
#             print(random_sentence.format(self.name))


# class PetDog(Dog):
#     def __init__(self, name, age, weight):
#         super().__init__(name, age, weight)


# dog1 = Dog('Chuch', 12, 10)
# dog2 = Dog('Rony', 2, 8)
# dog3 = Dog('Soll', 6, 17)
# dog4 = PetDog('Soll', 6, 17)

# # dog4.play(dog1, dog2)
# # dog1.bark()
# # dog1.fight(dog2)

# print(dog1.trained)
# dog1.train()
# print(dog1.trained)
# dog1.do_a_trick()

# print(dog2.trained)
# dog2.train()
# print(dog2.trained)
# dog2.do_a_trick()


# Exercise 4 : Family
# Instructions
# Create a class called Family and implement the following attributes:

class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

# Implement the following methods:
# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
    def born(self, new_baby):
        baby_name = new_baby["name"]
        self.members.append(new_baby)
        print(f'Congratulations on your new baby {baby_name}')

# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                if member["age"] <= 18:
                    return False
                else:
                    return True
# family_presentation: a method that prints the family’s last name and all the members’ details.

    def family_presentation(self):
        print(f'{self.last_name}')
        for member in self.members:
            print(f'Name: {member['name']}, Age: {member['age']}')

    # Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.
members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}]

family_1 = Family(members, 'Arlozorov')


family_1.born({'name': 'Muffin', "age": 0,
              'gender': 'Female', 'is_child': True})

print(family_1.is_18('Sarah'))
family_1.family_presentation()


# Exercise 5 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)

class TheIncredibles(Family):
    def __init__(self, incredible_members, last_name):
        super().__init__(incredible_members, last_name)

# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.

    def use_power(self, name):
        print("Current family members:", self.members)
        for member in self.members:
            print(f"Checking member: {member['name']}")
            if member['name'] == name:
                if member['age'] > 18:
                    print(
                        f"The power of {member['name']} is {member['power']}")
                else:
                    raise Exception(
                        f"{name} is not 18 years old and cannot use their power.")
                return
        raise KeyError(f"No family member found with the name {name}.")


# Add a method called incredible_presentation which :

    def incredible_presentation(self):
        print("Here is our powerful family **")
        super().family_presentation()

        # Print a sentence like “*Here is our powerful family **”
        # Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)

        # Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

        # Call the incredible_presentation method.

        # Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.

        # Call the incredible_presentation method again.


incredible_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
        'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 22, 'gender': 'Female', 'is_child': False,
     'power': 'read minds', 'incredible_name': 'SuperWoman'}
]
incredible_family = TheIncredibles(incredible_members, "Dayan")
incredible_family.use_power('Sarah')
incredible_family.incredible_presentation()
incredible_family.born({'name': 'Jack', 'age': 0, 'gender': 'Male',
                       'is_child': True, 'power': 'Unknown Power', 'incredible_name': 'BabyJack'})
incredible_family.incredible_presentation()
