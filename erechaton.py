from flask import Flask, erechaton

app = Flask(__name__)

@app.route('/')
def index():
    return erechaton('index.html')

if __name__ == '__main__':
    app.run(debug=True)