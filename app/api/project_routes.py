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
    print(current_user.get_id())
    return projects.to_dict()

@project_routes.route('/', methods=["POST"])
@login_required
def new_project():
    """
    Creates a new project if user is logged in
    """
    form = ProjectForm()
    categories = Category.query.all()
    form.category.choices = [(categories.id, categories.category_name) for categories in Category.query.all()]
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        project = Project(title=data["title"],
                        description=data['description'],
                        goal=data['goal'],
                        categories_id=data['category'],
                        user_id=current_user.get_id(),
                        current_amount=0,
                        image_url=data['image_url'])
        db.session.add(project)
        db.session.commit()
        return redirect('/')
    else:
        return form.errors

@project_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_project(id):
    project = Project.query.filter(Project.id == id)
    if current_user.id == project.user_id:
        form = ProjectForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = form.data
            project = Project(title=data["title"],
                        description=data['description'],
                        goal=data['goal'],
                        category=data['category'],
                        user_id=current_user.get_id(),
                        current_amount=0,
                        image_url=data['image_url'])
        db.session.add(project)
        db.session.commit()
        return redirect('/')

@project_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_project(id):
    deleted_project = Project.query.filter(Project.id == id).first()
    Project.query.filter(Project.id == id).delete()
    db.session.commit()
    return redirect('/')

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

@project_routes.route('/<int:id>', methods=["PUT"])
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



