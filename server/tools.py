import requests
import shutil

def download_image(url, path, pageNum):
    response = requests.get(url, stream=True)
    response.raw_decode_content = True

    fullPath = path + str(pageNum) + ".png"
    file = open(fullPath, "wb")

    shutil.copyfileobj(response.raw, file)
    del response








