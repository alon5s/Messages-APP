import os
from flask import Flask, request, redirect, url_for, render_template, session
app = Flask(__name__)

app.secret_key = os.urandom(12)

messages = ["hi", 'aaaa']


@app.route('/')
def hello():
    return redirect(url_for("home"))


@app.route('/home')
def home():
    if 'counter' not in session:
        session['counter'] = 0
    if 'showed_msg' not in session:
        session["showed_msg"] = len(messages)
    return render_template("homepage.html")


@app.route('/num_msgs')
def num_msg():
    if 'showed_msg' not in session:
        session["showed_msg"] = len(messages)
    return str(session["showed_msg"])


@app.route('/messages')
def get_messages():
    if session["counter"] == 0:
        session["showed_msg"] = len(messages)
    else:
        session["showed_msg"] = len(messages)
        session["counter"] = 0
    return {"messages": messages, "len": session["showed_msg"]}


@app.route('/new_message_counter')
def message_counter():
    if 'counter' not in session:
        session['counter'] = 0
    if 'showed_msg' not in session:
        session["showed_msg"] = len(messages)
    session["counter"] = len(messages) - session["showed_msg"]
    return str(session["counter"])


@app.route('/admin')
def admin():
    return render_template("admin.html")


@app.route('/add', methods=['POST'])
def add():
    messages.append(request.json['message'])
    return "message added"


if __name__ == '__main__':
    app.run(debug=True)
