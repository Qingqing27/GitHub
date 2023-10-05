void setup(){
   size(800,800);
}

void draw(){
  background(0);
  for(int i=0; i<20; i++){
    noStroke();
    fill(12,225-0.5*i*frameCount%255,255);
    int size=1200-i*60;
    circle(400,400,size);
  }
}
