const USERNAME = "admin";
const PASSWORD = "1234";

function login() {

    let user =
        document.getElementById("username").value;

    let pass =
        document.getElementById("password").value;

    if(user === USERNAME && pass === PASSWORD){

        document
        .getElementById("loginPage")
        .classList.remove("active");

        document
        .getElementById("mainPage")
        .classList.add("active");

    }
    else{
        alert("Invalid Login");
    }

}

function logout(){

    document
    .getElementById("mainPage")
    .classList.remove("active");

    document
    .getElementById("loginPage")
    .classList.add("active");

}

function showPage(pageId){

    let pages =
    document.querySelectorAll(".content-page");

    pages.forEach(page=>{
        page.classList.remove("active-content");
    });

    document
    .getElementById(pageId)
    .classList.add("active-content");

}
