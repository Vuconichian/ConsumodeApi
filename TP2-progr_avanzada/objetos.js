
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

console.log(tienePropiedad(producto, "color"))

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