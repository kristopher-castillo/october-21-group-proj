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

@pledge_routes.route('/', methods=["POST"])
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
                        user_id=current_user.get_id()
                        project_id=
        )
        db.session.add(new_pledge)
        db.session.commit()
        return redirect('/')
    else:
        return form.errors

@pledge_routes.route('/', methods=["PATCH"])
@login_required
# def update_pledge():