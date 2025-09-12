from flask import Blueprint, redirect, render_template, url_for, flash, request, session

path_bp = Blueprint('path', __name__)


@path_bp.route('/')
def home():
    return render_template("1mainPage.html")




# career awerness
@path_bp.route('/career', methods=["GET", "POST"])
def career():
    if request.method == "POST":
        return render_template("2main_career_awerness.html")
    return render_template("2main_career_awerness.html")

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

#its for education file
@path_bp.route('/education')#its for creative file
def education():
    return render_template("education.html")

#its for science_&_research file
@path_bp.route('/science__research')#its for creative file
def science__research():
    return render_template("science_&_research.html")





#its for job portal file
@path_bp.route('/job_portal', methods=["GET", "POST"])#its for job portal file
def job_portal():
    if request.method == "POST":
        return render_template("job_portal.html")
    return render_template("job_portal.html")




#its for Exam_Details file
@path_bp.route('/Exam_Details', methods=["GET", "POST"])#its for Exam_Details file
def Exam_Details():
    if request.method == "POST":
        return render_template("Exam_Details.html")
    return render_template("Exam_Details.html")





@path_bp.route('/academic', methods=["GET", "POST"])#its for Exam_Details file
def academic():
    if request.method == "POST":
        return render_template("academic/10th&12thmain.html")
    return render_template("academic/10th&12thmain.html")

@path_bp.route('/10th', methods=["GET", "POST"])
def tenth():
    if request.method == "POST":
        return render_template('academic/10thclass.html')
    return render_template('academic/10thclass.html')

@path_bp.route('/12th', methods=["GET", "POST"])
def twelfth():
    if request.method == "POST":
        return render_template('academic/Class12th.html')
    return render_template('academic/Class12th.html')
#####################3
@path_bp.route('/engineering', methods=["GET", "POST"])
def engineering():
    if request.method == "POST":
        return render_template('academic/engineering.html')
    return render_template('academic/engineering.html')

@path_bp.route('/govtjob', methods=["GET", "POST"])
def govtjob():
    if request.method == "POST":
        return render_template('academic/govtjob.html')
    return render_template('academic/govtjob.html')

@path_bp.route('/graphicdesign', methods=["GET", "POST"])
def graphicdesign():
    if request.method == "POST":
        return render_template('academic/graphicdesign.html')
    return render_template('academic/graphicdesign.html')

@path_bp.route('/higherstudy', methods=["GET", "POST"])
def higherstudy():
    if request.method == "POST":
        return render_template('academic/higherstudy.html')
    return render_template('academic/higherstudy.html')

@path_bp.route('/medical', methods=["GET", "POST"])
def medical():
    if request.method == "POST":
        return render_template('academic/medical.html')
    return render_template('academic/medical.html')

@path_bp.route('/pharmacy', methods=["GET", "POST"])
def pharmacy():
    if request.method == "POST":
        return render_template('academic/pharmacy.html')
    return render_template('academic/pharmacy+.html')