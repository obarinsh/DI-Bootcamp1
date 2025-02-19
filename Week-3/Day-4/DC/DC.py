import requests
import psycopg2
import random


conn = psycopg2.connect(
    dbname="random_countries", user="olga", password="Yehezkel16!", host="localhost"
)
cursor = conn.cursor()

countries_api = requests.get('https://restcountries.com/v3.1/all')
data = countries_api.json()
print(data)


def create_table(Countries: str):
    query = f'''
    CREATE TABLE IF NOT EXISTS {Countries} (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        capital VARCHAR(100),
        flag VARCHAR(100) NOT NULL,
        subregion VARCHAR(100) NOT NULL,
        population INTEGER
    );
    '''
    try:
        conn = psycopg2.connect(
            dbname="random_countries", user="olga", password="Yehezkel16!", host="localhost"
        )
        cursor = conn.cursor()
        cursor.execute(query)
        conn.commit()

        print(f"Table '{Countries}' created")

    except psycopg2.Error as e:
        print(f"Database error: {e}")

    finally:
        cursor.close()
        conn.close()


# create_table("Countries")

def add_rand_countries(data):
    random_countries = random.sample(data, 10)
    conn = psycopg2.connect(
        dbname="random_countries", user="olga", password="Yehezkel16!", host="localhost"
    )
    cursor = conn.cursor()
    query = """
    INSERT INTO Countries (name, capital, flag, subregion, population)
    VALUES (%s, %s, %s, %s, %s);
    """
    for country in random_countries:
        name = country.get('name', {}).get('common', 'Unknown')
        capital = country.get('capital', ['Unknown'])[
            0]  # Some may not have a capital
        flag = country.get('flag', '🏳️')
        subregion = country.get('subregion', 'Unknown')
        population = country.get('population', 0)
        cursor.execute(query, (name, capital, flag, subregion, population))
    conn.commit()
    print('10 random countries were added')

    cursor.close()
    conn.close()


add_rand_countries(data)
