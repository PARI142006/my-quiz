class Question {
  constructor() {
   
  this.greeting=createElement('h2') 
  }

  hide(){
    this.greeting.hide()
    this.answer.hide();
    this.input.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("My Quiz Game");
    title.position(130, 0);
    
    this.question.html("Who invented the Light Bulb?")
    this.question.position(100,90)
    this.answer.html("answer the correct option")
    this.answer.position(250, 200);
    this.input.html("Your name")
    this.input.position(130, 160);
    
    this.option1.html("1: J.J Thompson")
    this.option2.position(100,110);

    this.option2.html("2: Joseph Swan")
    this.option2.position(100,130);


    this.option3.html("2: Thomas Edison")
    this.option3.position(100,150);

    this.option4.html("2: Maxim Evans")
    this.option4.position(100,170);

    this.answer.mousePressed(()=>{
      this.input.hide();
      this.answer.hide();

     contestant.name=this.input.value();
      
      contestantCount+=1;
      contestant.update()
      contestant.updateCount(contestantCount);
     
     this.greeting.html("Hello " + contestant.name )
      this.greeting.position(130, 160)
    });

  }
}
