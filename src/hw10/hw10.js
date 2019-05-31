import './hw10.scss';

const btn = document.querySelector('#calculatorBtn');

btn.onclick = onCalculate;

function onCalculate() {
    const a = prompt('operand A');
    const b = prompt('operand B');
    const operator = prompt('Enter +, -, * or /');
    calculate(a, b , operator);
}

function calculate(a, b, operator) {
   
    if (isNaN(Number(a)) || isNaN(Number(b))
    ) {
        console.log('Please enter valid operands');
    } else {
        if (operator === '+') {
            return add();
        } else if (operator === '-') {
            return sub();
        } else if (operator === '*') {
            return mul();
        } else if (operator === '/') {
            return div();
        } else
        {
            console.log('Operator invalid!');
        }
    }

    function add() {
        let op_res = Number(a) + Number(b);
        console.log(op_res);
        return op_res;
    }

    function sub() {
        let op_res = Number(a) - Number(b);
        console.log(op_res);
        return op_res;
    }

    function mul() {
        let op_res = Number(a) * Number(b);
        console.log(op_res);
        return op_res;
    }

    function div() {
        let op_res = a;
        if (Number(b) === 0) {
            console.log('Can\'t divide by zero');   
        } else {
            op_res = Number(a) / Number(b);
            console.log(op_res);
        }
        return op_res;    
    }
}

//2 - Graphic

let res = 0;
let last_val = 0;
let op_entered = false;
let next_action = 'undef';

const input = document.querySelector('.calc-input');
input.value = 0;

const op_buttons = document.querySelectorAll('.button-operation');
for (let i = 0; i < op_buttons.length; i++) {
    op_buttons[i].addEventListener('click', () => {
        operationAction();
        op_entered = true;
        next_action = op_buttons[i].value;
    })
} 

const btn_reset = document.querySelector('.button-reset');
btn_reset.addEventListener('click', () => {
   res = 0;
   last_val = 0;
   input.value = 0;
   op_entered = false;
   next_action = 'undef';
})
const btn_result = document.querySelector('.button-result');
btn_result.addEventListener('click', () => {
    operationAction();
    next_action = 'undef';
    last_val = res;
})

function operationAction() {
    if (next_action === 'undef') {
        res = last_val;  
    } else
        res = calculate(res, last_val, next_action); 
    input.value = res;
}

const num_buttons = document.querySelectorAll('.number-button');
for (let i = 0; i < num_buttons.length; i++) {
    num_buttons[i].addEventListener('click', () => {
        if (op_entered || Number(input.value) === 0) {
            input.value = '';
            op_entered = false;
        }
        input.value = String(input.value) + String(num_buttons[i].value);
        last_val = input.value;
    })
} 