var cnv;

function centerCanvas(){
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup(){
var margin2 = 3;
cnv = createCanvas(793,612);
var x = (windowWidth - width) / 2;
var y = (windowHeight - height) / 2;
cnv.position(x, y);
background(255,255,255);

var array = [0,204,408,612];
var array2 = [180,384,588,792];
var array3 = [121,141,161,181,201];
var array4 = [427,447,467,487,507];
var array43 = [325,345,365,385,405];
var array432 = [506,526,546,566,586];

//row 1
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array3.length; j++){
      fill(255,255,255);
      rect(array[i],0,180,101);
      line(array[i],array3[j]+margin2,array2[i],array3[j]+margin2);
    }
  }
// //row 2
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array4.length; j++){
      fill(255,255,255);
      rect(array[i],204,180,101);
      line(array[i],array43[j],array2[i],array43[j]);
    }
  }
//   //row 3
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array4.length; j++){
        fill(255,255,255);
        rect(array[i],405,180,101);
        line(array[i],array432[j],array2[i],array432[j]);
      }
    }

} // end setup

function windowResized() {
  centerCanvas();
} // end windowResize
