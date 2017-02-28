var pic = document.getElementById("vimage");
var clr = document.getElementById("clear");

var lastX = -1;
var lastY;

var shape = function(event) {
  var c = document.createElementNS("http://www.w3.org/2000/svg",
 "circle");
  c.setAttribute( "cx", event.clientX );
  c.setAttribute( "cy", event.clientY );
  c.setAttribute( "r", "50" );
  c.setAttribute( "fill", "red");
  c.setAttribute( "stroke", "black" );
  pic.appendChild( c );
  line(event);
};

var line = function(event) {
  if (lastX < 0){
    lastX = event.clientX;
    lastY = event.clientY;
  }
  else{
    drawline(lastX, lastY, event);
    lastX = event.clientX;
    lastY = event.clientY;
  }
};

var drawline = function( x, y, event ) {
  var c = document.createElementNS("http://www.w3.org/2000/svg",
 "line");
  c.setAttribute( "x1", x );
  c.setAttribute( "y1", y );
  c.setAttribute( "x2", event.clientX );
  c.setAttribute( "y2", event.clientY );
  c.setAttribute( "stroke", "black" );
  pic.appendChild( c );
};

var clear = function() {
  var c = document.createElementNS("http://www.w3.org/2000/svg",
 "rect");
  c.setAttribute( "x", 0 );
  c.setAttribute( "y", 0 );
  c.setAttribute( "width", 500 );
  c.setAttribute( "height", 500 );
  c.setAttribute( "fill", "white" );
  pic.appendChild( c );
  lastX = -1;
};

clr.addEventListener("mousedown", clear);
pic.addEventListener("mousedown", shape);

//html tags
//<circle cx="250" cy="250" r="75" fill="yellow"
//stroke="black"/>
//   <rect x="100" y="100" width="300" height="75"
//fill="blue"/>