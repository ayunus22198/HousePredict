from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/api/')
def index():
    return 'INDEX'

@app.route('/api/predict-price')
def predict_price():
    # Temporary "aglorithm" just returns the sum.
    return {
        "estimatedPrice" : sum(map(int,
            [
                request.args.get('totalarea'),
                request.args.get('crimerate'),
                request.args.get('age'),
                request.args.get('rooms'),
                request.args.get('propertytax')
            ]))
    }

if __name__ == '__main__':
    app.run(debug = True)
