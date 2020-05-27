from flask import Flask
from flask import request
from models.boston import estimatePrice

app = Flask(__name__)

@app.route('/api/')
def index():
    return 'INDEX'

@app.route('/api/predict-price', methods=['GET', 'POST'])
def predict_price():
    # Temporary "aglorithm" just returns the sum.
    crim = request.args.get('crim')
    zn = request.args.get('zn')
    indus = request.args.get('indus')
    chas = request.args.get('chas')
    nox = request.args.get('nox')
    rm = request.args.get('rm')
    age = request.args.get('age')
    dis = request.args.get('dis')
    rad = request.args.get('rad')
    tax = request.args.get('tax')
    ptratio = request.args.get('ptratio')
    b = request.args.get('b')
    lstat = request.args.get('lstat')

    return {
        "estimatedPrice" : estimatePrice(list(map(int, [
            crim,
            zn,
            indus,
            chas,
            nox,
            rm,
            age,
            dis,
            rad,
            tax,
            ptratio,
            b,
            lstat,
        ])))
    }

if __name__ == '__main__':
    app.run(debug = True)
