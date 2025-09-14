import smtplib
import random
from email.mime.text import MIMEText


EMAIL = "jitupayra87@gmail.com"
PASSWORD = "nbge ogff oerw rqoj"  # from Step 1
user_email =''

def send_email(receiver, subject, message):
    # Create email body
    msg = MIMEText(message)
    msg["Subject"] = subject
    msg["From"] = EMAIL
    msg["To"] = receiver

    # Connect to Gmail SMTP server
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(EMAIL, PASSWORD)
        server.sendmail(EMAIL, receiver, msg.as_string())




def generate_otp(length=6):
    digits = "0123456789"
    otp = "".join(random.choice(digits) for _ in range(length))
    return otp

otp = generate_otp()
massaage = f"Verification code from EDUlearn\n{otp}"

def send_mail(email):
    send_email(f"{email}", "EDUlearn", f"{massaage}")
    # print(f"email is {email} and otp is {otp} ")
    return otp
