/* Datos Númericos */

let edadNumero = 25;
console.log(edadNumero);
console.log(typeof(edadNumero));

let decimal = 2.5;
console.log(decimal);
console.log(typeof(decimal));


/** Tipo de dato string */

let nombre = "Alejandra";
let apellido = "Rodríguez";

console.log(nombre + " " + apellido);
console.log(typeof(nombre));


/** Tipo de dato Booleano */

let x = false;

console.log(x);
console.log(typeof(x));

/** Undefined */

let saludo;
console.log(saludo);
console.log(typeof(saludo));


/** NaN: tipo de dato no númerico, ocurre un error al intentar generar una operación no vállida */

let suma = 4;
console.log(4 * "Yaz");


/** Result tipo Infinity */

console.log(4 / 0);


/**  TIPO DE OBJETOS  */

const name = "Alejandra Rodríguez";
const edad = 30;

// Un objeto esta compuesto por propiedades (llave, valor)
const persona= {
    name: name,
    edad: edad,
    barrio: "Engativa Centro",
    hobbies: ["Yoga", "Ajedrez", "Programación"],
    padre: {
        name: "Ismael Rodríguez",
        edad: 56,
        barrio: "Engativa Centro",
        hobbies: ["Ciclismo", "Ajedrez"]
    }
}

/* acceder a las propiedades */

// obtener barrio
console.log("Barrio: " + persona.barrio);

// obtener hobbie de persona
console.log("Hobbie 1: " + persona.hobbies[0]);

// obtener hobbie de padre
console.log("Hobbie 1 padre: " + persona.padre.hobbies[0]);

/** Dar formato string al objeto */

const jsonPersona = JSON.stringify(persona);
console.log(jsonPersona);


/** Arrays,  es un conjunto ordenado de elementos, de cualquier tipo. Se organizan  por medio posiciones... Siempre inicia desde el indice 0 hasta x */

let numero= [2, 3.4, 5, 7];
let palabras= ["Maria", "Luisa", "Jose Ángel"];
let booleanos= [true, false, true];


/** Multiples datos */

let sancocho= ["pollo", 3, "yuca", 1, true, 3.4];
console.log(sancocho);


/** METODOS Y PROPIEDADES QUE ME PERMITEN MANIPULAR LOS ARRAYS */

let videoJuegos= ["Spiderman","MarioBross", "Contra", "God of war", "Pacman", "Ghost and gobblins"];


// * lenght: Me permite saber cuantos elementos tengo en mi array. Me retorna un number.
// * Me permite saber la longitud de un arreglo

document.write("Tienes " + videoJuegos.length + " video juegos <br>");


// * push: Agregar un elemento nuevo en la última posición

videoJuegos.push("Metal Gear", "Metal Slug", "World of tanks");

document.write("Ahora Tienes " + videoJuegos.length + " video juegos: " + videoJuegos + "<br><br>");


// * splice: Agregar nuevos elementos en una posición especifica o eliminarlos
// * Primer parametro: es la posición donde se desea que se inserten los elementos nuevos
// * Segundo parametro: es la cantidad de elementos que se desea se eliminen a partir de la posición especificada

videoJuegos.splice(2, 0, "Mario Kart", "Zelda");
document.write(videoJuegos + "<br><br>");

videoJuegos.splice(2, 3, "Mortal Combat", "Zelda");
document.write(videoJuegos + "<br><br>");


// * pop: Eliminar el último elemento de un array

videoJuegos.pop();
document.write(videoJuegos + "<br><br>");


// * delete: elimina cualquier elemento especificado de un array, dejando en la posición correspondiente un espacio vacio.
// * No elimina completamente el elemento

delete videoJuegos[4];
document.write(videoJuegos + "<br><br>");


// * slice: permite obtener un rango de posicines de un array

let obtener= videoJuegos.slice(5, videoJuegos.length);
document.write("<b>Slice</b>: " + obtener + "<br><br>");


// * Concat: concatenar, enlazar, unidos dos arreglos y conformar uno nuevo

let consolas= ["Xbox", "PlayStation", "Nintendo", "Sega", "Atari"];

/* los maneja por separados, como arreglos independientes */
document.write("<b>Concatenar con +</b>: " + videoJuegos + "" + consolas + "<br><br>")

/* Aquí los une como uno solo */
let grupoRetro= videoJuegos.concat(consolas);
document.write("<b>Concatenar con funcion Concat</b>: " + grupoRetro + "<br><br>")


// * Join-Separar un elemento de otro, por medio de cualquier simbolo

document.write("<b>Concatenar con Join</b>: " + grupoRetro.join("! ") + "<br><br>")


// * Sort: Organizar alfabeticamente

document.write("<b>Sort</b>: " + grupoRetro.sort() + "<br><br>");



/************************************************************************************************ */


document.write("<hr><br>")


/** CICLO FOR: Se ejecuta hasta que la condición se cumpla
 * Estructura: 
 * for(let i= 0; i<= 10; i++){
 *      document.write(i);
 * }
*/

// * recorrer un array con un ciclo for: bloque de código que ejecuta instrucciones hasta que se cumpla una condición

let anime= ["Death Note", "Zishuma Zama", "Ramna 1/2"];

document.write("<b>Utilizando FOR</b> <br><br>");
for(let i= 0; i < anime.length; i++){
    document.write(anime[i] + "<br><br>");
}


/** CICLO WHILE: se ejecuta indefinidamente mientras se cumpla una condición */

let position = 0;

document.write("<b>Utilizando WHILE</b> <br><br>");
while(position < anime.length ){
    document.write(anime[position] + "<br><br>");
    position++;
}


/** CICLO DO WHILE */

document.write("<b>Utilizando DO WHILE</b> <br><br>");

let pass= prompt("Ingrese su contraseña: bitBictia");
let bd= "bitBictia";

if(pass== bd){
    alert("Bienvenido");
    document.write("<h2 style='color: red'>Bienvenido!!</h2><br><br>")
}else{
    document.write("<h2 style='color: red'>Bienvenido!!</h2><br><br>")
    do{
        pass= prompt("Contraseña incorrecta, vuelva a ingresarla: bitBictia");
    }while (pass !== bd);
}









