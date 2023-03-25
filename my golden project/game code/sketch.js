var gameState=0
var playButton, thief, jailBars, boss;
var playButtonImg, bgScene, level0_bg, thief1_img, jailBars_img, boss_img;
var level=0;

function preload() {
  playButtonImg= loadImage("assets/play_button.png")
  level0_bg= loadImage("assets/jailBg.png")
  //level0.1_bg= loadImage("assets/jailBg2.png")
  thief1_img= loadImage("assets/story_thief.png")
  jailBars_img= loadImage("assets/jailBars.png")
  boss_img= loadImage("assets/boss.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
  playButton=createSprite(width/2,height/2+100)
  playButton.addImage(playButtonImg)
  playButton.scale=0.1

  thief=createSprite(width/2-100,height-350)
  thief.addImage(thief1_img)
  thief.scale=0.08
  thief.visible=false
  bgScene="black"

  jailBars=createSprite(width/2,height-400)
  jailBars.addImage(jailBars_img)
  jailBars.scale=1.4
  jailBars.visible=false
  bgScene="black"

  boss=createSprite(0,height-200)
  boss.addImage(boss_img)
  boss.scale=1
  boss.visible=false

}

function draw() {
  background(bgScene);
  if (gameState==0){
    textSize(100)
    strokeWeight(4)
    stroke("red")
    fill(255)
    text("Catch Me",width/2-210,height/2-150)

    textSize(50)
    fill("red")
    text("If You Can...",width/2-110,height/2-80)

    if(mousePressedOver(playButton)){
      gameState=1
    }

    if (gameState==1){
      if(level==0){
        bgScene=level0_bg
        thief.visible=true
        jailBars.visible=true
        boss.visible=true
      
        textSize(50)
        fill("black")
        text("If you help me I will set you free...",0,height-200)
        
        

        if(boss.x<=width/2-100){
          boss.velocityX=3
        }
        else{
          boss.velocityX=0
          
        }

      
      }
      playButton.destroy()

      textSize(50)
      fill("black")
      text("If you help me I will set you free...",0,height-200)
    
    }
  }
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
