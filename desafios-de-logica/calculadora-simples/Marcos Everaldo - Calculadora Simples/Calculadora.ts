// Função Sum, recebe dois numeros, após receber os dois numeros irá realizar a Soma dos mesmos.
function Sum(number1  , number2 ) : number {
	return number1 + number2;
}

// Função Subtraction, recebe dois numeros, após receber os dois numeros ira fazer a Subtração dos mesmos.
function Subtraction(number1 : number , number2 : number) : number {
	return number1 - number2;
}

// Função Division, recebe dois numeros, após receber dois numeros faz a divisão dos mesmos.
function Division(number1 : number , number2 : number) : number {
	return number1 / number2;
}

// Função Multiplication, recebe dois numeros, após receber dois numeros faz a multiplicação dos mesmos.
function Multiplication(number1 : number , number2 : number) : number {
	return number1 * number2;
}

//A Seguir mostro no console, os resultados que as funçoes dão, de acordo com os numeros que defini em seus parametros

console.log(Sum(8, 9));// Resultado esperado : 17
console.log(Division(4, 2));// Resultado esperado: 2
console.log(Subtraction(10, 3));// Resultado esperado: 7
console.log(Multiplication(2, 4));// Resultado esperado: 8
