const carritoDeCompra = ["Producto1", "Producto2","Producto3"]

console.log(carritoDeCompra)

//muestra un array
const cart = carritoDeCompra.map(product => {
    return "El producto es " + product
})

console.log(cart)