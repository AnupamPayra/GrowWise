from flask import Blueprint, redirect, render_template, url_for, flash, request, session

path_bp = Blueprint('path', __name__)


@path_bp.route('/')
def home():
    return render_template("1mainPage.html")


@path_bp.route('/career', methods=["GET", "POST"])
def career():
    if request.method == "POST":
        return render_template("2main_career_awerness.html")
    return render_template("2main_career_awerness.html")


#its for job portal file
@path_bp.route('/job_portal', methods=["GET", "POST"])#its for job portal file
def job_portal():
    if request.method == "POST":
        return render_template("job_portal.html")
    return render_template("job_portal.html")
    
#its for technology file
@path_bp.route('/Technology')#its for technology file
def Technology():
    return render_template("technology.html")

#its for helthcare file
@path_bp.route('/helthcare')#its for helthcare file
def helthcare():
    return render_template("helthcare.html")


#its for business file
@path_bp.route('/business')#its for business file
def business():
    return render_template("business.html")


#its for creative file
@path_bp.route('/creative')#its for creative file
def creative():
    return render_template("creative.html")


#its for creative file
@path_bp.route('/education')#its for creative file
def education():
    return render_template("education.html")

#its for creative file
@path_bp.route('/science__research')#its for creative file
def science__research():
    return render_template("science_&_research.html")

