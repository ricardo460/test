

    var scene = null, camera = null, renderer = null, cubo = null;


    var inicial = function (){
        
        elementos();
        crear_guias();
        //crear_cubo();
        dibujar_lineas();
        render_escena();

       }

     function crear_cubo(){

     var cubeGeometry = new THREE.CubeGeometry(2.5,2.5,2.5);
     var cubeTextura = new THREE.ImageUtils.loadTexture("../imagenes/crate.gif");
     var cubeMaterial = new THREE.MeshBasicMaterial({ map:cubeTextura , side:THREE.DoubleSide });
     cubo = new THREE.Mesh(cubeGeometry, cubeMaterial);
     cubo.position.set(0,0,-7.0);
     scene.add(cubo);
     
    }

    function dibujar_lineas(){

    var material = new THREE.LineBasicMaterial({color: 0x3A0202});
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(10, 0, 0));
   // geometry.vertices.push(new THREE.Vector3(0, 10, 0));
    //geometry.vertices.push(new THREE.Vector3(10, 0, 0));

    var line = new THREE.Line(geometry, material);
    scene.add(line);

    }

    function crear_guias(){

    var axes = new THREE.AxisHelper( 20 );
    scene.add(axes);
         
    }

   function elementos(){
    
    var container = document.getElementById("container");
        // creamos una scene, que contendrá todos nuestros elementos, como objetos, cámaras y luces.
    scene = new THREE.Scene();

        // creamos una camera, que define desde donde vamos a mirar.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // creamos un render y configuramos el tamaño
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColorHex(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    camera.position.set(10,10,10);
    camera.lookAt(scene.position);

    container.appendChild(renderer.domElement);

    }
    
    function render_escena(){

    renderer.render(scene, camera);
    
    }

   

