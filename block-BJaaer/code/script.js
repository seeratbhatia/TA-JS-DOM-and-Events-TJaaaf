let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modelInfo = document.querySelector(".modal_info");

let userData = {};

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let elements = event.target.elements;

    userData.name = elements.name.value;
    userData.email = elements.email.value;
    userData.choice = elements.choice.value;
    userData.color = elements.color.value;
    userData.movie = elements.movie.value;
    userData.book = elements.book.value;
    userData.terms = elements.terms.checked;

    modal.classList.add("open");

    let close = document.querySelector(".modal_close");
    close.addEventListener('click', () => {
        modal.classList.remove("open");
    })
    displayInfo(userData);
});


function displayInfo(data = {}) {

    modalInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `hello ${data.name}`;
    let email = document.createElement("p");
    email.innerText = `Email ${data.email}`;
    let choice = document.createElement("p");
    choice.innerText = `Choice ${data.choice}`;
    let color = document.createElement("p");
    color.innerText = `Color ${data.color}`;
    let movie = document.createElement("p");
    movie.innerText = `Rating for Movie ${data.movie}`;
    let book = document.createElement("p");
    book.innerText = `Book ${data.book}`;
    let terms = document.createElement("p");
    terms.innerText = `👉 ${data.terms ? 
    "You have accepted the terms and condition"
    :"You have not accepted the terms and condition"
}`;

    modalInfo.append(h1,email,choice,color,movie,book,terms);
}