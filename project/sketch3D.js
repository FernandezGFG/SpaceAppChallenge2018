
var img;
var angleX;
var angleY;
var r = 200;   // earth radium

function preload(){
  loadEarthquake();
  loadWildfire();
  loadMeteorite();
  loadSatellites();
  img = loadImage("assets/earth.jpg");
  console.log(eq);
}

var canvas;

var b_fire;
var b_satellite;
var b_meteorite;
var b_earthquake;
var b_clean;


var mode_fire;
var mode_satellite;
var mode_meteorite;
var mode_earthquake;
var mode_clean;


function setup(){

    b_satellite = select("#satellite");
    b_satellite.mousePressed(mode_satellite);
    flag_satellite = 0;
    
    b_meteorite = select("#meteorite");
    b_meteorite.mousePressed(mode_meteorite);
    flag_meteorite = 0;
    
    b_earthquake = select("#earthquake");
    b_earthquake.mousePressed(mode_earthquake);
    flag_earthquake = 0;
    
    b_fire = select("#fire");
    b_fire.mousePressed(mode_fire);
    flag_fire = 0;

    b_clean = select("#clean");
    b_clean.mousePressed(mode_clean);
    flag_clean = 0;

    
    canvas = createCanvas(710, 600, WEBGL);
    canvas.style('z-index', '-1');
    angleX = 0;
    angleY = 0;
}

function draw(){
    
    var col = color(153, 51, 0);
    background(0);
    ambientLight(200);
    lat = -20;
    lon = 0;
    rotateX(angleX);
    rotateY(angleY);
 
    noStroke();


  push();
      fill(col);
      translate(0,0,0);
      texture(img);
      sphere(r);
  pop();
    if (flag_earthquake){
	displayEarthquake3D();
    }
    if (flag_fire){
	displayWildfire3D();
    }
    if (flag_meteorite){
	displayMeteorite3D();
    }
    if (flag_satellite){
	displaySatellite3D();
    }
}

function mouseDragged(){
    angleX = -(mouseY - width/2)*0.01;
    angleY = (mouseX - height/2)*0.01;
}


var flag_fire;
function mode_fire(){
    if (flag_fire){
	flag_fire = 0;
    } else {
	flag_fire = 1;
    }
}

var flag_earthquake;
function mode_earthquake(){
    if (flag_earthquake){
	flag_earthquake = 0;
    } else {
	flag_earthquake = 1;
    }
}

var flag_satellite;
function mode_satellite(){
    if (flag_satellite){
	flag_satellite = 0;
    } else {
	flag_satellite = 1;
    }
}

var flag_meteorite;
function mode_meteorite(){
    if (flag_meteorite){
	flag_meteorite = 0;
    } else {
	flag_meteorite = 1;
    }
}

var flag_clean;
function mode_clean(){
    flag_fire = 0;
    flag_earthquake = 0;
    flag_satellite = 0;
    flag_meteorite = 0;
}

