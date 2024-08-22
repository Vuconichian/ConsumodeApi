//key=

const apiKey = 'completar con apikey'

const peticion = fetch('https://rest.coinapi.io/v1/exchanges', {
    method: 'GET',
    headers: {
        'X-CoinAPI-Key': apiKey}
    });

    peticion
    .then(resp => resp.json())
    .then(data => {
        console.log(data)

        // .map() crea un array nuevo (exchangeElements) de elementos <p> a partir del array original(data) 
        const exchangeElements = data.map(exchange => {
            const exchangeElement = document.createElement('p')
            exchangeElement.innerText = `Nombre: ${exchange.name}, Volumen de transacciones en USD en 1 hora: $${exchange.volume_1hrs_usd} USD, Volumen de transacciones en USD en 1 dia: $${exchange.volume_1day_usd} USD`
            return exchangeElement
        })

        // el método .forEach() itera sobre el array exchangeElements y añade cada elemento <p> 
        // al cuerpo del documento (document.body), lo que hace que se muestre en la página.
        exchangeElements.forEach(element => {
            document.body.append(element)
        })
    })
    .catch(console.warn)