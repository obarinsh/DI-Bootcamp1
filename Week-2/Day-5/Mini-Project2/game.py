import random


class Game:
    def __init__(self):
        pass

# get_user_item(self) – Ask the user to select an item (rock/paper/scissors). Keep asking until the user has selected one of the items – use data validation and looping. Return the item at the end of the function.

    def get_user_item(self):
        while True:
            user_item = input(
                'please select an item item: rock/paper/scissors: ')
            if user_item == "rock" or user_item == "paper" or user_item == "scissors":
                return user_item
            else:
                continue

        # get_computer_item(self) – Select rock/paper/scissors at random for the computer. Return the item at the end of the function. Use python’s random.choice() function(read about it online).

    def get_computer_item(self):
        choice = ['rock', 'paper', 'scissors']
        computer_item = random.choice(choice)
        return computer_item

    def get_game_result(self, user_item, computer_item):
        if (user_item == 'rock' and computer_item == 'scissors') or (user_item == 'scissors' and computer_item == 'paper') or (user_item == 'paper' and computer_item == 'rock'):
            return 'User won'
        elif (computer_item == 'rock' and user_item == 'scissors') or (computer_item == 'scissors' and user_item == 'paper') or (computer_item == 'paper' and user_item == 'rock'):
            return 'User has lost'
        else:
            return 'Its a draw'

    def play(self):
        user_answer = self.get_user_item()
        computer_answer = self.get_computer_item()
        decision = self.get_game_result(user_answer, computer_answer)
        print(
            f'You selected: {user_answer}. The computer selected: {computer_answer}. Result:{decision}')

        if decision == 'User won':
            return 'win'
        elif decision == 'User has lost':
            return 'loss'
        else:
            return 'draw'


user = Game()
