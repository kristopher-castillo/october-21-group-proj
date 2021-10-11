from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, db, Pledge
from app.forms.pledge_form import PledgeForm
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
def delete_project(id):
    # deleted_project = Project.query.filter(Project.id == id).first()
    Pledge.query.filter(Pledge.id == id).delete()
    db.session.commit()
    return redirect('/')