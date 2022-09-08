const totalUni = document.querySelector("#totalUni")
const total =document.querySelector ("#total")


let cart = {};

function printGameInCart(elementHTML) {
    let html = "";
    let sumadd = 0;
    let totalPrice = 0;

    const arrayCart = Object.values(cart);

    arrayCart.forEach(({ id, name, urlImages, amount, price}) => {
        sumadd += amount;
        totalPrice += price * amount;
        html += `
            <div class="item_cart">
                <div class="item_cart-img">
                    <img src="${urlImages}" alt="">
                </div>

                <h4 class="item_cart-title">${name}</h4>
                <div class="item_cart-options" id="${id}">
                    <i class='bx bx-minus'></i>
                    <span id="amount">${amount}</span>
                    <i class='bx bx-plus-medical'></i>
                    <i class='bx bx-trash'></i>
                </div>
            </div>
        `;
    });
    total.textContent = totalPrice;
    totalUni.textContent = sumadd;
    elementHTML.innerHTML = html;

}
function printGame(elementHTML, data) {
    let html = "";

    data.forEach(({ id, name, price, stock, urlImages, subtitle, descriction }) => {
        html += `
        <div class="game">
            <div class="game__img">
                <img src="${urlImages}" alt="${name}">
            </div>
            <div class="Game__body" id="${id}">
                <h2 class="Game__body-title">${name}</h2>
                <p class="precio_1">Precio: $ ${price} USD</p>
                <p class="stock_1">Unidades: ${stock}</p>
                <h3 class="sub_1">${subtitle}</h3>
                <p class="descri_1">${descriction}</p>
                <button class="btn btn__add">Comprar</button>
            </div>
        </div>
    `;
    });

    elementHTML.innerHTML = html;
}

export { printGameInCart, printGame, cart };


