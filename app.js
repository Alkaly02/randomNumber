const form = document.getElementById('form');
const reStart = document.getElementById('restart');
const number = document.getElementById('number');
const msgError = document.getElementById('msg-error');
const msgSuccess = document.getElementById('success');
let coups = 0;
let randomNumber = Math.floor(Math.random() * 30);

// console.log(form, number, submitButton);

reStart.addEventListener('click', () => {
	location.reload();
})

form.addEventListener('submit', foundNumber);

function foundNumber(e){
	e.preventDefault();
	
	let givenValue = parseInt(number.value)

	if(randomNumber == givenValue){
		msgSuccess.innerHTML = `Vous avez tente ${coups} coups avant de trouver. Ce qui veut dire que vous avez trouve a votre ${coups + 1} ieme coups. BRAVO !!!`;

		msgError.innerHTML = '';	
	}
	else{
		let error = randomNumber > givenValue ? 'Le nombre à trouver est plus grand' : 'Le nombre à trouver est plus petit';
		msgError.innerHTML = error;
		number.value = '';
		coups += 1;
	}
}