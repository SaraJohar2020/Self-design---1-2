var canvas;
var backgroundImage, robber1_img, robber2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers, robber1, robber2, food, powerCoins, obstacles;
var robbers = [];

function preload() {
  backgroundImage = loadImage("./assets 2/background.png");
  robber1_img = loadImage("../assets 2/thief1-removebg-preview.png");
  robber2_img = loadImage("../assets 2/thief2-removebg-preview.png");
  track = loadImage("../assets 2/track.jpg");
 
  powerCoinImage = loadImage("./assets 2/goldCoin.png");
  obstacle1Image = loadImage("./assets 2/police-removebg-preview.png");
  
  lifeImage = loadImage("./assets 2/life.png");
  blastImage = loadImage("./assets 2/blast.png");

  foodImage = loadImage("./assets 2/pizza-removebg-preview.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
