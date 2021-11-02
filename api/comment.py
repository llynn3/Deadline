from peewee import *
import datetime

from db import DATABASE 

from post import Post 

class Comment(Model):
    content = CharField()
    post_id = ForeignKeyField(Post, backref='comments')
    created_at = DateTimeField (default=datetime.datetime.now)

    class Meta:
        database = DATABASE 