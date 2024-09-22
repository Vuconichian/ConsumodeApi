// ------------------ 1. Agregar y Eliminar Elementos ------------------------

frutas = ["manzana", "banana", "pera"];
//console.log(frutas);
frutas.push("fresa");
//console.log(frutas);
frutas.pop();
//console.log(frutas);


// ------------------- 2. Array Bidimensional ----------------------------------

matriz = [[1,2,3], [4,5,6], [7,8,9]];

//console.log(matriz[1][1]);

// ----------------------- 3. Iterar sobre un Array ----------------------------

for (let i = 0; i < frutas.length; i++) {
    //console.log(frutas[i]);
}

// ----------------------- 4. Uso de map ----------------------------------------

function elevarAlCuadrado(matriz) {
    return matriz.map(elemento => elemento **2);
}

matriz1 = [1, 2, 3, 4, 5];
//console.log(elevarAlCuadrado(matriz1));

// -------------------- 5. Uso de filter -------------------------------------------

function filtarMayoresDe(matriz, numero) {
    return matriz.filter(elemento => elemento > numero);
}

matriz2 = [1, 2, 3, 4, 5];
//console.log(filtarMayoresDe(matriz2, 3));

// -------------------------- 6. Uso de reduce -----------------------------------

function sumarElementos(matriz) {
    return matriz.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

matriz3 = [1, 2, 3, 4, 5];
//console.log(sumarElementos(matriz3));

// ----------------------------- 7. Uso de some -------------------------------------

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function esMayorque(numeros){
    return numeros.some(elemento => elemento > 10);
}

//console.log(esMayorque(numeros));

// ------------------------------ 8. Uso de every ------------------------------------

function positivos(numeros){
    return numeros.every(elemento => elemento > 0);
}

//console.log(positivos(numeros));

// ------------------------- 9. Uso de find ----------------------------------------

personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Pedro', edad: 20 },
]

function buscarPersona(personas, edad) {
    return personas.find(persona => persona.edad >= edad);
}

//console.log(buscarPersona(personas, 30));

// ---------------------------- 10. Uso de sort ----------------------------------------

verduras = ["lechuga", "apio", "berenjena", "coliflor", "zanahoria"];

function ordenarAlfabeticamente(verduras){
    return verduras.sort();
}

console.log(ordenarAlfabeticamente(verduras));
