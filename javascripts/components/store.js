const bookInfo = {
    price: "1337",
    title: "Earthbound",
    image: "./assets/images/Earthbound_Box.jpg"
  };

const printToDom = (message, divID) => {
    document.getElementById(divID).innerHTML = message;
}

const addToCartEvent = () => {
    console.log('added to cart');
}

const makeStore = () => {
    let domString = '<h2>Our Only Game:</h2>';
    domString += '<p>Buy it Now!</p>';
    domString += `<h3>$${bookInfo.price}</h3>`;
    domString += `<img src=${bookInfo.image} alt="game cover"/>`;
    domString += '<button id="cart-button" class="btn btn-warning col-12">Add to cart</button>';
    
    printToDom(domString, 'store-container');
    document.getElementById('cart-button').addEventListener('click', addToCartEvent)
}

export default {makeStore};