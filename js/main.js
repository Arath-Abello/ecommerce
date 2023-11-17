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
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    } else {
        drawProductAndModal();
    }
});

//* borrar el contenido del carrito
function deleteProduct() {
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

    deleteProductBtn.addEventListener('click', () => {
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;

    });
}

// cambiar imagenes cuando se presione los botones flecha (slider)
const imgsContainer = document.querySelector('.gallery__image-container');
const previousGalleryBtn = document.querySelector('.gallery__previous');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

const imgsUrl = [
    '../images/image-product-1.jpg',
    '../images/image-product-2.jpg',
    '../images/image-product-3.jpg',
    '../images/image-product-4.jpg'
];

nextGalleryBtn.addEventListener('click', () => {
    changeNextImg(imgsContainer);
});

previousGalleryBtn.addEventListener('click', () => {
    changePreviousImg(imgsContainer);
});

// mostrar el modal de imagenes en desktop (slider)
const modalGallery = document.querySelector('.modal-gallery__background');
const iconCloseModalBtn = document.querySelector('.modal-gallery__close');
imgsContainer.addEventListener('click', () => {
    modalGallery.style.display = 'grid';
});

iconCloseModalBtn.addEventListener('click', () => {
    modalGallery.style.display = 'none';
})

// cambiar las imagenes principales al apretar los thumbnails
// nos dara un nodeList con todos los elementos cons esa clase (ya sabes que el nodeList es limitado en metodos)
let thumbnails = document.querySelectorAll('.gallery__thumbnail');
// transformamos el nodeList a un array para tener más metodos como foreach, map, etc
thumbnails = [...thumbnails];
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
        imgsContainer.style.backgroundImage = `url("../images/image-product-${event.target.id}.jpg")`;
    });
});

// cambiar las imagenes principales al apretar los thumbnails desde el modal
let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
modalThumbnails = [...modalThumbnails];

modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', (event)=>{
        // aqui los thumbnails del modal tiene como id m1, m2, etc.
        // vamos a recortar la primera parte del id osea le removemos la m con un slice y quedaran solamente los numeros
        modalImageContainer.style.backgroundImage = `url("../images/image-product-${event.target.id.slice(-1)}.jpg")`;
    });
});

// cambiar imagen principal del modal con las flechas
 const previousModalGallery = document.querySelector('.modal-gallery__previous');
 const nextModalGallery = document.querySelector('.modal-gallery__next');

 nextModalGallery.addEventListener('click', () => {
    changeNextImg(modalImageContainer);
});

previousModalGallery.addEventListener('click', () => {
    changePreviousImg(modalImageContainer);
});

// mostrar el navbar al presionar el menu hambuerguesa
const iconMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const iconCloseNavbar = document.querySelector('.modal-navbar__close');
iconMenu.addEventListener('click', ()=>{
    modalNavbar.style.display='block';
});

iconCloseNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display='none';
}); 




// funciones 
function drawProductAndModal() {
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

function changeNextImg(containerImg) {
    if (imgIndex == 4) {
        imgIndex = 1;
    } else {
        imgIndex++;
    }
    containerImg.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg")`;
}

function changePreviousImg(containerImg) {
    if (imgIndex == 1) {
        imgIndex = 4;
    } else {
        imgIndex--;
    }
    containerImg.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg")`;
}