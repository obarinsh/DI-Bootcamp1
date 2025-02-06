
board = [
    ['_','_','_'],
    ['_','_','_'],
    ['_','_','_'],
]

num_columns = len(board[0])
player1='X'
player2='O'
current_player=player1
winner=False
board_is_full=False
    

def display_board():
    global board
    print('**********')
    for row in board: 
        print (' | '.join(row))
        print ('.'*10)
    print('**********')
    
def game():
    global current_player
    global winner
    print(f'Current players is : {current_player}')
    while not winner and not is_board_full():
        display_board()
        user_coordinates=ask_user_coordinates()
        check_user_coordinates(user_coordinates)
        update_user_move(user_coordinates)
        change_player()
        check_win()
    display_board()
    if winner:
        print(f"Player {winner} wins!")
    else: print('Its a tie')
    print('Game finished')
    
def change_player():
    global current_player
    if current_player==player1: current_player=player2
    else: current_player=player1
    print(f'Current players is : {current_player}')
    
def ask_user_coordinates():
    row=int(input('please enter the row number:'))
    column=int(input('please enter the column number:'))
    user_coordinates=[row,column]
    return user_coordinates
   
def check_user_coordinates(user_coordinates):
    row, column = user_coordinates
    if board[row][column]=='_': 
       board[row][column]=current_player
       update_user_move(user_coordinates)
    #    print(f"Place of user {user_coordinates}")
    else: 
        print(f'{row}, {column} is already occupied, please try again')
        user_coordinates = ask_user_coordinates()
        check_user_coordinates(user_coordinates) 

def update_user_move(user_coordinates):
    row, column = user_coordinates
    board[row][column] = current_player

def find_sequence(sequence):
    global winner
    if sequence == 'XXX':
        winner="1"
    elif sequence  == 'OOO':
        winner="2"
        
def check_win():
    for row in board:
        row_sequnce=''.join(row) 
        find_sequence(row_sequnce)
          
    for col in range(3):
        col_sequence=board[0][col]+board[1][col]+board[2][col]
        find_sequence(col_sequence)


    diagonal_sequence=board[0][0]+board[1][1]+board[2][2] 
    find_sequence(diagonal_sequence)
    
    rev_diagonal_sequence=board[0][2]+board[1][1]+board[2][0] 
    find_sequence(rev_diagonal_sequence)

                
def is_board_full():
    for row in board:
        for item in row:
            if '_' in item:
                return False
    return True
    
game()
    

    