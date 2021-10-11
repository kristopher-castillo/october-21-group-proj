from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class PledgeForm(FlaskForm):
    amount = IntegerField('amount', validators=[DataRequired()])
