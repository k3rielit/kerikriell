# data.js ```const MData: { }```
##### Szerkezete:
 * Téma objektumok (bármennyi lehet, bármilyen névvel):
```js
Azonossagok: {...}, Igen: {...},
```
 * Azokon belul nehézség tombok (szintén):
```js
konnyu: [...], kozepes: [...],
```
 * Azokon belul az egyes feladatok név nélkuli objektumai, ezek a szukséges property-k egyelore, de tartalmazhat tobbet is
```js
{
    title: ()=> `<h2>...</h2>`,        // a   ()=>``  ugyanaz mint a   function(){return ``;}
    UI: ()=> `<div>...<div>`,          // nélkule csak az oldal betoltésekor egyszer lenne elkészítve a string
    tooltip: ()=> `<div>...</div>`,    // így ugyanazok a kérdések lennének minden feladatban
    calc: function(elem) {
        // 'elem' egy HTML elem, az adott feladat konténere
        return parseInt( elem.querySelector('#value_a').value ); // a feladat eredményét adja vissza
    }
},
{...},
```
##### Például:
```js
const MData = {

    Tema1: {
        fokozat1: [
            {title:()=>``, UI:()=>``, tooltip:()=>``, calc:function(elem){return 1;}, },
            {title:()=>``, UI:()=>``, tooltip:()=>``, calc:function(elem){return 2;}, },
        ],
        fokozat2: [
            {title:()=>``, UI:()=>``, tooltip:()=>``, calc:function(elem){return 3;}, },
            {title:()=>``, UI:()=>``, tooltip:()=>``, calc:function(elem){return 4;}, },
        ],
    },
    
    Tema2: {
        fokozat1: [...],
        fokozat2: [...],
    },
    
}
```
##### Hasznos dolgok:
* Egy kulon HTML-ben megírni a feladatok UI-ját, majd egy [HTML tomorítovel](https://kangax.github.io/html-minifier/) egy sorba rendezni, és berakni az MData-ba.
* Tesztelés: Console (F12 / Ctrl+Shift+I) ```MManage.placeRandom(MData.téma,'nehézség');```
* querySelector leírás, példák: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
* [gitignore tutorial](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files) az ideiglenes dolgok szurésére
# utils.js ```const MUtils: { }```
Hasznos, sokszor újrahasznált dolgok egy helyen.
* **MUtils.getRandomInt(min,max)**: random egész szám a két paraméter kozott ```min <= x < max```
* **MUtils.getRandomFloat(min,max)**: random nem egész szám a két paraméter kozott ```min <= x < max```
# index.js ```const MManage: { }```
Segít kezelni az elozo 2 objektumot. Egyelore egyben van az oldal tobbi funkcionalitásával.