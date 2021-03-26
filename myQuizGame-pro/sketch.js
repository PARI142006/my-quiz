var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var quiz,question;
var database;

var  question, contestant, quiz;


function setup(){
  canvas = createCanvas(400,400);
  
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("lightblue")
  if(contestantCount===4){
    quiz.update(1)
  }
  if(gameState===1){
    clear();
    quiz.play();
  }
}
