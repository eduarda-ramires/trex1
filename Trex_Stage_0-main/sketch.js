
var trex, trexAnimacao;
var chao, chaoAnimacao;
var nuvemAnimacao;
var obstaculo1Animacao, obstaculo2Animacao;
function preload(){
  //crie uma animação do trex correndo
  trexAnimacao = loadAnimation("trex1.png","trex3.png","trex4.png");
  chaoAnimacao = loadImage("ground2.png")
  nuvemAnimacao = loadImage("cloud.png")
  obstaculo1Animacao = loadImage("obstacle1.png");
  obstaculo2Animacao = loadImage("obstacle2.png");
}

function setup(){
  createCanvas(600,200)
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("TrexCorrendo", trexAnimacao);
  trex.scale = 0.5;
  //criando chao do jogo
  chao = createSprite(200,180,400,20);
  chao.addImage("chao",chaoAnimacao);
  chao.velocityX = -4;
  chao.setCollider("rectangle", 0, 0, 2377, 5);
}

function draw(){
  background("white");
  drawSprites();
  if(keyDown("space") && trex.y > 150){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(chao)
  if(chao.x < 0){
    chao.x = 1188
  }
  
  if(frameCount%60==0){
    novaNuvem();
    obstaculo();
  }
}

function novaNuvem(){
  var nuvem = createSprite(600,100,40,10);
  nuvem.addImage(nuvemAnimacao)
  nuvem.scale = 0.4;
  nuvem.velocityX = -3
  nuvem.y = Math.round(random(20,300))
  nuvem.lifetime = 200;
}

function obstaculo(){
  var cactus = createSprite(600,170,40,10);
  var numero = Math.round(random(1,6))
  switch(numero){
    case 1:
      cactus.addImage(obstaculo1Animacao);
    break;
    case 2:
      cactus.addImage(obstaculo2Animacao);
    break;

  }
  console.log(numero)
  cactus.scale = 0.6;
  cactus.velocityX = -3
  cactus.lifetime = 200;
}
