// code written by Zach McWhirter
import authenticationAPI from './authenticationAPI.js';

const authenticationSubmitButton = document.querySelector('#authentication-submit-button');
const createAccountSubmitButton = document.querySelector('#create-account-submit-button');

authenticationSubmitButton.addEventListener("click", e => {
    alert('Sign In');
});

createAccountSubmitButton.addEventListener('click', e => {
	const usernameInput = document.querySelector('#username');

	authenticationAPI.createUser(usernameInput.value, 'bobspassword');
});


export default {};