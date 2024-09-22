
/*
// ----------------------- 1.Creacion de un Objeto Basico -----------------------------
const libro = {
    titulo: "Cazadores de Utopias imposibles",
    autor: "Gustavo Alfaro",
    añoDePublicacion: "2022"
}

console.log(libro)

// ------------------------------- 2. Anidacion de Objetos -------------------------------
const obj_direccion = {
    calle: "Calle Falsa 123",
    ciudad: "Concepcion del uruguay",
    pais: "Argentina"
}

const estudiante = {
    nombre: "Ian",
    edad: 22, 
    direccion : obj_direccion
}

console.log(estudiante)

// ----------------------------- 3. Metodos en Objetos -------------------------------------------

const Descripcion = function() {
    return(`${libro.titulo} fue escrito por ${libro.autor} en el año ${libro.añoDePublicacion} el tema principal del libro trata del camino de la seleccion ecuatorina a el mundial de FIFA 2022`);
}

console.log(Descripcion())


// --------------------- 4. Iteracion sobre Propiedades de un objeto ----------------------------------

const producto = {
    nombreprod: "Remera",
    marca: "Supreme",
    disponible: "Si",
    color: "Blanco",
    Talle: "Large",
    precio: 100.000
}

for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`)
}

// ------------------ 5. Actualizacion de propiedades -----------------------------

producto.precio = 150.000

console.log(producto)

// ---------------------- 6. Comprobacion de propiedades ------------------------

tienePropiedad = function(objeto, propiedad){
    return propiedad in objeto
}

//console.log(tienePropiedad(producto, "color"))

//------------------------ 7. Eliminacion de propiedades ------------------------

//Antes de eliminarlo
console.log(producto)

delete producto.disponible
// Despues de eliminarlo
console.log(producto)

//----------------------- 8. Combinar Objetos ---------------------------------

const persona1 = {
    name: "Martin",
    edad: 42
}

const persona2 = {
    apellido: "Palermo",
    trabajo: "mecanico"
}

const persona1y2 = Object.assign({},persona1, persona2)
console.log(persona1y2)

//---------------------------- 9. Copiar Objetos -----------------

const copiarEstudiante = JSON.parse(JSON.stringify(estudiante))

copiarEstudiante.nombre = "Pedro"

console.log(estudiante)
console.log(copiarEstudiante)

//------------------------- 10. Metodos Getter y Setter --------------------

const libro10 = {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    _añoDePublicacion: 1967, 

    get añoDePublicacion() {
        return this._añoDePublicacion;
    },

    set añoDePublicacion(nuevoAño) {
        if (typeof nuevoAño === 'number' && nuevoAño > 0) {
            this._añoDePublicacion = nuevoAño;
        } else {
        console.log('Por favor, introduce un año válido.')
    }
}
}
libro10.añoDePublicacion = 1970;

console.log('Año de publicación actualizado:', libro.añoDePublicacion);


//--------------------- EJERCICIOS SOBRE FUNCIONES -----------------------------

// --------------------- 1. Funcion suma --------------------------------------

function sumar(a,b) {
    return (a+b)
}

let resultadoSumar = sumar(2,1)
console.log(resultadoSumar)

//----------------------------- 2. Funcion que multiplica -------------------------

function multiplicar(a,b) {
    return (a*b)
}

let resultadoMultiplicar = multiplicar(2,2)
console.log(resultadoMultiplicar)

// --------------------------------- 3. Funcion con Parametro por defecto ----------------------

function saludar(nombre = "Invitado"){
    return `Hola, ${nombre}`
} 

console.log(saludar())
console.log(saludar("Ernesto"))

// --------------------------------- 4. Funcion de Devuelve un objeto -----------------------

function crearPersona(nombre, edad) {
    return {
        nombre: nombre, 
        edad: edad
    }
}

let persona3 = crearPersona("Agustina", 19)
console.log(persona3);

// ------------------------------ 5. Funcion que modifica un objeto ---------------------------

function actualizarEdad(persona4,edadNueva) {
    persona4.edad = edadNueva
}

let persona4 = {
    nombre: "Ian",
    edad: 22
}

console.log(persona4)

actualizarEdad(persona4,23)

console.log(persona4)

//-------------------------------------- 6. Funcion recursiva -------------------------------

function factorial(a){
    if (a === 0 || a === 1){
        return 1
    } else {
        return a * factorial(a - 1);
    } 
}

console.log(factorial(5))

//------------------------------------ 7. Funcion con Funcion Interna ----------------------

function despedir(){
    function adios(){
        return "Adios";
    }
    return adios()
}

console.log(despedir())

// ----------------------------------- 8. Funcion que crea otra funcion ---------------------------

function procesarArray(array, funcion){
    return array.map(funcion)
}

function multiplicarpordos(numero){
    return (numero * 2)
}

const numeros = [1,2,3,4,5];

const resultado = procesarArray(numeros, multiplicarpordos)

console.log(resultado)

//------------------ 9. Funcion que devuelve otra funcion -----------------------------------------

function crearMultiplicador(x){
    return function(numeroo) {
        return numeroo * x;
}
}

const  multiplicarporx = crearMultiplicador(3)

console.log(multiplicarporx(10))


// ------------------------ 10. Funcion Anonima -----------------------------------------------

const sumarAnonima = function(a, b) {
    return a + b;
};

// Ejemplo de uso:
const resultado = sumarAnonima(3, 7);
console.log(resultado); // 10