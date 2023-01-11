let urlConvertidoString = location.search
console.log(urlConvertidoString)


 let urlEchoObjeto = new URLSearchParams(urlConvertidoString)
 console.log(urlEchoObjeto)


 let valorDeNuestroID = urlEchoObjeto.get("id")
 console.log( valorDeNuestroID)


 let contenedorDeDetails = document.getElementById("carta-detallada")


 let cartas;


fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(datos => datos.json())
.then(dataApi=> {
    cartas = dataApi.events
    maquetarCard( cartas.find(cartas => cartas._id == valorDeNuestroID))
})


 function maquetarCard (card){
    contenedorDeDetails.innerHTML = ""
    let div = document.createElement("div")
    div.className = "card"
    div.innerHTML = `<img src="${card.image}" class="card-img-top" alt="${card.name}">
    <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.description}</p>
    <p class="card-text">category of our event: ${card.category}</p>
    <p class="card-text">where you will find the event: ${card.place}</p>
    <p class="card-text">its price is: ${card.price}€</p>
    <p class="card-text">total seats of the event: ${card.capacity}</p>
    <a href="./index.html" class="btn btn-primary">go back</a>
</div>`
contenedorDeDetails.appendChild(div)

 }
 