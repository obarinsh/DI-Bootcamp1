from game import Game

game = Game()


def get_user_menu_choice():
    while True:
        menu_choice = input(
            'please select an item item: Play a new game(g), Show score and exit(x): ')
        if menu_choice == 'g':
            return 'Play a new game'
        elif menu_choice == 'x':
            return 'Show scores and Quit'
        else:
            print('Invalid choice, please enter g to play or x to exit')


results = {
    'win': 0,
    'loss': 0,
    'draw': 0
}


def print_results(results):
    print('\nGame Over! Here are your final scores:')
    print(f'Wins: {results['win']}')
    print(f'Losses: {results['loss']}')
    print(f'Draws: {results['draw']}')
    print('\nThank you for playing!')


def main():
    while True:
        menu = get_user_menu_choice()
        while menu == 'Play a new game':
            result = game.play()
            results[result] += 1
            menu = get_user_menu_choice()
        if menu == 'Show scores and Quit':
            print_results(results)
            break


main()
