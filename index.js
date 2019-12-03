/*
 * WORLD MAP VISUALIZER
 * Author: Lisa Schulzke
 * ---------------------------
 *
 * Visualizing the world!
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe 2.0: Das Script soll eine Weltkarte auf der Konsole als ASCII-Art zeichnen.
 *  Dafür muss jeder Pixel eines Bild einer Weltkarte gelesen und geprüft werden (world.jpg).
 *  Ist der Pixel schwarz, soll ein Zeichen (z.B. "#") an die richtige Stelle der Konsole 
 *  gesetzt werden. Dafür braucht ihr zwei Funktionen:
 *
 *  getPixelColor(x,y) - kann mit map_image-Objekt benutzt werden (also map_image.getPixelColor(x,y))
 *  writeCharacterToConsole(char, x, y) - Schreibt ein Zeichen an eine Position x/y auf die Konsole
 *
 *  Aufgabe 2.1: Farbe! Schaut euch das npm-Modul "chalk" an, und versucht die Zeichen in Farbe auszugeben
 *
 */

const chalk = require('chalk')
const rl = require('readline')
//const jimp = require('jimp')

clearConsole()

/*jimp.read('map.jpg', (err, map_image) => {
  if (err) throw err; //provoziert weitere Fehler, falls ein Fehler auftritt. Dies führt zum Programmabsturz
  //Gegensatz zu try catch 
  map_image.resize(100, 50); //resize ändert die Größe des Bildes
  console.log(map_image.getPixelColor(0, 0)); //gibt die Farbe des Pixels links oben zurück
  writeCharacterToConsole('#', 0, 0); //schreibt ein # links oben in die Konsole

  //----- Hier kommt euer Code hin -----
  //1. Funktion schreiben, wenn der Pixel schwarz ist, ihn abzubilden
  let chalk = require('chalk')
  for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 50; y++) {
      if (map_image.getPixelColor(x, y) <= 255) {
        writeCharacterToConsole(chalk.magenta ('#'), x, y)
      }


      //console.log()
    }
  }
});
*/

function generateInvader (width, height, xPos, yPos) {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let randomNumber = Math.random();
      if (randomNumber >= 0.5) {
        let h = 300;
        let s = Math.floor(Math.random() * 100);
        let v = Math.floor(Math.random() * 100);
        writeCharacterToConsole(chalk.hsv(h, s, v) ('◼'), x + xPos, y + yPos)
        writeCharacterToConsole(chalk.hsv(h, s, v) ('◼'), (2 * width - x) + xPos, y + yPos)
      }
    }
  } rl.cursorTo(process.stdout, 100, 100)
}

setInterval(function () {
  const xPos = Math.floor(Math.random() * 200);
  const yPos = Math.floor(Math.random() * 50);
  clearConsole();
  generateInvader(10, 5, xPos, yPos);
}, 1000);


/*
 * HELPER FUNCTIONS - DO NOT CHANGE
 */
function clearConsole () {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)

  rl.cursorTo(process.stdout, 0, 0)
  rl.clearScreenDown(process.stdout)
}

function writeCharacterToConsole (char, x, y) {
  rl.cursorTo(process.stdout, x, y)
  process.stdout.write(char)
}