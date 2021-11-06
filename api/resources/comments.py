from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from post import Post
from comment import Comment
from user import User

comment = Blueprint('comments', __name__, url_prefix='/comments')

@comment.route('/', methods=['GET'])
@login_required
def get_all_comments():
    try:
        comments = [model_to_dict(comment, exclude=[User.password]) for comment in Comment.select()]
        return jsonify(comments), 200
    except DoesNotExist:
        return jsonify(error="error getting the comments."), 500

@comment.route('/<int:post_id>', methods=['POST'])
@login_required
def create_comment(post_id):
    body = request.get_json()
    comment = Comment.create(**body, post_id = post_id, user_id = current_user.id)
    return jsonify(model_to_dict(comment, exclude=[User.password])), 201

@comment.route('/<id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    try:
        (Comment
            .delete()
            .where(Comment.id == id)
            .execute())
        return jsonify(message="comment succesffuly deleted."), 204
    except DoesNotExist:
        return jsonify(message="error getting comment."), 500
