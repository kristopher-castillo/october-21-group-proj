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
    Get all projects
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
    categories = Category.query.all()
    form.category.choices = [(categories.id, categories.name)
                             for categories in Category.query.all()]
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        project = Project(title=data['title'],
                          description=data['description'],
                          goal=data['goal'],
                          categories_id=data['category'],
                          user_id=current_user.get_id(),
                          current_amount=0,
                          image_url=data['image_url'])
        db.session.add(project)
        db.session.commit()
        return project.to_dict()
    else:
        return form.errors


@project_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def update_project(id):
    print("--------entered PATCH route-----------")
    project = Project.query.filter(Project.id == id).first()
    # if current_user.id == project.user_id:
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    project.title = data['title'],
    project.description = data['description'],
    project.goal = data['goal'],
    project.category = data['category'],
    project.user_id = current_user.get_id(),
    project.current_amount = project.current_amount,
    project.image_url = data['image_url']
    db.session.commit()
    return project.to_dict()
    # if form.validate_on_submit():
    #     print("--------entered form validate-----------")
    #     data = form.data
    #     project.title = data['title'],
    #     project.description = data['description'],
    #     project.goal = data['goal'],
    #     project.category = data['category'],
    #     project.user_id = current_user.get_id(),
    #     project.current_amount = project.current_amount,
    #     project.image_url = data['image_url']
    #         # edited_project = Project(title=data["title"],
    #         # description=data['description'],
    #         # goal=data['goal'],
    #         # category=data['category'],
    #         # user_id=current_user.get_id(),
    #         # current_amount=project.current_amount,
    #         # image_url=data['image_url'])
    #         # db.session.add(edited_project)
    #     db.session.commit()
    #     return project.to_dict()
    # else:
    #     print("--------printing form errors-----------")

    #     return form.errors


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


@project_routes.route('/<int:id>/pledge', methods=["POST"])
@login_required
def new_pledge():
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
        db.session.add(new_pledge)
        db.session.commit()
        return redirect('/')
    else:
        return form.errors


@project_routes.route('/<int:id>', methods=["PATCH"])
@login_required
def update_pledge(id):
    pledge = Pledge.query.filter(Pledge.id == id)
    if current_user.id == pledge.user_id:
        form = PledgeForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = form.data
            project = Pledge(amount=data["amount"],
                             user_id=current_user.get_id(),
                             project_id=id
                             )
        db.session.add(project)
        db.session.commit()
        return redirect('/')
