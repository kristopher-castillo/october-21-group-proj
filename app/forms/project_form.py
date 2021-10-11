from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired
# from app.models import Category

# categories = Category.query.all()


class ProjectForm(FlaskForm):
    title = StringField('Project Title', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    goal = IntegerField('Goal', validators=[DataRequired()])
    categories_id = SelectField('Category', validators=[DataRequired()])
    image_url = StringField('Image Url', validators=[DataRequired()])
    submit = SubmitField('Submit')
