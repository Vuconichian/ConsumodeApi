// function declaration

function saludar(nombre) {
    console.log("Bienvenido "+ nombre)
}

saludar("juan")


// function expression

const cliente = function(nombreCliente) {
    console.log("Mostrando datos del cliente: " + nombreCliente);
}

cliente("juan")

function actividad(nombre,actividad) {
    console.log(`La persona ${nombre}, esta realicando la actividad ${actividad}`)
}

actividad("juan","aprendiendo a programar")