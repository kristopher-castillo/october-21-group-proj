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
# /api/categories/:id
@category_routes.route('/<int:id>')
def get_specific_category(id):
    '''
    For getting all projects of a specific category
    '''
    projects = Project.query.filter(Project.categories_id == id).all()
    print('This is my projects from api', projects)
    return {
        'projects': [project.to_dict() for project in projects]
    }
