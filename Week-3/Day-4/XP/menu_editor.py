# Create a file called menu_editor.py , which will have the following functions:
# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.
from menu_item import MenuManager
from menu_item import MenuItem


def show_restaurant_menu():
    full_menu = MenuManager.all_items()
    for item in full_menu:
        item_id, name, price = item
        print(f"{name}: ${price}")


def show_user_menu():
    while True:
        menu = ['View an Item', 'Add an Item',
                'Delete an Item', 'Update an Item', 'Show the Menu']
        print(menu)
        request = input(
            'Please choose: view_item(V),add_item(A),delete_item(D),update_item(U),show_menu(S), quit(Q)')
        if request == 'V':
            item_name = input('Please enter item name:')
            item = MenuManager.get_by_name(item_name)
            print(item if item else "Item doesnt exist")
        elif request == 'A':
            item_name = input('Please enter item name to add:')
            item_price = int(input('Please enter item price:'))
            new_item = MenuItem(item_name, item_price)
            print(new_item.save())
        elif request == 'D':
            item_name = input('Please enter item name to delete:')
            item = MenuItem(item_name, 0)
            print(item.delete())

        elif request == 'U':
            item_to_update = input('Please enter item to update:')
            new_item_name = input('Please enter new item name:')
            new_item_price = int(input('Please enter new item price:'))
            item = MenuItem(item_to_update, 0)
            print(item.update(new_item_name, new_item_price))
        elif request == 'S':
            print(menu)
        elif request == "Q":
            show_restaurant_menu()
            print("Exiting...")
            break
        else:
            print('Invalid choice! Please try again')


show_user_menu()


# add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.

def add_item_to_menu():
    item_name = input('Please enter new item name:')
    item_price = input('Please enter item price:')
    if not item_price.isdigit():
        print('Only numbers are acceptable!')
        return
    item_price = int(item_price)
    new_item = MenuItem(item_name, item_price)
    added_item = new_item.save()
    if 'Added item:' in added_item:
        print('Item was added successfully')
    else:
        print('Error')

# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu.
# This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.


def remove_item_from_menu():
    item_name = input('Please enter item name you want to delete:')
    item_to_delete = MenuItem(item_name, 0)
    item_delete = item_to_delete.delete()
    if 'Deleted item:' in item_delete:
        print('Item was deleted successfully')
    else:
        print('Error')


# remove_item_from_menu()

# update_item_from_menu()- this function should ask the user to input the name and
# price of the item they want to update from the restaurant’s menu, as well
# as to input the name and price they want to change them with.
# This function will not interact with the menu itself, but simply create a
# MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know
# this was completed.
# If not – print a message which states that there was an error.

def update_item_from_menu():
    current_item_name = input('Please enter item name you want to update:')

    updated_item_name = input('Please enter new name you want to update:')
    updated_item_price = input('Please enter item price you want to update:')
    if not updated_item_price.isdigit():
        print('Only numbers are acceptable!')
        return
    updated_item_price = int(updated_item_price)
    item_to_update = MenuItem(current_item_name, 0)
    result = item_to_update.update(updated_item_name, updated_item_price)
    if 'Updated to:' in result:
        print('Item was updated successfully')
    else:
        print('Error')


# update_item_from_menu()

# show_restaurant_menu() - print the restaurant’s menu.


# show_restaurant_menu()
