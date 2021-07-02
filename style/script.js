function tvClick(){
	let myButtonClasses = document.getElementById("tv").classList;
	myButtonClasses.add("active");
	myButtonClasses = document.getElementById("movies").classList;
	myButtonClasses.remove("active");

}

function moviesClick(){
	let myButtonClasses = document.getElementById("movies").classList;
	myButtonClasses.add("active");
	myButtonClasses = document.getElementById("tv").classList;
	myButtonClasses.remove("active");
}

function button_click(){
	let myButtonClasses = document.getElementById("button_id").classList;
	let login = document.getElementById("authorization").classList;
	if(myButtonClasses[1]=='button_enter'){
		myButtonClasses.remove("login_enter");
		myButtonClasses.remove("button_enter");
		myButtonClasses.add("login_exit");
		myButtonClasses.add("button_exit");
		login.add("authorization_click");
	}
	else{
		myButtonClasses.remove("login_exit");
		myButtonClasses.remove("button_exit");
		myButtonClasses.add("login_enter");
		myButtonClasses.add("button_enter");
	}

}