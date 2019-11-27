import json

from flask import Flask
from flask import request
from flask_restful import Api
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

api = Api(app)


@app.route("/next", methods=["POST"])
def next():
    data = request.get_json()

    input_form = data["mainInputValue"]
    output = {
        "postOutput": f"output value: {input_form}",
    }

    return json.dumps(output)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
