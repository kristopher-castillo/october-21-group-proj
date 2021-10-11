from .db import db



class Pledge(db.Model):
    __tablename__ = 'pledges'

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)

    users = db.relationship("User", back_populates="pledges")
    projects = db.relationship("Project", back_populates="pledges")

    def to_dict(self):
      return {
          'id': self.id,
          'amount': self.amount,
          'user_id': self.user_id,
          'project_id': self.project_id
      }
  
