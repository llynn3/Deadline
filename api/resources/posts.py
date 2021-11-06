from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from post import Post
from user import User

post = Blueprint('posts', __name__, url_prefix='/posts')

@post.route('/')
@login_required
def get_all_posts():
    try:
        posts = [model_to_dict(post, exclude=[User.password]) for post in Post.select()]
        return jsonify(posts), 200
    except DoesNotExist:
        return jsonify(message="error getting posts."), 500

@post.route('/<int:id>', methods=['GET'])
@login_required
def get_one_post(id):
    try:
        post = Post.get_by_id(id)
        return jsonify(model_to_dict(post, backrefs=True)), 200
    except DoesNotExist:
        return jsonify(error="error getting the post."), 500

@post.route('/', methods=['POST'])
@login_required
def add_post():
    body = request.get_json()
    post = Post.create(**body, user_id = current_user.id)
    return jsonify(model_to_dict(post, exclude=[User.password])), 201

@post.route('/<int:id>', methods=['PUT'])
@login_required
def update_post(id):
    try:
        body = request.get_json()
        (Post
            .update(**body)
            .where(Post.id == id)
            .execute())
        post = Post.get_by_id(id)
        return jsonify(model_to_dict(post, exclude=[User.password]))
    except DoesNotExist:
        return jsonify(message="error getting post."), 500


@post.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    try:
        (Post
            .delete()
            .where(Post.id == id)
            .execute())
        return jsonify(message="post successfully deleted."), 204
    except DoesNotExist:
        return jsonify(message="error getting post."), 500