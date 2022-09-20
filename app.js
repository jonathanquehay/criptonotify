Push.create("Hola que tal es una notificacion!", {
    body: "Espero salga la notificacion'?",
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});

setInterval("iniciar()", 1000);

window.onload = function () {
    document.getElementById("moneda").focus();
}
const m = document.getElementById("moneda").value


const textbox = document.getElementById("moneda");
textbox.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        document.getElementById("calcular").click();
    }
});


document.getElementById("calcular").addEventListener("click", iniciar)


function iniciar() {
    const endpoint = 'https://fapi.binance.com/fapi/v1/depth?symbol=' + document.getElementById("moneda").value + 'USDT&contractType=PERPETUAL'

    const precioActual = 'https://fapi.binance.com/fapi/v1/ticker/price?symbol=' + document.getElementById("moneda").value + 'USDT&contractType=PERPETUAL'

    fetch(endpoint)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarData(datos))
        .catch(e => console.log(e))


    fetch(precioActual)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarPrecio(datos))
        .catch(e => console.log(e))
    //********************************************************************************* */
    fetch(trades)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarTrades(datos))
        .catch(e => console.log(e))





    const mostrarPrecio = (precioActual) => {

        let n = precioActual.price
        document.getElementById("precio_actual").innerHTML = '<h6 id="precio">Precio actual => ' + '<span>' + '$ ' + new Intl.NumberFormat().format(n) + '<span>' + '</h6>';



    }



    const mostrarData = (data) => {
        let body = ''




        body +=
            `<tr><td>${a}</td><td>${b}</td></tr>
                <tr><td>${c}</td><td>${d}</td></tr>
                <tr><td>${e}</td><td>${f}</td></tr>
                <tr><td>${g}</td><td>${h}</td></tr>
                <tr><td>${i}</td><td>${j}</td></tr>`
        //console.log(j)
        document.getElementById('data').innerHTML = body
    }
}

