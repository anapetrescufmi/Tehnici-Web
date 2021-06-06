function register(){
    const nume=document.getElementById("nume").value;
    const prenume=document.getElementById("pnume").value;
    const email=document.getElementById("email").value;
    console.log(nume,prenume,email);

    const newPerson={
        nume: nume,
        prenume: prenume,
        email: email
    }

    $.post({
        url:"http://localhost:3000",
        data: newPerson
    })
    .done((res) => {
        localStorage.setItem("user", res.id);
    })

}

function getPeople(){
    var people=[];
    $.get({
        url:"http://localhost:3000"
    })
    .done((res)=>{
        people=res;
    })
    .then((res)=>{
        console.log(people);
    })
}

function update() {
    const nume=document.getElementById("nume").value;
    const prenume=document.getElementById("pnume").value;
    const email=document.getElementById("email").value;
    console.log(nume,prenume,email);

    const newPerson={
        nume:nume,
        prenume:prenume,
        email:email
    }
    var id = localStorage.getItem("user");
    $.ajax({
        type: "PUT",
        url:"http://localhost:3000?id=" + id,
        data: newPerson  
    })
}

function deletePerson() {
    var id = 3;
    $.ajax({
        type: "DELETE",
        url:"http://localhost:3000?id=" + id
    })
}

function notFound() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/not/found",
        statusCode: {
            200: function() {
                console.log("success")
            },
            404: function() {
                console.log("not found")
            }
        }
    })
}