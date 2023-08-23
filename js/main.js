let slideIndex = 0;
var stopSlider ;
var main = document.getElementById("main");

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
} 

async function GetGeneral(category)
{
  var response = await fetch("../products.json");
  var result = await response.json();
  var container = `` ;
  for (let i = 0; i < result[category].length; i++) {
    container += `<div class="card ms-2 me-2"  style="width: 18rem;">
    <img src="/imgs/${category}/${result[category][i].imgUrl}" class="card-img-top" alt="${result[category][i].desc}">
    <div class="card-body">
      <h5 class="card-title">${result[category][i].name}</h5>
      <h5 class="card-title">${result[category][i].price} :LE</h5>
      <p class="card-text">${result[category][i].desc}</p>
      <div>
      <a onClick= "AddToCart(${result[category][i].id},'${result[category][i].category}s')" id="success" class="btn btn-success w-20 position-absolute bottom-0  mb-3">add to cart</a>
      </div>
    </div>
  </div>`
  }

  var pro = document.getElementById("laptops");
  pro.innerHTML=container;
}




async function About()
{
    clearInterval(stopSlider)
    var response = await fetch("../About.html");
    var containt = await response.text()
    main.innerHTML= containt;
    
}


async function home()
{
  stopSlider= setInterval(showSlides,2000);
    var response = await fetch("../home.html");
    var containt = await response.text();
    main.innerHTML= containt;
    await GetGeneral("laptops");
}


window.onscroll = function()
{
  scrollFunction()
};



function scrollFunction (){
  var btn = document.getElementById("top")
  if (document.body.scrollTop > 50  || document.documentElement.scrollTop > 50) {
    btn.style.display = "block";
  } 
  else {
    btn.style.display = "none";
  }
}



function GoUp() {
document.body.scrollTop = 0;
document.documentElement.scrollTop=0;
}
