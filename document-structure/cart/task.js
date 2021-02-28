// При нажатии на кнопки увеличения/уменьшения количества товаров, число должно также меняться. 
// Минимальное число товаров - 1 (отрицательные значения не допускаются)
// Реализуйте добавление товара в корзину с заданным количеством.
// Если товар уже имеется в корзине, количество необходимо увеличить, не добавляя в корзину новый элемент.

let controlQuantity, increase, decrease, quantity, addProduct, cart, number;
controlQuantity = document.querySelectorAll('.product__quantity-controls');
increase = document.querySelectorAll('.product__quantity-control_inc');
decrease = document.querySelectorAll('.product__quantity-control_dec');
quantity = document.querySelectorAll('.product__quantity-value');
addProduct = document.querySelectorAll('.product__add');
cart = document.querySelector('.cart__products');

for(let incr of increase) {
    incr.addEventListener('click', (event) => {
        number = event.target.previousElementSibling.innerText;
        number = parseInt(number);
        number ++;
        event.target.previousElementSibling.innerText = number;
    });
}

for(let decr of decrease) {
    decr.addEventListener('click', (event) => {
        number = event.target.nextElementSibling.innerText;
        number = parseInt(number);
        if(number > 1) {
            number --;
            event.target.nextElementSibling.innerText = number;      
        }     
    });
}

for(let add of addProduct) {
    add.addEventListener('click', (event) => {
        let product, parent, attr, sumProduct, sumProductCart, image, source;
        parent = event.target.closest('.product');
        attr = parent.getAttribute("data-id");
        sumProduct = parent.querySelector('.product__quantity-value').innerText;

        let mass = Array.from(cart.children);
        let elem = mass.find(element => element.dataset.id === attr);
        if (elem) {
            sumProductCart = elem.querySelector('.cart__product-count').innerText;
            elem.querySelector('.cart__product-count').innerText = parseInt(sumProductCart) + parseInt(sumProduct);
            return;
        }

        product = document.createElement('div');
        product.classList.add('cart__product');
        product.setAttribute("data-id", attr);
     
        image = document.createElement('img');
        image.classList.add('cart__product-image');
        source = parent.querySelector('.product__image').src;
        image.src = source;
        product.appendChild(image);
            
        product.insertAdjacentHTML('beforeEnd', '<div class="cart__product-count">' + sumProduct + '</div>');
    
        cart.appendChild(product);
    });
}