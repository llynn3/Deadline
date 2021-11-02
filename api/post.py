from peewee import *
import datetime

from db import DATABASE

class Post(Model):
    title = CharField()
    body = CharField()
    dog_breed = CharField()
    created_at = DateTimeField (default=datetime.datetime.now)

    class Meta:
        database = DATABASE