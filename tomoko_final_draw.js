function setup() {
  

}


function draw() {
  createCanvas(1000, 1000);
  background('#ff8000');

  background('#ffcc00');
  textSize(700);
  fill('yellow');
  text('Programing', mouseX, mouseY);
  fill('cornflowerblue');
  text('?????????', mouseY, mouseX);
  fill('tomato');
  text('Tomoko', 100, 70);
  fill('limegreen');
  text('Ceramics', 100, 70);
 
   strokeWeight(4);
  stroke(51);

  fill('mouseY,0,mouseX');
    ellipse(449,485, 316, 452);
    
       fill('#FEE5B8');
    ellipse(mouseX, mouseY, mouseX, mouseY);
       strokeWeight(4);
       
  stroke(51);
 fill('#Ff6666');
     ellipse(mouseX, mouseY, mouseX, mouseY);
    
        stroke(51);
 fill('#99ffff');
  stroke(51);
    rect(mouseX,mouseY, mouseX, mouseY);
         stroke(51);
 fill('#99ffff');
  stroke(51);
    rect(mouseX,mouseY, mouseY, mouseX);
 
 
 
    stroke(51);
 fill('#ccccFF');
     ellipse(mouseX, mouseY, mouseY, mouseX);
        strokeWeight(4); 
  stroke(51);
    fill('#ccccFF');
    rect(mouseX,mouseY, mouseY, mouseX);
    
     fill('#663300'); 
  // Start drawing the shape.
  
  
  beginShape();

  // Add the first control point and draw a segment to it.
  curveVertex(430, 259);
  curveVertex(520, 254);

  // Add the anchor points.
  curveVertex(647, 404);
  curveVertex(647, 549);

  // Add the second control point and draw a segment to it.
  curveVertex(595, 661);
  curveVertex(430, 723);
  
  curveVertex(467, 688);

  curveVertex(510, 603);
  curveVertex(506, 413);

  curveVertex(506, 344);
  curveVertex(493, 301);

  // Stop drawing the shape.
  endShape();
  
  
    fill(mouseX/3,20,mouseY);
  ellipse(mouseY,mouseX,mouseX,20);
  
  
     fill(30,mouseY,220);
  square(mouseY,mouseX*2,mouseX/4);
  
      fill(10,100,mouseY);
   triangle(mouseX/5,mouseX/2,10,mouseY/7,mouseX,30);
   
     fill(mouseY,50,mouseX);
  triangle(mouseY,mouseX,20,mouseX,20,20);
           
           // Style the line.
           
  // Six-digit hex RGB notation.
  stroke('#222222');
  strokeWeight(5);

  line(308, 415, 364, 412);
    line(412, 413, 487, 413);
           
   
    // Stop drawing the shape.
  endShape(CLOSE);

}
