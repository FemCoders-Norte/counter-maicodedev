function add(){
    //Escribir tu código que aumenta
    let numberElement = document.getElementById("number");
    let currentValue = parseInt(numberElement.innerText);
    numberElement.innerText = currentValue + 1;
}

function reset(){
    //Escribir tu código que hace un reset a 0
    let numberElement = document.getElementById("number");
    numberElement.innerText = 0;
}

function decrease(){
    //Escribir tu código que resta
    let numberElement = document.getElementById("number");
    let currentValue = parseInt(numberElement.innerText);
    numberElement.innerText = currentValue - 1;
};

export {add, reset, decrease}


/* PARTE II
function decrease() {
    let numberElement = document.getElementById("number");
    let currentValue = parseInt(numberElement.innerText);

    if (currentValue > 0) {
        numberElement.innerText = currentValue - 1;
    } else {

    }
}
 */