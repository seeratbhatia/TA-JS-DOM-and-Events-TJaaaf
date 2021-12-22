let form = document.querySelector("form");

let errorMessage = {}
function displayError(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessage[name];
    elm.parentElement.classList.add('error');
}
function displaySuccess(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    errorMessage[name] = "";
    elm.parentElement.classList.remove('error');
    elm.parentElement.classList.add('error');
}
let userInfo = {};

function handleSubmit(event){
    event.preventDefault();

    let elements = event.target.elements;
    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const passwordCheck = elements("password-check").value;


    if(username.length < 4){
        errorMessage.username = "username can't be less than four character"
        displayError("username");
    }else{
        displaySuccess("username");
    }


    if(!isNaN(name)){
        errorMessage.name = "name can't be number"
        displayError("name");
    }else{
        displaySuccess("name");
    }


    if(!email.includes('@')){
        errorMessage.email = "email must contain @"
        displayError("email");
    }else if(email.length < 6){
        errorMessage.email = "email must contain at least 6 character"
    }
    else{
        displaySuccess("email");
    }

    if(!isNaN(phone)){
        errorMessage.phone = "phone number can only be number"
        displayError("phone");
    }else{
        displaySuccess("phone");
    }
    
    if(password !== passwordCheck){
        errorMessage.password = "password and confirm password can't be diffrent"
        errorMessage["password-check"] = "password and confirm password can't be diffrent"
        displayError("password");
        displayError("password-check");
    }else{
        displaySuccess("password");
        displaySuccess("password-check");
    }
    

    console.log({username, name, email, phone, password, passwordCheck});
}

form.addEventListener("submit", handleSubmit);