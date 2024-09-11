
///////////////////////
let video;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //para verlo offline en el visual code, usar la siguiente linea:
  //video = createVideo(['data/video.mp4']);  // Asegúrate de que el archivo de video está en la misma carpeta o proporciona la URL correcta
  //cuando lo hayan subido la linea de abajo reemplazar el dominio por el de ustedes por ejmplo https://poppylipops.github.io/dragline/data/video.mp4
  video = createVideo(['https://tarcisiopirotta.github.io/dragline/data/video.mp4']);  // Asegúrate de que el archivo de video está en la misma carpeta o proporciona la URL correcta
  video.hide(); // Oculta el elemento de video HTML
}

function draw() {
  background(0);

  fill(255);
  textAlign(CENTER);
  text('haga click y mueva el mouse', windowWidth/2, windowHeight/2);
  let mouseSpeed = abs((mouseX - pmouseX)+(mouseY - pmouseY));//hago una suma de la velocidad del mouse en ambos ejes
  if (mouseSpeed>1){//si el mouse se mueve defino la velocidad de reproduccion en 1
    video.speed(1);
  }else{//sino velocidad en 0, o sea el video se detiene
    video.speed(0);
  }
  // Redimensionar el video al tamaño de la ventana
  if (video) {
    image(video, 0, 0, width, height);
  }
}

function mousePressed() {

    video.loop();  // Reproducir el video en bucle // comentar para sacarlo
    //fullscreen(true);  // Hacer pantalla completa
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
