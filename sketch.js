
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   //Utilize o código 'createImg' para criar um botão que terá a imagem 'up.png'
  btn2 = ???('up.png');
  //Utilize o código 'position' para definir a posição do botão
  btn2.???(350,30);
  //Utilize o código 'size' para definir o tamanho do botao
  btn2.???(50,50);
  //Utilize o código 'mouseClicked' para que...
  //Quando o botão for clicado, aconteca a função 'vForce'
  btn2.???(vForce);

  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  //Utilize o código ' World.add' para adicionar o chão ao mundo
  ???(world,ground1);

  //Utilize o código 'Bodies.circle' para criar um corpo em formato circular
  ball = ???(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  //Utilize o código 'Matter.Body.rotate' para adicionar uma rotação ao 'ground1'
  ???(ground1,angle)
  push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  //Defina o ângulo para 0.1, esse será o ângulo da rotação
  angle +=???;

 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);

  
  
}

function vForce()
{
  //Utilize o código 'Matter.Body.applyForce' para aplicar uma força na bola
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  
