const printToDom = (message, divID) => {
    document.getElementById(divID).innerHTML = message;
}

const makeStore = () => {
    const domString = 'hi new store';
    printToDom(domString, 'store-container');
}

export default {makeStore};