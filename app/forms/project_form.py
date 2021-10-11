from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class ProjectForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
