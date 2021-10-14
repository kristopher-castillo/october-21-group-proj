from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, db, Pledge
from app.forms import PledgeForm
from flask_login import current_user, login_user, logout_user, login_required

pledge_routes = Blueprint('pledge', __name__)

@pledge_routes.route('/')
def get_pledges():
    """
    Get all pledges
    """
    pledges = Pledge.query.all()
    return pledges.to_dict()

@pledge_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_pledge(id):
    # deleted_project = Project.query.filter(Project.id == id).first()
    Pledge.query.filter(Pledge.id == id).delete()
    db.session.commit()
    return redirect('/')


@pledge_routes.route('/<int:id>', methods=["PATCH"])
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
