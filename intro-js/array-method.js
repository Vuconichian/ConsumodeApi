// metodos para arrglos

const persona = [
    {nombre: "Ian",edad: 22,puesto: "Frontend"},
    {nombre: "Agustina",edad: 19,puesto:"UXUI"},
    {nombre: "Agustin",edad: 25, puesto:"Backend"},
    {nombre: "Lionel Messi", edad: 38, puesto: "EI"}
]

console.log(persona)

// Filtrar por personas mayores a 20
const mayoresde20 = persona.filter(persona => {
    return persona.edad > 20
})

console.log(mayoresde20)


// Encuentra personas por su nombre
const Agustina = persona.find(persona => {
    return persona.nombre = "Agustina"
})

console.log(Agustina)