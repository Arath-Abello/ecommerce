let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput  = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    // cada vez que se haga click pues que sume uno 
    userInputNumber++;
    // accedemos al valor del input y se le asigna el nuevo valor de userInputNumber
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', ()=>{
    // cada vez que se haga click pues que reste uno 
    userInputNumber--;
    // si el valor es menor o igual a 0
    if(userInputNumber <= 0){
        // entonces que no de numeros negativos y se siga manteniendo en 0 asignandole el valor nuevamente
        userInputNumber = 0;
    }
        // accedemos al valor del input y se le asigna el nuevo valor de userInputNumber
    userInput.value = userInputNumber;
});

//* SEGUNDA PARTE:
// * Agregar el total de productos al carrito cuando apretamos "add to cart"
