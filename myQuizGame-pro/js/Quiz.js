class Quiz {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    })
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef=await database.ref('contestantCount').once("value")
      if(contestantCountRef.exists()){
        contestantCount=contestantCountRef.val();
        contestant.getCount();

      }
    
      question = new Question()
      question.display();
    }
  }
 

  play() {
    form.hide();
    textSize(30)
    text("QUIZ START", 120, 100)
    contestant.getContestantInfo();

      for (var plr in allContestants) {
        var correctAns="2";
        if (correctAns === allContestants[plr.answer]) 
          fill("green")
        else 
          fill("red")
        
        
        textSize(15);
        //text(allContestants[plr].name + ": " + allContestants[plr].distance, 120, display_position)
      }
    

    
  }
}

