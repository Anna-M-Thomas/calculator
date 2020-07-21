

document.addEventListener("DOMContentLoaded", function(){

let calculator = document.getElementById("calculator");
let display = document.getElementById("display");
let numbers =  document.getElementsByClassName("number");

let number1 = "";
let operation = "";
let number2 = "";

const keyboard = {
	"zero": 0,
	"one": 1,
	"two": 2,
	"three": 3,
	"four": 4,
	"five": 5,
	"six": 6,
	"seven": 7,
	"eight": 8,
	"nine": 9,
	"divide": "/",
	"multiply": "*",
	"minus": "-",
	"plus": "+",
	"period": ".",
}

calculator.addEventListener("click", function(e){
		if(event.target.className == "number"&&!operation){
		number1 += keyboard[event.target.id].toString();
		display.textContent = number1;
		}
		
		if (!operation && event.target.className == "operator"){
			operation = keyboard[event.target.id];
		}

		if(number1&&operation&&event.target.className == "number"){
		number2 += keyboard[event.target.id].toString();
		display.textContent = number1 + " " + operation + " " + number2;
		}

		if(event.target.id== "equal"&&number1&&number2&&operation){
			number1 = parseFloat(number1);
			number2 = parseFloat(number2);
			let answer = operate(operation, number1, number2);
			display.textContent = answer.toFixed(2);
			clear();
			number1 = answer;
		}
			
		if(event.target.className == "operator"&&number1&&number2&&operation){
			number1 = parseFloat(number1);
			number2 = parseFloat(number2);
			let answer = operate(operation, number1, number2);
			display.textContent = answer.toFixed(2);
			clear();
			number1 = answer;
			operation = keyboard[event.target.id]; 
		}
		
		if(event.target.id=="clear"){
			clear();
			display.textContent = "";
		}
});

function clear(){
	number1 = "";
	number2 = "";
	operation = "";
}

function add(num1, num2){
	return num1 + num2;
}

function subtract(num1, num2){
	return num1 - num2;
}

function multiply(num1, num2){
	return num1 * num2;
}

function divide(num1, num2){
	if(num2!=0){
	return num1 / num2;
	}
	else {
	 return "Nice try";
	}
}

function operate(operator, num1, num2){
	switch(operator){
		case "+":
		return add(num1, num2);
		break;
		case "-":
		return subtract(num1, num2);
		break;
		case "*":
		return multiply(num1, num2);
		break;
		case "/":
		return divide(num1, num2);
		break;
	}
}

});