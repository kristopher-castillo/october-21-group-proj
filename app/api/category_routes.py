from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, Project, db, Category

category_routes = Blueprint('category', __name__)


@category_routes.route('/')
def get_all_categories():
    '''
    Gets all categories
    '''
    category = Category.query.all()
    return category.to_dict()

# @category_routes.route('/', methods=['POST'])
# def create_categories():
#     '''
#     Create categories
#     '''
#     category = Category()
