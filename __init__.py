from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = __name__
    app.config["SECRET_KEY"] = "GrowWise_key"
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///my_database.db'