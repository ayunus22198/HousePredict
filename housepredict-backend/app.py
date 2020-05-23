from flask import Flask

app = Flask(__name__)

@app.route('/api/')
def index():
    return 'INDEX'

@app.route('/api/predict-price')
def predict_price():
    return 'TEST'

if __name__ == '__main__':
    app.run(debug = True)
