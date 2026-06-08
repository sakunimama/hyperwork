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
let documents = JSON.parse(
localStorage.getItem("documents")
) || [];

function addDocument(){

    let number =
    document.getElementById("docNumber").value;

    let subject =
    document.getElementById("docSubject").value;

    let from =
    document.getElementById("docFrom").value;

    if(number === "" || subject === ""){
        alert("Fill required fields");
        return;
    }

    documents.push({
        number,
        subject,
        from
    });

    localStorage.setItem(
        "documents",
        JSON.stringify(documents)
    );

    renderDocuments();

    document.getElementById("docNumber").value="";
    document.getElementById("docSubject").value="";
    document.getElementById("docFrom").value="";
}

function renderDocuments(){

    let tbody =
    document.querySelector(
        "#documentTable tbody"
    );

    tbody.innerHTML="";

    documents.forEach((doc,index)=>{

        tbody.innerHTML += `
        <tr>

            <td>${index+1}</td>

            <td>${doc.number}</td>

            <td>${doc.subject}</td>

            <td>${doc.from}</td>

            <td>

                <button onclick="deleteDocument(${index})">
                    Delete
                </button>

            </td>

        </tr>
        `;

    });

}

function deleteDocument(index){

    if(confirm("Delete document?")){

        documents.splice(index,1);

        localStorage.setItem(
            "documents",
            JSON.stringify(documents)
        );

        renderDocuments();

    }

}

window.onload = function(){

    renderDocuments();

};
