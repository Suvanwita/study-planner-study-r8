class ExamSchedule{
     constructor(){
       this.Text=createElement("h2");
       this.label1=createElement("h3");
       this.label2=createElement("h3");
       this.label3=createElement("h3");
       this.label4=createElement("h3");
       this.label5=createElement("h3");
       this.label6=createElement("h3");
     }
     display(){
       this.Text.position(160,130);
       this.Text.html("EXAM SCHEDULE"+"</br>"+"My oncoming exam schedule");
     
        this.label1.position(155,230);
        this.label1.html("Name of Examination");

        this.label2.position(365,230);
        this.label2.html("Date of Examination");

        this.label3.position(560,230);
        this.label3.html("Venue of Examination");

        this.label4.position(755,230);
        this.label4.html("Time of Examination");

        this.label5.position(960,230);
        this.label5.html("Subject & Paper");

        this.label6.position(1165,230);
        this.label6.html("Comments");

     }
}