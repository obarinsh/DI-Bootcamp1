import psycopg2
import psycopg2.extras

HOSTNAME = 'localhost'
USERNAME = 'olga'
PASSWORD = 'Yehezkel16!'
DATABASE = 'menu'

connection = psycopg2.connect(
    host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
query = "SELECT * FROM Menu_Items"
cursor.execute(query)
results = cursor.fetchall()
if results:
    for row in results:
        print(row)


class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price

    def save(self):
        try:
            connection = psycopg2.connect(
                dbname="menu", user="olga", password="Yehezkel16!", host="localhost"
            )
            cursor = connection.cursor()
            query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
            cursor.execute(query, (self.item_name, self.item_price))
            connection.commit()
            cursor.close()
            connection.close()
            return f'Added item: {self.item_name} - ${self.item_price}'
        except psycopg2.Error as error:
            return f'Database error: {error}'

    def update(self, new_name, new_price):
        connection = psycopg2.connect(
            dbname="menu", user="olga", password="Yehezkel16!", host="localhost"
        )
        cursor = connection.cursor()
        query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
        cursor.execute(query, (new_name, new_price, self.item_name))
        connection.commit()
        cursor.close()
        connection.close()
        self.item_name = new_name
        self.item_price = new_price
        return f"Updated to: {self.item_name}, {self.item_price}"

    def delete(self):
        connection = psycopg2.connect(
            dbname="menu", user="olga", password="Yehezkel16!", host="localhost"
        )
        cursor = connection.cursor()

        query = "DELETE FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (self.item_name,))

        connection.commit()
        cursor.close()
        connection.close()
        return f'Deleted item:: {self.item_name}'

# In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.

# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.


class MenuManager:
    @classmethod
    def get_by_name(cls, item_name):
        connection = psycopg2.connect(
            dbname="menu", user="olga", password="Yehezkel16!", host="localhost"
        )
        cursor = connection.cursor()
        query = "SELECT * FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (item_name,))
        item = cursor.fetchone()
        cursor.close()
        connection.close()
        return item if item else None

    @classmethod
    def all_items(cls):
        connection = psycopg2.connect(
            dbname="menu", user="olga", password="Yehezkel16!", host="localhost"
        )
        cursor = connection.cursor()
        query = "SELECT * FROM Menu_Items"
        cursor.execute(query)
        items = cursor.fetchall()
        cursor.close()
        connection.close()
        return items


connection = psycopg2.connect(
    dbname="menu", user="olga", password="Yehezkel16!", host="localhost"
)
# item = MenuItem('Burgul', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all_items()
