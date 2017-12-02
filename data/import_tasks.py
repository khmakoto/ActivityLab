from pymongo import MongoClient
client = MongoClient()
client = MongoClient('localhost', 27017)
db = client.activityLab
tasks = db.tasks

import json
with open('tasks.json') as data_file:
    data = json.load(data_file)


for index, item in enumerate(data):
	post_id = tasks.insert_one(data[item]).inserted_id;
