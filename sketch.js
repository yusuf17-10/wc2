var drawing=[];
var beginShape;
var Canvas;
var database;
var currentPath=[];

function setup() {
    Canvas=createCanvas(400, 400);
    database=firebase.database();
    //Canvas.mousePressed(startPath);
 // Canvas.mouseReleased(endPath);
    background(0);
  /*var saveButton = select ('#saveButton');
  saveButton.mousePressed(saveDrawing);*/

  /*var clearButton = select ('#saveButton');
  clearButton.mousePressed(clearDrawing);*/
}

/*function startPath(){
  isDrawing=true;
  currentPath=[];
  drawing.push(currentPath);
  

}*/

/*function endPath(){
  isDrawing=false;
}*/


function draw() {
  readData();
  beginShape();
  stroke("white");
  strokeWeight(4);
  noFill();
  for(var i = 0;i<db_drawing.length;i++){
      vertex(db_drawing[i].x,db_drawing[i].y);
      endShape();
  }
  
 
      

}

var db_drawing=[];

function mouseDragged(){
    var point = {
      x:mouseX,
      Y:mouseY
    }
    drawing.push(point);
   var drawingref = database.ref("drawing");
   drawingref.set({
     d:drawing

   });
}

function readData(){
    database.ref("drawing").on("value",(data)=>{
      db_drawing=data.val().d;
    });
}

function saveDrawing(){
  var ref = database.ref('drawing');
  var data={
    name:"yusuf",
    drawing:drawing
  }
  ref.push(data);
}

function clearDrawing(){
  db_drawing=[];
  var adaref = database.ref("drawing");
  adaref.remove();
}
