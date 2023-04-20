document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((button) = {
        button.addEventListener('click', function () {
            alert('Item added to cart!');
             Add your cart handling functionality here
        });
    });
});
