//Setting url will be used for all fetch calls
const url = "http://localhost:3000/users";


// These will be altered to become our fetch calls when we are ready for them
let nextID = 3;
const allUsers = [
	{
		id: 1,
		username: 'bob',
		email: 'bob@bob.com',
		password: 'bobspassword'
	},
	{
		id: 2,
		username: 'Sue',
		email: 'sue@sue.com',
		password: 'suespassword'
	}
];


const authenticationAPI = {
	getAllUsers() {
		// return fetch(`${url}/users`)
		// 	.then(response => response.json());

		return new Promise(function (resolve, reject) {
			return resolve(allUsers);
		});
	},
	createUser(username, email, password) {
		// return fetch(`${url}/users`,
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({ username: username, email: email, password: password })
		// )
		// 	.then(response => response.json());
		return new Promise(function (resolve, reject) {
			let newUser = { 
				id: nextID++,
				username: username, 
				password: password,
			 	email: email
			};
			allUsers.push(newUser);
			return resolve(newUser);
		});
	}
}






// url.forEach(user => {

//     for (const value of Object.values(user)) {
//       console.log(value)
//     }
// })


// const auththenticationAPI = {
//     getSingleUser: (id) => {
//         return fetch(`${url}/users/${id}`)
//         .then(response => response.json());
//     },

//     addAUser: (userObj) => {
// 		return fetch( {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify(userObj)
// 		}).then(response => response.json());
//     }   
// }

export default authenticationAPI;