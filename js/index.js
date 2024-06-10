let namesignup = document.getElementById('namesignup')
let emailInput = document.getElementById('loginEmail')
let passwordInput = document.getElementById('loginPassword')

const rname = /^[a-zA-Z0-9]{4,25}$/;
const rpaswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,15}$/;
const remail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

let personalData = []

if (localStorage.getItem('userdata')) {
	personalData = JSON.parse(localStorage.getItem('userdata'))
}
// console.log("AgghfghDGDG".toLowerCase())
function addsignup() {

	if (emailCheck()) {

		let login = {
			email: emailInput.value.toLowerCase(),
			password: passwordInput.value.toLowerCase(),
			username: namesignup.value,
		}
		personalData.push(login)
		localStorage.setItem('userdata', JSON.stringify(personalData))
	}
	namesignup.value = ""
	clear();
}

function emailCheck() {
	for (let i = 0; i < personalData.length; i++) {
		if (emailInput.value.toLowerCase() === personalData[i].email) {

			console.log("arleadyacount");
			areadyAcount()
			return false;


		}

	}
	if (emailInput.value.toLowerCase() != personalData.email && rpaswd.test(passwordInput.value) && rname.test(namesignup.value) && remail.test(emailInput.value)) {

		console.log("succse true");
		setTimeout(() => {


			window.open("index.html", "_self");
		}, 2000)
		successMessage();

		return true;


	}
	else {
		console.log("error");
		errorAcount()
		return false;

	}
}



function clear() {

	emailInput.value = ""
	passwordInput.value = ""
}


function addlogin() {

	for (let i = 0; i < personalData.length; i++) {
		if (
			emailInput.value.toLowerCase() === personalData[i].email &&
			passwordInput.value === personalData[i].password
		) {


			sessionStorage.answer = JSON.stringify(i);

			setTimeout(() => {
				
				
				window.open("home.html", "_self");
			}, 2000)
			waitMessage();
		}
		
			else {
				userNotFound()
			// areadyAcount()
		}


	}
	clear();

}
function fsave() {


	let saved = JSON.parse(sessionStorage.answer);

	document.getElementById("demo").innerHTML = "Welcome" + " " + personalData[saved].username;
}


function areadyAcount() {
	swal({
		title: "Try another Email",
		text: "The Account Is Already Exists !",
		icon: "error",
		button: "Ok",
	});
}
function successMessage() {
	swal({
		title: "Success",
		text: "please wait a fiew seconds to go to login !",

		icon: "success",
		button: "Login",
	});
}
function waitMessage() {
	swal({
		title: "Success",
		text: "please wait a fiew seconds !",

		icon: "success",
		button: "Go To Home",
	});
}
function errorAcount() {
	swal({
		title: "Try Again",
		text: `Name must be 4 to 25
		email must Be Valid
		password must be 3 to 15 characters must contain at least one numeric digit and a special character `,
		icon: "error",
		button: "Ok",
	});
}


function userNotFound() {
	swal({
		title: "user not found ",
		// text: `email must has'@'
		// password must be 3 to 15 characters must contain at least one numeric digit and a special character ``,
		icon: "error",
		button: "OK",
	});
}
