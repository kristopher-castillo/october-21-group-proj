from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db, Project, Pledge




user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def update_user_amount(id):
    users = User.query.get(id)
    users.money = request.json['money']
    db.session.commit()
    return users.to_dict()


@user_routes.route('/<int:id>/projects')
def get_user_projects(id):
    projects = Project.query.filter(Project.user_id == id).all()
    return {'projects': [project.to_dict() for project in projects]}

@user_routes.route('/<int:id>/backed')
def get_user_backed(id):
    #returns a list of pledge objects with the user id
    pledges = Pledge.query.filter(Pledge.user_id == id).all()

    project_ids = []
    projects = []

    for pledge in pledges:
        #Gets the project id of each pledge object
        project_ids.append(pledge.project_id)

    for id in project_ids:
        projects.append(Project.query.filter(Project.id == id).one())

    return {'projects': [project.to_dict() for project in projects]}
