// setTimeout(function() {
//     alert("Hello")
// }, 3000)

//setInterval()

// setInterval(function() {
//     alert("Hello")
// }, 3000)

//clearInterval
// var interval = setInterval(intervalFunction, 3000);

var index = 0;
// function intervalFunction() {
//     if(index % 2 === 0) {
//         alert("Numar par")
//     } else {
//         alert("Numar impar")
//     }
//     index ++;
//     if(index === 2) {
//         clearInterval(interval);
//     }
// }
// function stopInterval() {
//     clearInterval(interval);
// }
window.onload = function() {
    const input = document.getElementsByTagName("input")[0];
    input.addEventListener("keypress", showText);
}

function showText($event) {
    if($event.key === "Enter") {
        setTimeout(function() {
            // const input = document.getElementsByTagName("input")[0];
            // alert(input.value)
            alert($event.target.value)
        }, 4000);
    }
}
// localStorage.setItem("name", "Ana")
console.log(localStorage.getItem("name"));

// sessionStorage.setItem("sessionName", "Ana")