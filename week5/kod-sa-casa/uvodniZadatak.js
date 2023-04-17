/*
console.log('Hello from uvodni Zadatak')
*/

//function - u pitanju je funkcija
// saberi - naziv funkcije, smislja programer
// male zagrade - parametre fu-je trenutno nemamo parametre, a mozemo imati jedan ili vise
// { } - telo funkcije
function saberi() {
    let x = 5;
    let y = 6;

    //x = 6
    // x = x + 1;
    //x += 1; //  x = x + 1;
    x++; // inkrement
    y--; //decrement

    let z = x + y;
    console.log(z);
}

//HelloFromJS
//helloF
function helloFromJS() {
    alert('Hello World');
}


function sakrij() {
    // const el = document.getElementById("tekst");
    // console.log(el);
    // el.style.display = "none";

    document.getElementById("tekst").style.display = "none";
}

function prikazi() {
    document.getElementById("tekst").style.display = "block";
}