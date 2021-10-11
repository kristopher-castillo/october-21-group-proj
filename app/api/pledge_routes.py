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



@pledge_routes.route('/', methods=["PATCH"])
@login_required
# def update_pledge():