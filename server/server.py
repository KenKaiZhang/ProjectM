from flask import Flask, request, jsonify
from search import *

app = Flask(__name__)

@app.route('/search', methods=['POST'])
def searchTitle():
    title = request.json
    if title:
        print(title)
        return jsonify(search(title))

if __name__ == "__main__":
    app.run(debug=True)