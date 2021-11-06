from peewee import *
import datetime

from db import DATABASE

from user import User

class Post(Model):
    user = ForeignKeyField(User, backref='posts')
    body = CharField()
    dog_breed = CharField()
    created_at = DateTimeField (default=datetime.datetime.now)

    class Meta:
        database = DATABASE