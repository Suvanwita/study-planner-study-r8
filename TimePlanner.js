class TimePlanner{
    constructor(){
        this.timeText=createElement("h2");
        this.BackButton3=createButton("Go back");
    }

    display(){
          
       this.timeText.position(40,560);
       this.timeText.html("Time is the most precious gift." +"<br/>"+"Don't waste it.");
                   
        this.BackButton3.position(750,800);
        this.BackButton3.size(100,30);

        this.BackButton3.mousePressed(()=>{

                this.timeText.hide();
                this.BackButton3.hide();

                game.update(2);
                game.displayChoose();          
            })
            
 }

}