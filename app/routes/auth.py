# # This is resposible for routing purpose. And it is only doing Authentication for login system
from flask import Blueprint, redirect, render_template, url_for, flash, request, session
from ..models import Users_Data

from app import db
from werkzeug.security import check_password_hash, generate_password_hash

auth_bp = Blueprint('auth', __name__)

hashed = check_password_hash


# @auth_bp.route('/')
# def home():
#      return render_template('base.html')



@auth_bp.route('/signup', methods=["GET", "POST"])
def signup():
     if request.method == 'POST':
          username = request.form.get('username')
          email = request.form.get('email')
          password = request.form.get('password')
          hashed_password = generate_password_hash(password)

          existing_user = Users_Data.query.filter_by(username=username).first()


          if existing_user:
               flash("The user name already exists!")
               return redirect(url_for('signup'))
          else:
               new_data = Users_Data(username=username, useremail=email, password=hashed_password)
               db.session.add(new_data)
               db.session.commit()
               return redirect(url_for('task.view_task'))
     return render_template("signup.html")




@auth_bp.route('/login', methods=["GET", "POST"])
def login():
     if request.method == "POST":
          username = request.form.get("username")
          password = request.form.get("password")

          if username and password:
               user = Users_Data.query.filter_by(username=username).first()
               if user and check_password_hash(user.password, password):
                    session['user']=username
                    session['userid'] = user.id_no
                    flash(f"Wellcome {username}")
                    # return redirect(url_for('task.view_task'))
                    return render_template("my.html")
               else:
                    flash("Invalid Username or Password!")
                    return redirect(url_for('auth.login'))
          
     return render_template("login.html")



@auth_bp.route('/logout')
def logout():
     if 'user' in session:
          session.pop('user')
     flash('logged out', 'info')
     return redirect(url_for('auth.login'))



auth_bp.route('/success')
def success():
     return render_template("task.html")
