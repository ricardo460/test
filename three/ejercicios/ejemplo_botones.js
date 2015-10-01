

    var scene = null, camera = null, renderer = null, stats = null, cubo = null;

    var TECLA = { AVPAG:false, REPAG:false, ARRIBA:false, ABAJO:false, IZQUIERDA:false, DERECHA:false, F:false };

    var inicial = function (){
        
        elementos();
        crear_guias();
        crear_stats();
        crear_cubo();
        render_escena();
        animar_escena();
        
       }

     function crear_cubo(){

     var cubeGeometry = new THREE.CubeGeometry(2.5,2.5,2.5);
     var cubeTextura = new THREE.ImageUtils.loadTexture("../imagenes/crate.gif");
     var cubeMaterial = new THREE.MeshBasicMaterial({ map:cubeTextura , side:THREE.DoubleSide });
     cubo = new THREE.Mesh(cubeGeometry, cubeMaterial);
     cubo.position.set(0,0,-7.0);
     cubo.velocidadY=0.005;
     cubo.velocidadX=0.005;
     scene.add(cubo);
     
    }

    function crear_guias(){

    var axes = new THREE.AxisHelper( 20 );
    scene.add(axes);
         
    }

    function crear_stats(){ 

    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left    = '0px';
    stats.domElement.style.top   = '0px';
    var sta = document.getElementById("stats-salida");
    sta.appendChild(stats.domElement);

    }

   function elementos(){
    
    var container = document.getElementById("container");
        // creamos una scene, que contendrá todos nuestros elementos, como objetos, cámaras y luces.
    scene = new THREE.Scene();

        // creamos una camera, que define desde donde vamos a mirar.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // creamos un render y configuramos el tamaño
    //renderer = new THREE.WebGLRenderer();
    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setClearColorHex(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    camera.position.set(0,0,30);
    camera.lookAt(scene.position);

    container.appendChild(renderer.domElement);

    document.onkeydown=teclaPulsada;
    document.onkeyup=teclaSoltada;
    }
    
    function render_escena(){

    renderer.render(scene, camera);
    
    }

    function teclaPulsada(e)
{
    switch (e.keyCode)
    {
        case 33: //Av página
            TECLA.AVPAG=true;
            break;
        case 34: // Re página
            TECLA.REPAG=true;
            break;
        case 37: // Izquierda
            TECLA.IZQUIERDA=true;
            break;
        case 39: // Derecha
            TECLA.DERECHA=true;
            break;
        case 38: // Arriba
            TECLA.ARRIBA=true;
            break;
        case 40: // Abajo
            TECLA.ABAJO=true;
            break;
    }

}
function teclaSoltada(e)
{
    switch (e.keyCode)
    {
        case 33: //Av página
            TECLA.AVPAG=false;
            break;
        case 34: // Re página
            TECLA.REPAG=false;
            break;
        case 37: // Izquierda
            TECLA.IZQUIERDA=false;
            break;
        case 39: // Derecha
            TECLA.DERECHA=false;
            break;
        case 38: // Arriba
            TECLA.ARRIBA=false;
            break;
        case 40: // Abajo
            TECLA.ABAJO=false;
            break;
        case 70: // F
            TECLA.F=true;
            break;
    }
}

   function animar_escena(){
    
    if ( stats != null ) stats.update();
    if ( TECLA.ARRIBA ) cubo.velocidadX-=0.05;
    if ( TECLA.ABAJO ) cubo.velocidadX+=0.05;
    if ( TECLA.IZQUIERDA ) cubo.velocidadY-=0.05;
    if ( TECLA.DERECHA ) cubo.velocidadY+=0.05;
    if ( TECLA.REPAG ) camera.position.z-=1;
    if ( TECLA.AVPAG ) camera.position.z+=1;
    if ( TECLA.F ) {

            cubo.velocidadX=0;cubo.velocidadY=0;

        }

    TECLA.F = false;
    cubo.rotation.x += cubo.velocidadX * 0.05;
    cubo.rotation.y += cubo.velocidadY * 0.05;
    render_escena();
         
  
  requestAnimationFrame(animar_escena);
}

