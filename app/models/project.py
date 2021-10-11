from .db import db


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False, unique=True)
    description = db.Column(db.Text, nullable=False, unique=True)
    goal = db.Column(db.Integer, nullable=False)
    current_amount = db.Column(db.Integer, nullable=False)
    categories_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    image_url = db.Column(db.Integer, nullable=False)

    categories = db.relationship("Category", back_populates="projects")
    users = db.relationship("User", back_populates="projects")
    pledges = db.relationship("Pledge", back_populates="projects", cascade="all, delete")

