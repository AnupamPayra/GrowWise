from flask import Flask, render_template, redirect, request, Response, url_for, session, Blueprint

# from passs import login_pass
from app.mail import send_mail
from app.data import insert_name_database, curssor, names

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/sign', methods =['GET', 'POST'])
def sign():
    if request.method == 'POST':
     return render_template('login.html')


@auth_bp.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        email = request.form.get("email")

        user_exists = any(username == name[0] for name in names)

        if not user_exists:
            otp = send_mail(email)
            session["otp"] = otp
            insert_name_database(username, email)
            return redirect(url_for('auth.sec'))

    return render_template("password.html")




@auth_bp.route("/Otp_validation", methods=["GET", "POST"])
def sec():
    otp = session.get("otp")
    if request.method == "POST":
        user_input_otp = request.form.get("User_input_otp")
        if user_input_otp == otp:
            session.pop("otp", None)
            return render_template("1mainPage.html")
        else:
            pass

    return render_template("password.html")

    
        


