let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let result = document.querySelector('#result');

document.querySelector('#plus').addEventListener('click',  function(){
	result.value = Number(number1.value) + Number(number2.value)
	console.log("plus")
})

document.getElementById('subtract').addEventListener("click",  function(){
	result.value = Number(number1.value) - Number(number2.value)
})

document.getElementById('division').addEventListener("click",  function(){
	result.value = Number(number1.value) / Number(number2.value)
})

document.getElementById('multiplication').addEventListener("click",  function(){
	result.value = Number(number1.value) * Number(number2.value)
})