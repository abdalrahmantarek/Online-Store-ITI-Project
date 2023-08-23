
async function ContactUS() {
    clearInterval( stopSlider)
    var x = await fetch("../ContactUs.html");
    var y = await x.text();
    main.innerHTML= y;
    } 
    
function NameValidation (){
    var nameInput = document.querySelector("#name")
    var spans = document.querySelectorAll("table span")
    var nameRegex = /^[a-z]{3,}/;
    if (! nameRegex.test(nameInput.value) )
    {
        spans[0].style.display = "block"
    }else
    spans[0].style.display = "none"

}
function EmailValidation(){
    var emailInput = document.getElementById("email")
    var spans = document.querySelectorAll("table span")
    let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regexp.test(emailInput.value))
    {
        spans[1].style.display = "block"

    }else
    {
        
    spans[1].style.display = "none"
    }
}
function PasswordValidation(){
    var spans = document.querySelectorAll("table span")
    var passwordInput = document.getElementById("password")
    if(passwordInput.value.length < 8 )
    {
        spans[2].style.display = "block"

    }else
    {
        
        spans[2].style.display = "none"

    }
}

function Validation() { 
NameValidation ();
EmailValidation();
PasswordValidation();
}