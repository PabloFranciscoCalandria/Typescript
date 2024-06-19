"use strict";
console.log("hola mundo111");
//ACA PODEMOS VER UN EJEMPLO DE LOS TIPADOS 
let estudiasteJavascript = true;
if (estudiasteJavascript) {
    console.log("puedes eguir viendo este curso");
}
else {
    console.log("primero tenes que ver el curso de javascript");
}
let interMiami = 11;
let fcDallas = 11;
let juegaMessi = true;
let messi = 1;
//Si no devuelve nada se pone :void
function jugar(equipo1, equipo2, jugadorJuega) {
    let motivo = '';
    if (juegaMessi) {
        motivo = ' porque juega Messi';
        equipo1 += messi;
    }
    if (equipo1 > equipo2)
        console.log(`gana InterMiami${motivo}`);
    if (equipo1 < equipo2)
        console.log("gana fcDallas");
    if (equipo1 == equipo2)
        console.log("empatan");
}
jugar(interMiami, fcDallas, juegaMessi);
//disney infiere que es de tipo any (cualquier tipo)
// En typescript no es recomendable usar tipo any
let disney;
disney = 'Star Wars';
console.log(disney);
disney = 15;
console.log(disney);
disney = true;
console.log(disney);
// Arrays
// Asi estaria mal definido, ya que si trabajamos con typescript hay que tipar
let arreglo = [1, 2, 3, 4, 5, 6];
let arreglo2 = ['HTML', 'css', '3s'];
let arregloTipado = [1, 2, 3, 4, 5, 6];
let arregloTpadoString = ['a', 'b', 'c'];
// Objetos
// Los objetos tienen un tipado interno, typescript sabe el tipado del objeto
// Si nos paramos encima del objeto programador, podemos ver como se da cuenta del tipo de cada atributo
let programador = {
    nombre: "Braian",
    lenguajes: ['HTML', 'React', 'PHP'],
    edad: 25
};
let jugador = {
    nombre: 'Agustin',
    habilidades: ['goleador', 'falso 9', 'regate'],
    lesionado: false
};
let juego = {
    nombre: 'God of War',
    niveles: ['nieve', 'lava', 'tierra'],
    finalizado: false
};
function nombreJuego(juego) {
    console.log(`Este juego es ${juego.nombre}`);
}
nombreJuego(juego);
// Clases
class Pelicula {
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    proyectarEnCine() {
        console.log(`${this.nombre}`);
    }
}
const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Goslling']);
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr']);
pelicula.proyectarEnCine();
console.log(pelicula2);
