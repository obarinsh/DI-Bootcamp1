# # sample_dict = { 
# #    "class":{ 
# #       "student":{ 
# #          "name":"Mike",
# #          "marks":{ 
# #             "physics":70,
# #             "history":80
# # }
# #       }
# #    }
# # }

# # print(sample_dict['class']['student']['marks']['history'])

# student_info = {
#     'name': 'John',
#     'age': 25,
#     'hobbies': ['reading', 'gaming', 'cycling'],
#     'city': 'New York'
# }

# # Tasks:
# # 1 - Change the value of 'age' from 25 to 30.

# student_info['age']=30
# print(student_info)

# # 2 - Add a new entry with the key 'occupation' and the value 'Engineer'.
# student_info['occupation']='Engineer'
# print(student_info)
# # 3 - Remove the entry with the key 'city'.

# del student_info['city']
# print(student_info)
# # 4 - check if the key 'email' is on the dictionary, if not, add it with value 'name@gmail.com'

# if 'email' in student_info: print ('email is already exist')
# else: student_info['email']='name@gmail.com'
# print(student_info)
# # 5 -Loop through the values in the 'hobbies' list and print each hobby on a new line.

# for i in student_info['hobbies']: print(i)

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
# keys_to_remove = ["name", "salary"]

for key in sample_dict.keys():
    if key=='name': del sample_dict['name']
    elif key=='salary': del sample_dict['salary']
    print (sample_dict)