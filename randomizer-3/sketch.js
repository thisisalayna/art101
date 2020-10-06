//The dogs I love
let dogs = [{
  name: "Maxie",
  born: "1991"
}, {
  name: "Zsa-zsa",
  born: "1993"
}, {
  name: "Gabby",
  born: "1999"
}, {
  name: "Alfie",
  born: "2005"
}, {
  name: "Jodie",
  born: "2010"
}, {
  name: "Ricky",
  name: "Sebastian",
  born: "2016"
}];

let randomIndex = 0;
let animating = false;
let dogImages = [];
let imageCounter = 0;


function preload() {
  for (let i = 0; i <= 7; i++)
    dogImages[i] = loadImage(`images/dogs_${i}.JPG`)

}


function setup() {
  createCanvas(600, 600);
  background(220);
  textSize(25);
  imageMode(CENTER);
  frameRate(3);

  text("click to randomize", 50, 50);
  console.log(dogImages);
  console.log(imageCounter);
}

function draw() {

  if (animating == true) {
    clear();
    image(dogImages[imageCounter], width / 2, height / 2);

  }
  if (imageCounter < dogImages.length - 1) {
    imageCounter++;
  } else {
    imageCounter = 0;
  }

}

function randomizer() {
  animating = false;
  if (dogs[0]) {
    background(255);
    clear();

    randomIndex = int(random(dogs.length));
    image(random(dogImages), width / 2, 300);
    text(`${dogs[randomIndex].name}
    born in ${dogs[randomIndex].born}`, width / 2, 50);
    //text(dogs[randomIndex].name + " was born in " +
    //dogs[randomIndex].born, 50, 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(255), random(255), random(255));
    text("that's everyone!", 50, 50);
  }
}

function mousePressed() {
  console.log("we've gotten hereeee!");

  animating = true;
  setTimeout(randomizer, 2000);

}
