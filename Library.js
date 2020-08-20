
class Library{
    constructor(){
    this.libText=createElement("h2");
    this.libLabel1=createElement("h2");
    this.libLabel2=createElement("h2");
    this.libLabel3=createElement("h2");
    this.libLabel4=createElement("h2");
    }

    display(){
    
    this.libText.position(160,140);  
    this.libText.html("*  LIBRARY  *"+"<br/>"+"Here you can make a list of the books you have borrowed from the library/friend/teacher, their date of issue & return.") 
    
   
    this.libLabel1.position(260,230);
    this.libLabel1.html("Name of the book");

   
    this.libLabel2.position(510,230);
    this.libLabel2.html("Source of the book");

    
    this.libLabel3.position(760,230);
    this.libLabel3.html("Date of issue");

    
    this.libLabel4.position(1010,230);
    this.libLabel4.html("Date of return");

 

  

    // book1=createInput("");
     //book1.position(260,350);
    
    }

}