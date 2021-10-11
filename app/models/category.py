from .db import db


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(50), nullable=False, unique=True)

    projects = db.relationship("Project", back_populates="categories", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
