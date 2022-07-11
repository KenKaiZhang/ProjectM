from flask import Flask, request, jsonify
from search import *

app = Flask(__name__)

@app.route('/search', methods=['POST'])
def searchTitle():
    title = request.json
    if title:
        print(title)
        return jsonify(search(title))

@app.route('/getimage', methods=['POST'])
def getImage():
    url = request.json
    return jsonify(download_image(url))

if __name__ == "__main__":
    app.run(debug=True)