import psycopg2
import requests
import json
import random
connection = psycopg2.connect(database='countries',
                              user='olga',
                              password='Yehezkel16!',
                              host='localhost',
                              port='5432')
cursor = connection.cursor()
cursor .execute('DROP TABLE IF EXISTS random_countries')
cursor.execute('''CREATE TABLE random_countries
               (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL,
               capital VARCHAR(100),
               flag_code VARCHAR(100) NOT NULL,
               region VARCHAR(100) NOT NULL,
               population INTEGER)''')
connection.commit()

countries_api = requests.get('https://restcountries.com/v3.1/all')
data = countries_api.json()

# print(data[1])
for i in range(10):
    index = random.randint(1, 100)
    name = data[index]['name']['official']
    capital = data[index]['capital'][0]
    flag_code = data[index]['flag']
    region = data[index]['region']
    population = data[index]['population']
    cursor.execute('''Insert INTO random_countries(name,capital,flag_code,region,population)
                   VALUES ('{name}','{capital}','{flag_code}','{region}','{population}')''')

connection.commit()

# print(name, capital, flag_code, region, population)
# print('table was created')
