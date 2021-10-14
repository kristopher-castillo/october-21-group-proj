from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class PledgeForm(FlaskForm):
  amount = IntegerField('amount', validators=[DataRequired()])
  user_id = IntegerField('User Id', validators=[DataRequired()])
  project_id= IntegerField('Project Id', validators=[DataRequired()])
