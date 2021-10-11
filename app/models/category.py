from .db import db


class Category(db.Model):
    __tablename__ = 'categories'

    # id = db.Column(db.Integer, primary_key=True)
    # title = db.Column(db.String(50), nullable=False, unique=True)
