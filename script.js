const counterValue = document.querySelector('#counter');

function Increment() {
    let value = parseInt(counterValue.innerText);
    value = value + 1;
    counterValue.innerText = value;
};

function Decrement() {
    let value = parseInt(counterValue.innerText);
    value = value - 1;
    counterValue.innerText = value;
}