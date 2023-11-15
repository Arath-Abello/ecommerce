let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    // cada vez que se haga click pues que sume uno 
    userInputNumber++;
    // accedemos al valor del input y se le asigna el nuevo valor de userInputNumber
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', () => {
    // cada vez que se haga click pues que reste uno 
    userInputNumber--;
    // si el valor es menor o igual a 0
    if (userInputNumber <= 0) {
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
// creamos una varable de ultimo valor y convertimos el texto del html de cartNotification a un numero con parseint
let lastValue = parseInt(cartNotification.innerText);

// cuando se hace click en el boton
addToCartBtn.addEventListener('click', () => {
    // sumamos el valor por defecto que esta en el html con el nuevo valor de userInputNumber
    lastValue = lastValue + userInputNumber;

    // entonces que modifique el texto por el valor de la variable userInputNumber
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductAndModal();
    

});

// * TERCERA PARTE
// * Mostrar el modal con el detale del producto
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
let productContainer = document.querySelector('.cart-modal__checkout-container');


cartIconBtn.addEventListener('click', () => {
    // classList: analizar las clases que tiene
    // toggle(): nos pregunta si la clase existe o no? si existiera pues la borra y si no existe pues la crea
    cartModal.classList.toggle('show');

    if (lastValue == 0) {
        drawProductAndModal();
    }
});

//* borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    
    deleteProductBtn.addEventListener('click', () => {
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    
    });
}

// funciones 
function drawProductAndModal(){
    productContainer.innerHTML = `<div class="cart-modal__details-container">
    <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail">
    <div>
      <p class="cart-modal__product">Autumn Limited Edition...</p>
      <p class="cart-modal__price">$125.00 x 3 <span>$375.00</span></p>
    </div>
    <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="icon delete">
  </div>
  <button class="cart-modal__checkout">Checkout</button>`;
  deleteProduct();
  let priceModal = document.querySelector('.cart-modal__price');
  priceModal.innerHTML = `$125.00 x${lastValue} <span>${lastValue * 125}.00</span>`;
}