#It is nothing, we use it for creating models(tables) in our data base

from app import db

class Task(db.Model):
    id_no = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(20), default = "Pending")


class Users_Data(db.Model):
    id_no = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    useremail = db.Column(db.String(20), nullable=False, unique =True)
    password = db.Column(db.String(20), nullable=False)
    