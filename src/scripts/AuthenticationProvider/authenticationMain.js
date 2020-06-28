import api from "./authenticationAPI.js"

const authenticationSubmitButton = document.querySelector('#authentication-submit-button');
const createAccountSubmitButton = document.querySelector('#create-account-submit-button');
const signoutSubmitButton = document.querySelector('#signout-button');

function userExists (userList, username) {
	for (let user of userList) {
		if (user.username === username) {
			return true;
		}
	}
	return false;
}



// check to see if anything is in storage

function setupAuthenticationButtons() {
	let userID = sessionStorage.getItem('activeUser');

	if (!userID) {
		// user is not signed in, so set buttons accordingly
		authenticationSubmitButton.disabled = false;
		createAccountSubmitButton.disabled = false;
		signoutSubmitButton.disabled = true;
	} else {
		authenticationSubmitButton.disabled = true;
		createAccountSubmitButton.disabled = true;
		signoutSubmitButton.disabled = false;
	}
}

setupAuthenticationButtons();

// events

authenticationSubmitButton.addEventListener('click', e => {
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password")
    authenticationAPI.signInUser(usernameInput.value, passwordInput.value);
    
});

signoutSubmitButton.addEventListener('click', e => {
	sessionStorage.removeItem('activeUser');
	setupAuthenticationButtons();
});

createAccountSubmitButton.addEventListener('click', e => {
	const username = document.querySelector("#createUsername").value;
    const password = document.querySelector("#createPassword").value;
    const email = document.querySelector("#email").value;

    // get all the users
    api.getAllUsers()
    	.then(allUsers => {
    		// loop through and see if a user exists already
    		


    		// create the user
    		api.createUser(username, email, password)
    			.then(createdUser => {
    				// save user to localstorage
    				sessionStorage.setItem("activeUser", createdUser.id);
    			})

    	})



    // if the user exists, display an error message, exit


    authenticationAPI.createNewUser(newUsernameInput, emailInput, newUserPasswordInput)
});

