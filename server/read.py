from selenium import webdriver
from selenium.webdriver.common.by import By
from tools import *

url = "https://mangakakalot.to/read/one-piece-3/en/chapter-1"
path = "/Users/kenzhang/ProjectM/src/components/Scrapper/OnePiece/"
driver = webdriver.Chrome("./chromedriver").get(url)
pages = driver.find_elements(By.CLASS_NAME, "card-wrap ")



pageNum = 1
for page in pages:
    xpath = '//*[@id="list-image"]/div[' + str(pageNum) + ']'
    image = page.find_element(By.XPATH, xpath).get_attribute('data-url')
    download_page_image(image, path, pageNum)
    pageNum += 1

driver.close()

