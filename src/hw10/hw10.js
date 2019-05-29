import './hw10.css';

const btn = document.querySelector('#calculatorBtn');

btn.onclick = calculate;

function calculate() {
    const a = prompt('operand A');
    const b = prompt('operand B');
    const operator = prompt('Enter +, -, *, / or pow');
    
    if (Boolean(a) === false
        || Boolean(b) === false
        || isNaN(Number(a))
        || isNaN(Number(b))
    ) {
        alert('Please enter valid operands');
    } else {
        if (operator === '+') {
            add();
        } else if (operator === '-') {
            sub();
    
        } else if (operator === '*') {
            mul();
        } else if (operator === '/') {
            div();
    
        } else if (operator === 'pow') {
            pow();
        } else
        {
            alert('Operator invalid!');
        }
    }

    function add() {
        console.log(Number(a) + Number(b));
    }

    function sub() {
        console.log(Number(a) - Number(b));
    }

    function mul() {
        console.log(Number(a) * Number(b));
    }

    function div() {
        if (Number(b) === 0) {
            console.log('Can\'t divide by zero');   
        } else
            console.log(Number(a) / Number(b));
    }

    function pow() {
        console.log(Math.pow(Number(a), Number(b)));
    }
}