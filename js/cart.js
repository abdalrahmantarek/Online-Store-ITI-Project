var num =0;
var itemCartona = ``
var totalPrice2=0  ;
var dataInCart = [];

function Dispaly(data) {
    totalPrice2 = 0;
    itemCartona =``
    for (let i = 0; i < data.length; i++) {
        itemCartona +=`<div class="card ms-3" style="width: 18rem;">
        <img src="/imgs/${data[i].category}s/${data[i].imgUrl}" class="card-img-top" alt="${data[i].desc}">
        <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <h5 class="card-title">${data[i].price} :LE</h5>
            <p class="card-text">${data[i].desc}</p>
            <div>
            <a onClick= "Delete(${i})" class="btn btn-success w-20 position-absolute bottom-0 mb-3">delete</a>
            </div>
        </div>
        </div>`
        totalPrice2 +=Number( data[i].price);
    }
}

async function AddToCart(id ,cat) {
num++;
var counter = document.getElementById("myCount");
counter.style.display ="block";

counter.innerHTML =num;
var response = await fetch("../products.json")
var result = await response.json();

for (let i = 0; i < result[cat].length; i++) {

    if (result[cat][i].id == id ){
        dataInCart.push(result[cat][i]);
    }
    }
    Dispaly(dataInCart) 
}

async function CartView()
{
    clearInterval(stopSlider)
    var x = await fetch("../cart.html");
    var y = await x.text();
    main.innerHTML=y;
    var cartItems = document.getElementById("catItem");
    cartItems.innerHTML =itemCartona;
    var Cheeck = document.getElementById("checkOut");
    Cheeck.innerHTML=`<h2>Total Price : ${totalPrice2} </h2>`;
}


function Delete(i) {
    var totalPrice = Number(0);
    var counter = document.getElementById("myCount");
    num == 1? counter.style.display ="none" :counter.style.display ="block";
    dataInCart.splice(i,1)
    Dispaly(dataInCart)
    counter.innerHTML =--num;
    var cartItems = document.getElementById("catItem");
    cartItems.innerHTML =itemCartona;
    for (let j = 0; j < dataInCart.length; j++) {
        totalPrice += Number(dataInCart[j].price); 
    }
    var Check = document.getElementById("checkOut");
    Check.innerHTML= `<h2>Total Price : ${totalPrice} </h2>`;
}   