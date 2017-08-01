var cnv;

function centerCanvas(){
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup(){
  var margin = 52.5;
  cnv = createCanvas(793,612);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255,255,255);

  var array = [0,204,408,612];
  var array2 = [180,384,588,792];
  var array3 = [121,141,161,181,201];
  var array4 = [427,447,467,487,507];

  //row 1
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array3.length; j++){
        fill(255,255,255);
        rect(array[i],margin,180,101);
        line(array[i],array3[j]+margin,array2[i],array3[j]+margin);
      }
    }
  //row 2
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array4.length; j++){
        fill(255,255,255);
        rect(array[i],306+margin,180,101);
        line(array[i],array4[j]+margin,array2[i],array4[j]+margin);
      }
    }
} // end setup

function windowResized() {
  centerCanvas();
} // end windowResize
