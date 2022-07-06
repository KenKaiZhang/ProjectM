from selenium import webdriver
from selenium.webdriver.common.by import By
from tools import *

driver = webdriver.Chrome("./chromedriver")

mangaTitle = "one piece"
mangaChapter = 1

mangaTitle = mangaTitle.replace(' ', '-').lower()
search_url = "https://mangakakalot.to/search?keyword=" + mangaTitle
driver.get(search_url)

results = driver.find_elements(By.CLASS_NAME, 'item')

resultNum = 1
for result in results:
    
    item = result.find_element(By.CLASS_NAME, 'item-poster')
    a = item.find_element(By.XPATH, '//*[@id="main"]/div/div/div[2]/div[1]/div[2]/div[1]/a')
    img = a.find_element(By.XPATH, '//*[@id="main"]/div/div/div[2]/div[1]/div[2]/div[1]/a/img')
    
    link = a.get_attribute('href')
    poster = img.get_attribute('src')
    title = img.get_attribute('alt')

    print(link, poster, title)
    
    resultNum += 1

driver.close()
