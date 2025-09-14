from flask import Flask, render_template, redirect, request, Response, url_for, session

from passs import login_pass
from mail import send_mail
from data import insert_name_database, curssor, names


app = Flask(__name__)
app.secret_key = "super"

# key = login_pass.keys()


@app.route("/")
def main():
    return render_template("login.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        email = request.form.get("email")
        for name in names:
            if username not in name:
                otp = send_mail(email)
                session["otp"] = otp
                insert_name_database(username, email)
            return redirect(url_for('sec'))


    
    return render_template("password.html")


@app.route("/Otp_validation", methods = ["GET", "POST"])
def sec():
    otp =session.get("otp")
    if request.method =="POST":
        user_input_otp = request.form.get("User_input_otp")
        if user_input_otp == otp:
            session.pop("otp", None)
            return render_template("sucsess.html")
        
    return render_template("password.html")
    
        
app.run(debug=True)

