var cnv;

function centerCanvas(){
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup(){
cnv = createCanvas(793,612);
var x = (windowWidth - width) / 2;
var y = (windowHeight - height) / 2;
cnv.position(x, y);
background(255,255,255);

fill(255,255,255);
rect(0,33,250,140);
line(0,193,250,193);
line(0,213,250,213);
line(0,233,250,233);
line(0,253,250,253);
line(0,273,250,273);

fill(255,255,255);
rect(271,33,250,140);
line(271,193,521,193);
line(271,213,521,213);
line(271,233,521,233);
line(271,253,521,253);
line(271,273,521,273);

fill(255,255,255);
rect(542,33,250,140);
line(542,193,792,193);
line(542,213,792,213);
line(542,233,792,233);
line(542,253,792,253);
line(542,273,792,273);

fill(255,255,255);
rect(0,339,250,140);
line(0,499,250,499);
line(0,519,250,519);
line(0,539,250,539);
line(0,559,250,559);
line(0,579,250,579);

fill(255,255,255);
rect(271,339,250,140);
line(271,499,521,499);
line(271,519,521,519);
line(271,539,521,539);
line(271,559,521,559);
line(271,579,521,579);

fill(255,255,255);
rect(542,339,250,140);
line(542,499,792,499);
line(542,519,792,519);
line(542,539,792,539);
line(542,559,792,559);
line(542,579,792,579);

fill(255,255,255);
rect(542,33,250,140);
line(542,193,792,193);
line(542,213,792,213);
line(542,233,792,233);
line(542,253,792,253);
line(542,273,792,273);

} // end setup

function windowResized() {
  centerCanvas();
} // end windowResize
