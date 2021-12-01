import requests
from bs4 import BeautifulSoup

url = 'https://www.spanishdict.com/conjugate/hablar'

response = requests.get(url)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    tenses = soup.select('._3Le9u96E._2cyjHi0d._1zVoo-wU._3czlKu17.y9F9itDZ')
    
    print('=== tenses ===')
    for tense in tenses:
        result = f'\'{tense.get_text()}\','
        print(result)

    print('=== words ===')    
    words = soup.select('._2zu1T3f5')
    for word in words:
        result = f'\'{word.get_text()}\','
        print(result)
else : 
    print(response.status_code)
