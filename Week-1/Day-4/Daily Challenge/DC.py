# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column,
# selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.


matrix = [
    [7,'i','i'],
    ['T','s','x'],
    ['h','%','?'],
    ['i',' ','#'],
    ['s','M',' '],
    ['$','a',' '],
    ['#','t','%'],
    ['^','r','!']
]

num_columns = len(matrix[0])
secret_message=''

 # 1.	Read each column from top to bottom.

for column in range(num_columns):
    column_values = []
    for row in matrix: 
        column_values.append(row[column])
        if isinstance(row[column], str) and row[column].isalpha():
            secret_message+=(row[column])
        else: 
            row[column]=' '
            print(matrix)
    print(secret_message)
    # print(column_values)

	# 2.	Select only the alpha characters (A-Z or a-z). Ignore any other symbols (like numbers or punctuation marks).
	# 3.	Connect these alpha characters from each column into a sequence.
	# 4.	Replace every group of non-alpha characters (between the alpha characters) with a space.