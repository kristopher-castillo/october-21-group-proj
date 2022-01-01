from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class ProjectForm(FlaskForm):
    title = StringField('Project Title', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    goal = IntegerField('Goal', validators=[DataRequired()])
    current_amount = IntegerField('Current Amount')
    categories_id = IntegerField('Category', validators=[DataRequired()])
    image_url = StringField('Image Url', validators=[DataRequired()])



