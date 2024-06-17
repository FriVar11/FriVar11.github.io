/* Archivo de JS que contiene un script (conjunto de lineas de código que normalmente buscan realizar alguna acción en específico) */

const edad=17;

/* 
Entradas y salidas ccon JS

Salida:alert
alert("Hola Mundo")
alert(edad)
Entrada:prom

Salida:console.log
*/

/* Variables
Constantes:const
Variables que pueden cambiar:let

Tipos de variables
Números
Palabras
Boolean
Función
Objeto
Arreglo de elementos

*/

/* const PI=3.1416;

let radio=0;

radio=prompt('¿que radio tiene tu círculo?');

console.log(PI);
console.log(radio);

console.log(PI*radio); */

console.log(['Frida', 'Yunuen', 'Ali'].sort())
 
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: false,
    delay:50,
    deleteSpeed:50,
});

typewriter
    .pauseFor(7000)
    .typeString('Hello World!')
    .pauseFor(500)
    .deleteAll()
    .typeString('Soy Sofi Vargas')
    .pauseFor(500)
    .deleteChars(11)
    .typeString('Desarrolladora Frontend JR')
    .pauseFor(500)
    .start();



    let description = document.getElementById('description');

let typewriterDescription = new Typewriter(description, {
    loop: false,
    delay:10,
    deleteSpeed:5,
});

typewriterDescription
    .typeString('Combino mi mente creativa con mis habilidades técnicas para dar vida a ideas innovadoras. Fuera de la pantalla, soy amante de los caballos, la adrenalina del patinaje y el aprendizaje continuo.')
    .pauseFor(100)
    .deleteAll()
    .typeString('Me encanta ayudar a los demás y estoy segura de que puedo ser un gran aporte a tu equipo.')
    .pauseFor(500)
    .start();

 
    // init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
	duration: 100, // the scene should last for a scroll distance of 100px
	offset: 50, // start this scene after scrolling for 50px
})
	.setPin('#my-sticky-element') // pins the element for the the scene's duration
	.addTo(controller); // assign the scene to the controller
        
 