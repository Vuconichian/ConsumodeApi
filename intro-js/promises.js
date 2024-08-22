//resolve -> ejecuta el llamado a la promise cuando es correcto
//reject -> cuando hubo un error

const aplicarDescuento = new Promise(( resolve, reject) => {
    setTimeout(() => {
        let descuento = true
    if (descuento) {
        resolve("Descuento aplicado")
    } else {
        reject("No se pudo aplicar el descuento")
    }
    },3000)
}) 


aplicarDescuento.then( resultado => {
    console.log(aplicarDescuento)
}).catch(error => {
    console.log("Hubo un error en el descuento", error)
})

// aplicamos el  metodo.then a la promise que es lo que se le pasa como funcion

