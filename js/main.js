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
// como es un elemento que no cambia su valor pues haremos una constante

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');

// cuando se hace click en el boton
addToCartBtn.addEventListener('click', ()=>{
    // creamos una varable de ultimo valor y convertimos el texto del html de cartNotification a un numero con parseint
    let lastValue = parseInt(cartNotification.innerText);
    // sumamos el valor por defecto que esta en el html con el nuevo valor de userInputNumber
    lastValue = lastValue + userInputNumber;

    // entonces que modifique el texto por el valor de la variable userInputNumber
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
});

// * TERCERA PARTE
// * Mostrar el modal con el detale del producto
