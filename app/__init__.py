from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def cretae_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'my_secret_key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app) #it responsible for creating the data base
    
    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp)

    from app.routes.path import path_bp
    app.register_blueprint(path_bp)
    # # from app.routes.task import task_bp
    # # app.register_blueprint(task_bp)


    return app