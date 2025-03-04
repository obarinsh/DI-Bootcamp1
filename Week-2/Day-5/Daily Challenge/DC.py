# Instructions
# Part 1 : Quizz :
# Answer the following questions

# What is a class?
# A class is a way to create an object with different methonds in it.
# This way we can 'classify' object that use same attributed and methods under the same class .

# What is an instance?
# An instance is an object created from a class . Has the same structure as a class it belongs to
# person1 = Humans('Homo Sapiens')

# What is encapsulation?
# Encapsulation restricts access to a class’s data to its methods and keeps the class’s variables private.

# What is abstraction?
# Method which is used to hide irrelevant details from the user and show the details that are relevant to the users.

# What is inheritance?
# Inheritance allows a class to derive properties and methods from another class. It promotes code reuse.

# What is multiple inheritance?
# Multiple Inheritance allows a class to inherit from more than one parent class.

# What is polymorphism?
# Polymorphism allows different classes to define methods with the same name, but with different implementations.

# What is method resolution order or MRO?
# MRO determines the order in which methods are searched in a class hierarchy when multiple classes are inherited.

# Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.
import random


class Card:

    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def get_value(self):
        return self.value, self.suit

    def __str__(self):
        return f'{self.value} of {self.suit}'


class Deck:
    def __init__(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
        self.cards = []
        for suit in suits:
            for value in values:
                new_card = Card(suit, value)
                self.cards.append(new_card)

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        return self.cards.pop() if self.cards else None

    def __str__(self):
        return f'Deck has {len(self.cards)} cards left'


deck = Deck()
print(deck)
deck.shuffle()
card = deck.deal()
print(f'Dealt card: {card}')
print(deck)
