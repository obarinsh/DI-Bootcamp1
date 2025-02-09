class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = []
        self.animal_counts = {}

    def add_animal(self, animal, amount=1):
        if animal not in self.animals:
            self.animals.append(animal)
        if animal in self.animal_counts:
            self.animal_counts[animal] += amount
        else:
            self.animal_counts[animal] = amount
        # print(f'{self.animals}: {amount}')

    def get_info(self):
        return self.animal_counts

    def get_animal_types(self):
        self.animals.sort()
        return self.animals

    def get_short_info(self):
        list_of_animals = self.get_animal_types()
        plural_animals = []
        for animal in list_of_animals:
            count = self.animal_counts.get(animal)

            if count > 1:
                plural_animals.append(f"{animal}s")
            else:
                plural_animals.append(animal)
        print(f"McDonald's farm has {', '.join(plural_animals)}.")


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('cow', 5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
macdonald.get_animal_types()
macdonald.get_short_info()

# Expand The Farm
# Add a method called get_animal_types to the Farm class.
# This method should return a sorted list of all the animal types
# (names) in the farm. With the example above, the list should be: ['cow', 'goat', 'sheep'].

# Add another method to the Farm class called get_short_info.
# This method should return the following string: “McDonald’s
# farm has cows, goats and sheeps.”.
# The method should call the get_animal_types function to get a list of the animals.
# Note : In English the plural form of the word “sheep”
# is sheep. But for the purpose of the exercise, let’s say that if there is more than 1 animal, an “s” should be added at the end of the word.
