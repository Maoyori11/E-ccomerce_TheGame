import { dataTG } from "./js/data.js";
import { printGame, printGameInCart, cart } from "./js/layout.js";
import "./js/showCart.js";

const contentGame = document.querySelector(".content_game");
const contentCartBody = document.querySelector(".content_cart-body");
const contentCartTotal = document.querySelector("content_cart-total");

contentGame.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn__add")) {
        const idGame = +e.target.parentElement.id;
        const findGame = dataTG.find((item) => item.id === idGame);

        if (cart[idGame] && cart[idGame].amount<cart[idGame].stock) {
            cart[idGame].amount++; 
        } else if(!cart[idGame]){ 
            cart[idGame] = findGame; 
            cart[idGame].amount = 1;
        }

        printGameInCart(contentCartBody);
    }
});

contentCartBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-minus")) {
        const idGame = +e.target.parentElement.id;
        cart[idGame].amount--;
        if (cart[idGame].amount === 0) {
            alert ("¿Seguro que quieres eliminar este producto?")
            delete cart[idGame];
        }
    }

    if (e.target.classList.contains("bx-plus-medical")) {
        const idGame = +e.target.parentElement.id;
        if (cart[idGame].amount > cart[idGame].stock-1) {
        alert("😃 Solo tenemos estas unidades.");   
        }else (cart[idGame].amount++)
        

    }

    if (e.target.classList.contains("bx-trash")) {
        const idGame = +e.target.parentElement.id;
        delete cart[idGame];
    }
    

    printGameInCart(contentCartBody);
});

printGame(contentGame, dataTG);
