from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, Project, db, Pledge, Category
from app.forms import ProjectForm, PledgeForm
from flask_login import current_user, login_user, logout_user, login_required

project_routes = Blueprint('project', __name__)


@project_routes.route('/')
def get_projects():
    """
    Get all projects
    """
    projects = Project.query.all()
    return {
        'projects': [project.to_dict() for project in projects]
    }


@project_routes.route('/<int:id>')
def get_specific_project(id):
    """
    Get a specific project based on id.
    """
    projects = Project.query.filter(Project.id == id).first()
    return projects.to_dict()


@project_routes.route('/', methods=['POST'])
@login_required
def new_project():
    """
    Creates a new project if user is logged in
    """
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        project = Project(title=data['title'],
                            description=data['description'],
                            goal=data['goal'],
                            categories_id=data['categories_id'],
                            user_id=current_user.get_id(),
                            current_amount=data['current_amount'],
                            image_url=data['image_url'])
        db.session.add(project)
        db.session.commit()
        return project.to_dict()
    else:
        print('PROJECT FORM FAILED?')
        print(form.data)
        return form.errors


@project_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def update_project(id):
    project = Project.query.filter(Project.id == id).first()
    # if current_user.id == project.user_id:
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    project.title = data['title'],
    project.description = data['description'],
    project.goal = data['goal'],
    project.categories_id = data['categories_id'],
    project.user_id = project.user_id,
    project.current_amount = data['current_amount'],
    project.image_url = data['image_url']
    db.session.commit()
    return project.to_dict()


@project_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_project(id):
    deleted_project = Project.query.filter(Project.id == id).first()
    # if current_user.id == project.user_id:
    #     Project.query.filter(Project.id == id).delete()
    db.session.delete(deleted_project)
    db.session.commit()
    return {
        'deleted_project': deleted_project.to_dict()
    }
    # return project.to_dict()


@project_routes.route('/<int:id>/pledges', methods=["POST"])
@login_required
def new_pledge(id):
    """
    Creates a new pledge if user is logged in
    """
    form = PledgeForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_pledge = Pledge(amount=data["amount"],
                        user_id=current_user.get_id(),
                        project_id=id
        )
    else:
        print('PROJECT FORM FAILED?')
        print(form.data)
        return form.errors
    db.session.add(new_pledge)
    db.session.commit()
    return new_pledge.to_dict()


@project_routes.route('/<int:id>/pledges')
@login_required
def get_project_pledges(id):
    """
    Gets all pledges associated with a specific project if user is logged in.
    """
    pledges = Pledge.query.filter(Pledge.project_id == id).all()
    return {
        'pledges': [pledge.to_dict() for pledge in pledges]
    }


