from app import cretae_app, db
from app.models import Task, Users_Data
from flask import Flask, render_template


app = cretae_app()

with app.app_context():
    db.create_all()


@app.route('/')
def main():
    return render_template("mainPage.html")

if __name__ == "__main__":
    app.run(debug=True)