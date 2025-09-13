from flask import Blueprint, redirect, render_template, url_for, flash, request, session
from app.ecademic.engineering import engineering_courses
from app.ecademic.govtjob import govt_job_courses
from app.ecademic.graphic_design import graphic_design_courses
from app.ecademic.higherstudy import higher_study_courses
from app.ecademic.pharmacy import pharmacy_courses
from app.ecademic.medical import medicalCourses


from app.class10.arts import class_10
from app.class10.commerce import class_10
from app.class10.diploma import class_10
from app.class10.profesional import class_10
from app.class10.science import class_10
from app.class10.vocational import class_10
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



# ==============================================After 12th ecademic======================================================
@path_bp.route('/engineering', methods=["GET", "POST"])
def engineering():
    if request.method == "POST":
        return render_template('academic/engineering.html', engineering=engineering_courses)
    return render_template('academic/engineering.html')

@path_bp.route('/govtjob', methods=["GET", "POST"])
def govtjob():
    if request.method == "POST":
        return render_template('academic/govtjob.html', govtjob=govt_job_courses)
    return render_template('academic/govtjob.html')

@path_bp.route('/graphicdesign', methods=["GET", "POST"])
def graphicdesign():
    if request.method == "POST":
        return render_template('academic/graphicdesign.html', graphicdesign=graphic_design_courses)
    return render_template('academic/graphicdesign.html')

@path_bp.route('/higherstudy', methods=["GET", "POST"])
def higherstudy():
    if request.method == "POST":
        return render_template('academic/higherstudy.html', higherstudy=higher_study_courses)
    return render_template('academic/higherstudy.html')

@path_bp.route('/medical', methods=["GET", "POST"])
def medical():
    if request.method == "POST":
        return render_template('academic/medical.html', medical=medicalCourses)
    return render_template('academic/medical.html')

@path_bp.route('/pharmacy', methods=["GET", "POST"])
def pharmacy():
    if request.method == "POST":
        return render_template('academic/pharmacy.html', pharmacy=pharmacy_courses)
    return render_template('academic/pharmacy+.html')






# ==============================================After 10th ecademic======================================================
@path_bp.route('/science', methods=["GET", "POST"])
def science():
    if request.method == "POST":
        return render_template('academic/engineering.html', engineering=class_10)
    return render_template('academic/engineering.html')

@path_bp.route('/commerce', methods=["GET", "POST"])
def commerce():
    if request.method == "POST":
        return render_template('academic/govtjob.html', govtjob=class_10)
    return render_template('academic/govtjob.html')

@path_bp.route('/arts', methods=["GET", "POST"])
def arts():
    if request.method == "POST":
        return render_template('academic/graphicdesign.html', graphicdesign=class_10)
    return render_template('academic/graphicdesign.html')

@path_bp.route('/vocational', methods=["GET", "POST"])
def vocational():
    if request.method == "POST":
        return render_template('academic/higherstudy.html', higherstudy=class_10)
    return render_template('academic/higherstudy.html')

@path_bp.route('/diploma', methods=["GET", "POST"])
def diploma():
    if request.method == "POST":
        return render_template('academic/medical.html', medical=class_10)
    return render_template('academic/medical.html')

@path_bp.route('/professional', methods=["GET", "POST"])
def professional():
    if request.method == "POST":
        return render_template('academic/pharmacy.html', pharmacy=class_10)
    return render_template('academic/pharmacy+.html')
