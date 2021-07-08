window.onload = function(){
	let myButtonClasses_exit = document.getElementById("button_id_exit").classList;
	let myButtonClasses_enter = document.getElementById("button_id_enter").classList;
	if(localStorage.length > 0){
		let user_name = localStorage.key(0);
		let user = document.getElementById("user");
		user.innerHTML = user_name.replace(/&/g, '&amp;').replace(/</g, '&lt;');
		myButtonClasses_exit.remove("hide");
		myButtonClasses_enter.add("hide");
	}
	else{
		myButtonClasses_exit.add("hide");
		myButtonClasses_enter.remove("hide");
	}
};

function tvClick(){
	let myButtonClasses = document.getElementById("tv").classList;
	myButtonClasses.add("active");
	myButtonClasses = document.getElementById("movies").classList;
	myButtonClasses.remove("active");
	let tv = document.getElementById("main-tv").classList;
	let movies = document.getElementById("main-movies").classList;
	movies.add("main-movies-none");
	tv.add("main-tv-active");
}

function moviesClick(){
	let myButtonClasses = document.getElementById("movies").classList;
	myButtonClasses.add("active");
	myButtonClasses = document.getElementById("tv").classList;
	myButtonClasses.remove("active");
	let tv = document.getElementById("main-tv").classList;
	let movies = document.getElementById("main-movies").classList;
	movies.remove("main-movies-none");
	tv.remove("main-tv-active");
}

function button_click_enter(){
	let myButtonClasses = document.getElementById("button_id_enter").classList;
	let myButtonClasses_exit = document.getElementById("button_id_exit").classList;
	let wrapper = document.getElementById("wrapper").classList;
	
	myButtonClasses_exit.remove("hide");
	myButtonClasses.add("hide");
	wrapper.add("modal-wrapper-click");
	
}
function button_click_exit(){
	let myButtonClasses = document.getElementById("button_id_enter").classList;
	let myButtonClasses_exit = document.getElementById("button_id_exit").classList;
	let user_name="";
	let user = document.getElementById("user");
	user.innerHTML = user_name.replace(/&/g, '&amp;').replace(/</g, '&lt;');
	myButtonClasses_exit.add("hide");	
	myButtonClasses.remove("hide");
}


function button_login_click(){
	let login = document.getElementById("login").value;
	let pass = document.getElementById("password").value;
	let user_name;
	if(login == "" && pass == "")
		alert("Вы не ввели логин и пароль!")
	else if(login == "")
		alert("Вы не ввели логин!")
	else if(pass == "")
		alert("Вы не ввели пароль!")
	else{		
		let login_mas = login.split(' ');
		if(login_mas.length > 1)
			user_name = login_mas[0] + " " + login_mas[1][0] + ".";
		else
			user_name=login;
		let wrapper = document.getElementById("wrapper").classList;
		wrapper.remove("modal-wrapper-click");
		let user = document.getElementById("user");
		user.innerHTML = user_name.replace(/&/g, '&amp;').replace(/</g, '&lt;');
		let check_box = document.getElementById("radio");
		if(check_box.checked){
			localStorage.clear();
			localStorage.setItem(user_name,pass);
		}
	}
	document.getElementById("login").value="";
	document.getElementById("password").value="";
}
	


function testSearch(){
	
	let elasticItems = document.querySelectorAll(".movies-new li"); // берем все элементы с тегом li в классе movies-new
	elasticItems.forEach(function(elem){ // делаем все объекты видимыми(связано с тем, что при вводе второй и более буквы в elasticItems попадает не только название, 
		elem.classList.remove("hide");	 // но и описание фильма, поэтому может выдать лишний фильм
	});
	let val = document.getElementById("search").value.trim().toLowerCase(); // считываем что ввел пользователь, удаляем пробелы сначала и конца строки, делаем нижний регистр
	let el = document.getElementById("movies-new").classList;
	let i = 0; // переменная используется для того, чтобы при выводе результата поиска, первый фильм не совершал отступ слевого края
	if(val != ""){ // проверяем не пустое ли значение ввода
		elasticItems.forEach(function(elem){ // перебираем каждый элемент с тегом li в классе movies-new
			if(elem.innerText.toLowerCase().search(val) == -1) { // достаем из элемента лишь текстовую часть и изменяем на нижний регистр и ищем подстроку со значением val
				elem.classList.add("hide"); // если не находим, то делаем блок невидимым
			}
			else{
				i++;
				elem.classList.remove("hide"); // делаем блок видимым
				if(i != 1){
					elem.classList.add("flex-margin"); // если фильм, который нашли не первый по порядку, то делаем слева отступ
				}
				else{
					elem.classList.remove("flex-margin"); // иначе ставим в самое начало
				}
			}
		});
		el.add("flex-start"); // смена space between на flex-start, чтобы нужные нам фильмы показывались с самого начала строки с установленным отступом, а не расставлялись равномерно по всем блоку
	}
	else { // если строка пустая, то возвращаем всё обратно
		elasticItems.forEach(function(elem){
			elem.classList.remove("hide");
			elem.classList.remove("flex-margin");
		});
		el.remove("flex-start");
	}

}

function maxlength_login(){
	let val = document.getElementById("login").value;
	let val_new;
	let i=0;
	if(val.length > 13){
		alert("Максимальная длина ввода данных 13 символов");
		val_new = val.slice(0,-1);
		document.getElementById("login").value = val_new;
	}
}

function maxlength_pass(){
	let val = document.getElementById("password").value;
	let val_new;
	let i=0;
	if(val.length > 13){
		alert("Максимальная длина ввода данных 13 символов");
		val_new = val.slice(0,-1);
		document.getElementById("password").value = val_new;
	}
}