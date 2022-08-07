console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let pic = document.querySelector("#cat");
pic.addEventListener("mouseover", () => { alert("You are so sweet!")})