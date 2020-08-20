var form1, form2, form3, user, game, timePlanner,examSchedule;
var gameState = 0;
var database;
var userCount;
var userIndex;
var goal;
var ImgSprite;
//var goalInput,goalvalue,submitButton;
var timeText, assText,Text3;
var libArray = [];
var userGoal=null;
var formImg,classImg,chooseImg,goalImg;

function preload() {
   
  var  formImg=loadImage("Images/books.jfif");
  var  classImg=loadImage("Images/classroom.jfif");
  var  chooseImg=loadImage("Images/goalQuotes.jfif");
  var  goalImg=loadImage("Images/goalSetting.jfif");
  var  timeTableImg=loadImage("Images/timeTable.jfif");
  var  assignmentImg=loadImage("Images/assignment.jfif");
  var  examScheduleImg=loadImage("Images/exams.jfif");
  var  progressImg=loadImage("Images/examresults.jfif");
  var  libraryImg=loadImage("Images/library.jfif");
  var  tuitionImg=loadImage("Images/tuitionclass.jfif");
  var  feesImg=loadImage("Images/fees.jfif");
  var  cocurricularImg=loadImage("Images/Cocurricular.jfif");
  var remindImg=loadImage("Images/reminder.jfif");
   
}


function setup() {
    canvas = createCanvas(displayWidth - 36, displayHeight - 20);
    database = firebase.database();

   // ImgSprite = createSprite(160, 480, 200, 300);

    user = new User();
    user.getUserCount();
    user.readGoal();

    game = new Game();
    game.getState();
    game.start();

    
       
    //exam schedule
    exam1=createInput("");
    exam2=createInput("");
    exam3=createInput("");
    exam4=createInput("");
    exam5=createInput("");
    exam6=createInput("");
    exam7=createInput("");
    exam8=createInput("");
    date1=createInput("");
    date2=createInput("");
    date3=createInput("");
    date4=createInput("");
    date5=createInput("");
    date6=createInput("");
    date7=createInput("");
    date8=createInput("");
    venue1=createInput("");
    venue2=createInput("");
    venue3=createInput("");
    venue4=createInput("");
    venue5=createInput("");
    venue6=createInput("");
    venue7=createInput("");
    venue8=createInput("");
    time1=createInput("");
    time2=createInput("");
    time3=createInput("");
    time4=createInput("");
    time5=createInput("");
    time6=createInput("");
    time7=createInput("");
    time8=createInput("");
    subject1=createInput("");
    subject2=createInput("");
    subject3=createInput("");
    subject4=createInput("");
    subject5=createInput("");
    subject6=createInput("");
    subject7=createInput("");
    subject8=createInput("");
    csubject1=createInput("");
    subject2=createInput("");
    subject3=createInput("");
    subject4=createInput("");
    subject5=createInput("");
    subject6=createInput("");
    subject7=createInput("");
    subject8=createInput("");
    comments1=createInput("");
    comments2=createInput("");
    comments3=createInput("");
    comments4=createInput("");
    comments5=createInput("");
    comments6=createInput("");
    comments7=createInput("");
    comments8=createInput("");
    
    

       

    //library
        book1Input=createInput("");
        book2Input=createInput("");
        book3Input=createInput("");
        book4Input=createInput("");
        book5Input=createInput("");
        book6Input=createInput("");
        book7Input=createInput("");
        book8Input=createInput("");
        book1Source=createInput("");
        book2Source=createInput("");
        book3Source=createInput("");
        book4Source=createInput("");
        book5Source=createInput("");
        book6Source=createInput("");
        book7Source=createInput("");
        book8Source=createInput("");
        book1Issue=createInput("");
        book2Issue=createInput("");
        book3Issue=createInput("");
        book4Issue=createInput("");
        book5Issue=createInput("");
        book6Issue=createInput("");
        book7Issue=createInput("");
        book8Issue=createInput("");
        book1Return=createInput("");
        book2Return=createInput("");
        book3Return=createInput("");
        book4Return=createInput("");
        book5Return=createInput("");
        book6Return=createInput("");
        book7Return=createInput("");
        book8Return=createInput("");
   

    

}
function draw() {

    //console.log(mouseX, mouseY);

    if (gameState === 0) {//user form introductory
        background(245, 36, 146);
       // ImgSprite.addImage(formImg);
      
    }

    if (gameState === 1) {//study r8 intro
        background(247, 140, 153);
       //ImgSprite.addImage(classImg);
    }

    if (gameState === 2) {//choose planner
        clear();
        background(96, 247, 242);
       // ImgSprite.addImage(chooseImg);
    }

    if (gameState === 3) {//goalsetting
        background(104, 40, 248);
       // ImgSprite.addImage(goalImg);
       // game.displayGoalSetting();
       goal=new GoalSetting();
       game.update(3.5);
  
    }
    if(gameState===3.5){
        goal.display();
    }


    if (gameState === 4) {//timeplanner
        background(204, 155, 247);
       //ImgSprite.addImage(timeTableImg);

        hr = hour();
        mn = minute();
        sc = second();
        angleMode(DEGREES);
        scAngle = map(sc, 0, 60, 0, 360);
        mnAngle = map(mn, 0, 60, 0, 360);
        hrAngle = map(hr % 12, 0, 60, 0, 360);
        fill(242, 201, 195);
        ellipse(150, 300, 300, 300);
        //second hand
        translate(150, 300);
        rotate(-80);//-90
        push();
        rotate(scAngle);
        stroke(134, 165, 213);
        strokeWeight(3);
        line(0, 0, 140, 0);
        pop();
        //minute hand
        translate(0, 0);
        rotate(-10);//-180
        push();
        rotate(mnAngle);
        stroke(107, 96, 190);
        strokeWeight(6);
        line(0, 0, 120, 0);
        pop();
        //hour hand
        translate(0, 0);
        rotate(180);//180
        push();
        rotate(hrAngle);
        stroke(107, 96, 190);
        strokeWeight(8);
        line(0, 0, 80, 0);
        pop();

        game.displayTimePlanner();

       }

    if (gameState === 5) {//exam
        background(248, 95, 3);
        game.displayExamSchedule();

        var examX = 140, examY = 160;
        for (examY = 160; examY < 701; examY += 60) {
            line(140, examY, 1340, examY);
        }
        for (examX = 140; examX < 1341; examX += 200) {
            line(examX, 160, examX, 700);
        }        
       // ImgSprite.addImage(examScheduleImg);

       exam1.position(160,300);
       exam2.position(160,360);
       exam3.position(160,420);
       exam4.position(160,480);
       exam5.position(160,540);
       exam6.position(160,600);
       exam7.position(160,660);
       exam8.position(160,720);
       date1.position(360,300);
       date2.position(360,360);
       date3.position(360,420);
       date4.position(360,480);
       date5.position(360,540);
       date6.position(360,600);
       date7.position(360,660);
       date8.position(360,720);
       venue1.position(560,300);
       venue2.position(560,360);
       venue3.position(560,420);
       venue4.position(560,480);
       venue5.position(560,540);
       venue6.position(560,600);
       venue7.position(560,660);
       venue8.position(560,720);
       time1.position(760,300);
       time2.position(760,360);
       time3.position(760,420);
       time4.position(760,480);
       time5.position(760,540);
       time6.position(760,600);
       time7.position(760,660);
       time8.position(760,720);
       subject1.position(960,300);
       subject2.position(960,360);
       subject3.position(960,420);
       subject4.position(960,480);
       subject5.position(960,540);
       subject6.position(960,600);
       subject7.position(960,660);
       subject8.position(960,720);
       comments1.position(1160,300);
       comments2.position(1160,360);
       comments3.position(1160,420);
       comments4.position(1160,480);
       comments5.position(1160,540);
       comments6.position(1160,600);
       comments7.position(1160,660);
       comments8.position(1160,720);

    }

    if (gameState === 6) {//progress
        background(231, 221, 247);
      //  ImgSprite.addImage(progressImg);
    }

    if (gameState === 7) {//library
        background(218, 169, 203);
       
       // ImgSprite.addImage(libraryImg);
        var timeX = 240, timeY = 160;
        for (timeY = 160; timeY < 710; timeY += 60) {
            line(240, timeY, 1230, timeY);
        }
        for (timeX = 240; timeX < 1230; timeX += 247) {
            line(timeX, 160, timeX, 710);
        }

        book1Input.position(260,300);
        book2Input.position(260,360);
        book3Input.position(260,420);
        book4Input.position(260,480);
        book5Input.position(260,540);
        book6Input.position(260,600);
        book7Input.position(260,660);
        book8Input.position(260,720);
       
        book1Source.position(510,300);
        book2Source.position(510,360);
        book3Source.position(510,420);
        book4Source.position(510,480);
        book5Source.position(510,540);
        book6Source.position(510,600);
        book7Source.position(510,660);
        book8Source.position(510,720);
        
        book1Issue.position(760,300);
        book2Issue.position(760,360);
        book3Issue.position(760,420);
        book4Issue.position(760,480);
        book5Issue.position(760,540);
        book6Issue.position(760,600);
        book7Issue.position(760,660);
        book8Issue.position(760,720);

        book1Return.position(1010,300);
        book2Return.position(1010,360);
        book3Return.position(1010,420);
        book4Return.position(1010,480);
        book5Return.position(1010,540);
        book6Return.position(1010,600);
        book7Return.position(1010,660);
        book8Return.position(1010,720);
        
        game.displayLibrary();
    }
    if (gameState === 8) {//fees
        background(229, 147, 204);
      //  ImgSprite.addImage(feesImg);

        line(100, 140, 100, 740);
        var feeX = 100, feeY = 140;
        for (feeY = 140; feeY < 740; feeY += 30) {
            line(100, feeY, 1293, feeY);
        }
        for (feeX = 250; feeX < 1293; feeX += 80) {
            line(feeX, 140, feeX, 740);
        }
        /*
        for (var feeCheckY = 300; feeCheckY < 750; feeCheckY += 40) {
            for (var feeCheckX = 260; feeCheckX < 1280; feeCheckX += 50) {
                // createCheckbox(feeCheckX,feecheckY);
                check = createCheckbox("", false);
                check.position(feeCheckX, feecheckY)
            }
        }
        */

        game.displayFeesPayment();



    }
    if (gameState === 9) {//assignment
        background(170, 248, 239);
        //ImgSprite.addImage(assignmentImg);
        //assignment,subject,dueDate,source
        var asX = 240, asY = 160;
        for (asY = 160; asY < 710; asY += 30) {
            line(240, asY, 1230, asY);
        }
        for (asX = 240; asX < 1230; asX += 247) {
            line(asX, 160, asX, 710);
        }

        game.displayAssignment();
    }

    if (gameState === 10) {//tuition
        background(227, 241, 159);
        var tuiX = 70, tuiY = 120;
        for (tuiY = 120; tuiY < 690; tuiY += 80) {
            line(70, tuiY, 1220, tuiY);
        }
        for (tuiX = 70; tuiX < 1220; tuiX += 190) {
            line(tuiX, 120, tuiX, 690);
        }
       // ImgSprite.addImage(tuitionImg);
    }

    if (gameState === 11) {//cocurricular
        background(248, 248, 0);
        var coX = 240, coY = 160;
        for (coY = 160; coY < 710; coY += 60) {
            line(240, coY, 1240, coY);
        }
        for (coX = 240; coX < 1240; coX += 199) {
            line(coX, 160, coX, 710);
        }
       // ImgSprite.addImage(cocurricularImg);
    }

    if (gameState === 12) {
        background(0, 0, 248);
        //ImgSprite.addImage(remindImg);
        for(reY=200;reY<1200;reY+=100){
            line(200,reY,1200,reY);
        }
        line(200,200,200,800);
        line(1200,200,1200,800)
    }


    
drawSprites();
}
//photoscissors.com