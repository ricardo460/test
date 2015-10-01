

       

        var inicial = function (){
        var stats = stats();
        var container = document.getElementById("container");
        // creamos una scene, que contendrá todos nuestros elementos, como objetos, cámaras y luces.
        var scene = new THREE.Scene();

        // creamos una camera, que define desde donde vamos a mirar.
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // creamos un render y configuramos el tamaño
        var renderer = new THREE.WebGLRenderer();

        renderer.setClearColorHex(0xffffff);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;
        var axes = new THREE.AxisHelper( 20 );
        scene.add(axes);
        
        var planeGeometry = new THREE.PlaneGeometry(60,20,20);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
        var plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.receiveShadow = true;
        plane.position.X=-15;
        plane.position.Y=0;
        plane.position.Z=10;

        scene.add(plane);

    

        var cubeGeometry    = new THREE.CubeGeometry( 5, 5, 5);
        var cubeMaterial = new THREE.MeshNormalMaterial();;
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        //cube.castShadow =true;

        // posicionamos el cubo
        cube.position.set(-4,8,0);
        scene.add(cube);

        var sphereGeometry = new THREE.SphereGeometry(4,20,20);
        var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff });
        var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
    
        // posicionamos la esfera
        sphere.position.x=50;
        sphere.position.y=0;
        sphere.position.z=0;
    
    
        // añadimos la esfera a la escena
        scene.add(sphere);
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40,60,-10);
    scene.add(spotLight);
        // posiciona y apunta la cámara al centro de la escena
        camera.position.set(-20,10,50);
        camera.lookAt(scene.position);

        // añadir la salida de la renderización al elemento html
        container.appendChild(renderer.domElement);

        // renderizar la escena
        render();
        var step=0;
        function render(){stats.update();
        cube.rotation.x +=0.08;
        /*cube.rotation.y +=0.04;
        cube.rotation.z +=0.04;*/
        step+=0.04;
        sphere.position.x = 20 +(10*(Math.cos(step)));
        sphere.position.y = 2 + (10*Math.abs(Math.sin(step)));
        
    requestAnimationFrame(render);
    renderer.render(scene, camera);}

    function stats(){
    var stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left    = '0px';
    stats.domElement.style.top   = '0px';
    var sta = document.getElementById("stats-salida");
    sta.appendChild(stats.domElement);
    return stats;}
    

}