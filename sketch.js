function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255);
  noStroke();
  ellipseMode(CENTER);
  for (let x = 55; x <= width - 55; x += 60) {
    for (let y = 55; y <= height - 55; y += 60) {
      // dessin de la case de la grille
      fill(255);
//      rect(x, y, 50, 50);
      // generation aleatoire des couleurs
      let color1 = color(random(255), random(255), random(255));
      let color2 = color(random(255), random(255), random(255));
      let color3 = color(random(255), random(255), random(255));
      let colors = [color1, color2, color3];
      // dessin des cercles symetriques suivant l'axe X et Y


let nbCircles1 = floor(random(1, 10)); // nombre aléatoire de cercles entre 1 et 10
      for (let i = 0; i < nbCircles1; i++) {
        let posX = random(x - 25, x + 25); // position X aléatoire à l'intérieur de la case
        let posY = random(y - 25, y + 25); // position Y aléatoire à l'intérieur de la case
        let colorIndex = floor(random(3)); // choisir une couleur aléatoirement
        fill(colors[colorIndex]);
        ellipse(posX, posY, 5, 5); // dessiner le cercle
        // Dessiner les cercles symétriques
        ellipse(2 * x - posX, posY, 5, 5);
        ellipse(posX, 2 * y - posY, 5, 5);
        ellipse(2 * x - posX, 2 * y - posY, 5, 5);
      }         
            

      let nbCircles2 = floor(random(4, 24)); // nombre de cercles aleatoire entre 4 et 24
      let circles = []; // tableau pour stocker les positions des cercles
      // generation aleatoire des positions des cercles
      for (let i = 0; i < nbCircles2; i++) {
        let posX = floor(random(1, 10)) * 5 - 22.5; // position aleatoire ajustee a  l'interieur de la case
        let posY = floor(random(1, 10)) * 5 - 22.5; // position aleatoire ajustee a  l'interieur de la case
        // verification si la position n'est pas deja  occupee par un cercle
        while (circles.includes([posX, posY]) || circles.includes([-posX, posY]) || circles.includes([posX, -posY]) || circles.includes([-posX, -posY])) {
          posX = floor(random(1, 10)) * 5 - 22.5; // position aleatoire ajustee a  l'interieur de la case
          posY = floor(random(1, 10)) * 5 - 22.5; // position aleatoire ajustee a  l'interieur de la case
        }
        circles.push([posX, posY]);
      }
     
  // dessin des cercles symetriques suivant l'axe X et Y
  for (let i = 0; i < circles.length; i++) {
    let posX = circles[i][0];
    let posY = circles[i][1];
    ellipse(x + posX, y + posY, 5, 5);
    ellipse(2 * x - (x + posX), y + posY, 5, 5);
    ellipse(x + posX, 2 * y - (y + posY), 5, 5);
    ellipse(2 * x - (x + posX), 2 * y - (y + posY), 5, 5);
  }
}
}
}

function mousePressed() {
redraw();
}
