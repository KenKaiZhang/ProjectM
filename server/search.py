from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from tools import *

opt = Options()
opt.headless = True

def search(mangaTitle):
    driver = webdriver.Chrome("./chromedriver", options=opt)
    mangaTitle = mangaTitle.replace(' ', '-').lower()
    search_url = "https://mangakakalot.to/search?keyword=" + mangaTitle
    driver.get(search_url)
    results = driver.find_elements(By.CLASS_NAME, 'item')
    resultNum = 1
    data = {}
    for result in results:
        
        item = result.find_element(By.CLASS_NAME, 'item-poster')
        a_xpath = '//*[@id="main"]/div/div/div[2]/div[1]/div[' + str(resultNum) + ']/div[1]/a'
        a = item.find_element(By.XPATH, a_xpath)

        img_xpath = a_xpath + '/img'
        img = a.find_element(By.XPATH, img_xpath)
        
        link = a.get_attribute('href')
        poster = img.get_attribute('src')
        title = img.get_attribute('alt')
        
        data[title] = [poster, link]
        resultNum += 1

    driver.close()
    return data
    
