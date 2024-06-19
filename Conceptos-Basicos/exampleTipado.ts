console.log("hola mundo111");

//ACA PODEMOS VER UN EJEMPLO DE LOS TIPADOS 

let estudiasteJavascript: boolean = true

if(estudiasteJavascript){
    console.log("puedes eguir viendo este curso");
}else{
    console.log("primero tenes que ver el curso de javascript");
}

let interMiami: number | null | undefined = 11;
let fcDallas: number = 11;
let juegaMessi: boolean = true;
let messi: number = 1;

//Si no devuelve nada se pone :void
function jugar(equipo1: number, equipo2: number, jugadorJuega: boolean): void{
    let motivo: string = ''
    if(juegaMessi){
        motivo = ' porque juega Messi'
        equipo1 += messi;
    } 
    if(equipo1 > equipo2) console.log(`gana InterMiami${motivo}`);
    if(equipo1 < equipo2) console.log("gana fcDallas");
    if(equipo1 == equipo2) console.log("empatan");
}

jugar(interMiami, fcDallas, juegaMessi)

//disney infiere que es de tipo any (cualquier tipo)
// En typescript no es recomendable usar tipo any
let disney: any;

disney = 'Star Wars';
console.log(disney);
disney = 15;
console.log(disney);
disney = true;
console.log(disney);

// Arrays

// Asi estaria mal definido, ya que si trabajamos con typescript hay que tipar
let arreglo = [1,2,3,4,5,6];

let arreglo2 = ['HTML', 'css', '3s'];


let arregloTipado: number[] = [1,2,3,4,5,6];
let arregloTpadoString: string[] = ['a', 'b', 'c']


// Objetos
// Los objetos tienen un tipado interno, typescript sabe el tipado del objeto
// Si nos paramos encima del objeto programador, podemos ver como se da cuenta del tipo de cada atributo
let programador = {
    nombre: "Braian",
    lenguajes: ['HTML', 'React', 'PHP'],
    edad: 25
}


// Type

type Jugador = {
    nombre: string,
    habilidades: string[],
    lesionado: boolean | null,
    equipo?: string // ? significa que es opcional
}

let jugador: Jugador = {
    nombre: 'Agustin',
    habilidades: ['goleador', 'falso 9', 'regate'],
    lesionado: false
}

// Interface

interface Juego {
    nombre: string,
    niveles: string[],
    finalizado: boolean | null
}

let juego: Juego = {
    nombre: 'God of War',
    niveles: ['nieve', 'lava', 'tierra'],
    finalizado: false
}

function nombreJuego(juego: Juego){
    console.log(`Este juego es ${juego.nombre}`);
}

nombreJuego(juego);

// Clases

class Pelicula{
    nombre?: string; // ? para que sepa que no lo inicializaste en el comienzo
    protagonistas?: string[];
    actores?: string[];
    
    constructor(nombre: string, protagonistas: string[], actores: string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }

    proyectarEnCine(){
        console.log(`${this.nombre}`);
    }
}

const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Goslling'])
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr'])

pelicula.proyectarEnCine()
console.log(pelicula2);


// Encapsulamiento y genericos

class Sorteo<T> {  //Sorteo es un generico de T

    private ticket?: T

    constructor(
        private nombre: string
    ){}

    //Encapsulamientos get & set
    setTicket(ticket: T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket
    }

    public sortear(): string{
        return `Para ${this.nombre}`
    }
}

let sorteo = new Sorteo<number>('Emanuel Code')
sorteo.setTicket(7)
console.log(sorteo.sortear());
