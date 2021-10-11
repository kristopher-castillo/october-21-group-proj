from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired
from models import Category

categories = Category.query.all()
# id = Category.query.all().id

class ProjectForm(FlaskForm):
    title = StringField('Project Title', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    goal = IntegerField('Goal', validators=[DataRequired()])
    category = SelectField('Category', validators=[DataRequired()], choices=[(category.id, category.category_name) for category in categories])
    image_url = StringField('Image Url', validators=[DataRequired()])
    submit = SubmitField('Submit')
