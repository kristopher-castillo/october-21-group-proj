from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, Project, db, Category

category_routes = Blueprint('category', __name__)


@category_routes.route('/')
def get_all_categories():
    '''
    Gets all categories
    '''
    categories = Category.query.all()
    return {
        'categories': [category.to_dict() for category in categories]
    }

# @category_routes.route('/', methods=['POST'])
# def create_categories():
#     '''
#     Create categories
#     '''
#     category = Category()
