console.log("main.js is linked");

const printToDom = (message, divID) => {
    document.getElementById(divID).innerHTML = message;
}

const makeStore = () => {
    const domString = "hi store";
    printToDom(domString, "store-container");
}

const init = () => {
    makeStore();
}

init();