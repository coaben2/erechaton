from flask import Flask, render_template

app = Flask(__name__)

@app.route("/get_json_data")
def get_json_data():
    return send_from_directory('static/files', 'msqdb_formatted.json')

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/suivi")
def suivi():
    return render_template('suivi.html')

if __name__== '__main__':
    app.run(debug=True)
