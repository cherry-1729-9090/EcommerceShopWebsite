// representing that the productt is added to the wishlist whenever the like symbol is clicked on any individual product
let w_imgs = document.querySelectorAll('.w_img');

for (let i = 0; i < w_imgs.length; i++) {
    w_imgs[i].addEventListener('click', (e) => {
        e.target.style.color = "red";
    });
    w_imgs[i].addEventListener('dblclick', (e) => {
        e.target.style.color = "black";
    });
}





// logic for adding products to the cart whenever the add to cart button on a product is clicked
let cartset = new Set();
let products = document.querySelectorAll(".product-box");
let cartBox = document.querySelector('.cart-product-box');

for (let j = 0; j < products.length; j++) {
    let btn = products[j].querySelector('.cart-btn'); 
    let img = products[j].querySelector('.product-img').getAttribute('src');
    let price = products[j].querySelector('.price');
    let name = products[j].querySelector('h3');

    btn.addEventListener('click', (e) => {
        
        let cartItem = document.createElement('div');
        let productNumber = products[j].classList[2];

        main_cart.style.display = "block";
        shop_content.style.width = "75%";
        main_wl.style.display = "none";

        if (!cartset.has(productNumber)) {
            cartItem.classList.add("cart_item");
            cartItem.classList.add(productNumber);
            cartItem.innerHTML = `
                <img src="${img}" alt="#">
                <h4>${name.innerText}</h4>
                <h5>${price.innerText}</h5>
                <button class="decrease">-</button>
                <span>1</span>
                <button class="increase">+</button>
            `;
            cartBox.appendChild(cartItem);
            cartset.add(productNumber);
            cart_resize();
        } else {
            for (let i = 0; i < cartBox.children.length; i++) {
                let cartItem = cartBox.children[i];
                if (cartItem.classList.contains(productNumber)) {
                    let quantity = cartItem.querySelector('span').innerText;
                    quantity = "" + (Number(quantity) + 1);
                    cartItem.querySelector('span').innerText = quantity;
                    cart_resize();
                }
            }
        }

    });
}


//toggling the display of wishlist whwnever we click on the wish-list image
let wishlist = document.querySelector('.wishlist-img')
let main_wl = document.querySelector('.main-wl')
wishlist.addEventListener('click',(e)=>{
    main_wl.style.display = "block";
    shop_content.style.width = "75%";
    main_cart.style.display = "none";

})

let wl_close = document.querySelector('.wl-bottom');
wl_close.addEventListener('click',(e)=>{
    main_wl.style.display = "none";
    shop_content.style.width = "100%";
    main_cart.style.display = "none";
})


// to do
//1. function to change the quantity-bubble of wish-list
//2. filetring the products bades on the select category 
//3. changing the quantity of number of products present in the cart in the cart-bubble
//4. toggling the display of cart whenever an Item is added to the cart  and whenever we click the close button in the cart-box
//5. increasing and decreasing the quantities of products when increase and decrease buttons of a product are used
//6. adding the elements to the whishlist when I clicked the wish button of any particular product 
