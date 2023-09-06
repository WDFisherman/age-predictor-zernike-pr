
<h1 align="center">
  Leeftijd voorspeller - Zpannend zernike 2023
  <br>
</h1>

<h4 align="center">Een simpele leeftijd voorspeller op basis van biometrie gegeven door proefpersonen/bezoekers van de website.</h4>


<p align="center">
  <a href="#functionaliteiten">Functionaliteiten</a> •
  <a href="#hoe-te-gebruiken">Hoe te gebruiken</a> •
  <a href="#download">Download en installeren</a> •
  <a href="#achtergrond-informatie">Zpannend zernike</a> •
  <a href="#credits">Credits</a>
</p>


## Functionaliteiten

* Leeftijd voorspelling op basis van:
    - Flexibiliteit: proefpersoon gaat voorover buigen, ander iemand gaat kijken hoe ver de handen van de proefpersoon van de grond rijkt.
    - Reactiesnelheid: proefpersoon drukt op knop bij computer en wacht op verandering van kleur en drukt weer op knop voor meting reactie snelheid.
    - Balans: proefpersoon staat op 1 been tot 1 minuut lang en geeft aan hoeveel seconden hij/zij het heeft volgehouden.
    - Medicatie: proefpersoon geeft aan hoeveel verschillende soorten medicatie hij/zij heeft genomen in zijn/haar leven.
* Gegevens opslaan voor toekomstig gebruik van AI.


## Methode
De ingevulde gegevens van de proefpersoon worden omgerekend in punten, deze punten worden bij elkaar op geteld en door 4 gedeeld waaruit een nummer uitkomt die iemands leeftijd geraden moet hebben. Deze punten berekening is deels wetenschappelijk gebasseerd, maar kan niet als feitelijk worden omschreven. 

## Doel van de website
Deze website is bedoeld voor het enthoushast maken van aankomende studenten over het vakgebied informatica binnen de biowetenschappen. Dit met de achterliggende projecten Zpannend zernike en de open dagen van de Hanzehogeschool. 


## Achtergrond informatie

### Zpannend zernike
[Zpannend zernike](https://zpannendzernike.nl/) is een jaarlijks wetenschapsfestijn in Groningen voor jongeren georganiseerd door kennispartners in Groningen. 

### Hanzehogeschool
[Hanzehogeschool](https://hanze.nl/) is een hogeschool gelegen in de stad Groningen en bied master, bachlor opleidingen aan in vrijwel alle vakgebieden.

## Hoe te gebruiken

Git download:

```bash
$ git clone https://gitlab.bioinf.nl/
```

In de project map:

```bash
# Installeer dependencies
$ npm install

# Start de app
$ npm run quickStart

# Start de app bij aanpassingen van broncode
$ npm run start
```


## Credits

Deze applicatie gebruikt de volgende packages (+dependencies):

- [Node.js](https://nodejs.org/)
- [Webpack](https://webpack.js.org/)
- [CSV Write Stream](https://github.com/maxogden/csv-write-stream)
- [ExpressJS](https://expressjs.com/)

Markdown template: [Markdownify by amitmerchant1990](https://github.com/amitmerchant1990/electron-markdownify)

Gemaakt door: [Willem Daniël Visser](https://github.com/WDFisherman)<br>
In opdracht van: [Ronald Wedema](https://github.com/rwedema)

### Contact

E-mail: wd_visser@hotmail.com


