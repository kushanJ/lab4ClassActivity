console.log("-In js-");




(function(){
	"use strict"


	


	
	
	var contact = document.getElementsByClassName("contact")[0];
	contact.innerHTML = "Contact";
	
	var contact = document.getElementsByClassName("project")[0];
	contact.innerHTML = "Projects"

	var contact = document.getElementsByClassName("home")[0];
	contact.innerHTML = "Home"

	
	var pp = document.getElementsByClassName("pp")[0];
console.log(pp)
	pp.innerHTML = "Privacy Policy"
	
	
	var EM = document.getElementsByClassName("EM")[0];
console.log(EM)
	EM.innerHTML = "Email Webmaster"				
	

	var url = window.location.pathname.split("/");
	console.log(url[url.length - 1])
	if(url[url.length - 1] === "index.html"){
	//	homeText();		
	} else if(url[url.length - 1] === "project.html"){
	//	projectText();
	} else if(url[url.length - 1] === "contact.html"){
		contactText();
	}else{
		
	}
	
	function contactText(){
	var contact = document.getElementById("contactME");
	contact.innerHTML = "Contact Me:-"
	/*
		var name = document.getElementById("name");
		name.innerHTML = "Name"
	
	var phone_no = document.getElementById("phone_no");
	phone_no.innerHTML = "Phone Number"
	*/
	var email = document.getElementById("email");
	email.innerHTML = "Email"
	var message = document.getElementById("message");
	message.innerHTML = "Password"
	var submit = document.getElementById("submit");
	submit.innerHTML = "Log in";
	
	console.log("pass");
	
	// array to show the output of user entered data	
	var data = {};
	// click event on submit referrence
	console.log("submit")
	submit.addEventListener("click", function(e){
		e.preventDefault();


		console.log(e.target.id);
	

		console.log("email = " + email.nextElementSibling.children[0].value);
		data.username =  email.nextElementSibling.children[0].value

		console.log("message = " + message.nextElementSibling.children[0].value);
		data.password =  message.nextElementSibling.children[0].value
		//showing the stored data
		console.log(data);

		
		var user = new Newuser(data.username, data.password)	
		function Newuser(name, password){
			this.name = name;
			this.password = password;
			this.prototype.info = function(){
				console.log("User ID: " + this.name);
		                console.log("Password: " + this.password);
			}
		}

		
	});


	}

	function homeText(){
	console.log("In home")	

	var h1 = document.getElementById("heading1");
	h1.innerHTML = "Welcome!"+"<br>"+" To my portfolio";
	
	var h2 = document.getElementById("heading2");
	h2.innerHTML = "Spritual developer and hacker";

	var intro_hb = document.getElementById("intro_hb");
	intro_hb.innerHTML = "Front-End Developer";


	var intro_para = document.getElementById("intro_para")
	intro_para.innerHTML = "I am Kushan, student pursuing Software Engineering Technician Course from Centennial College in Canada. With 2 years of global experience in Javascript and python, I am currently working as a front-end developer for a London based startup which is at it's initial phase. I have hands on expertise in IT  and I enjoy build games in python programming language. I have also done courses in online courses in Big Data and Hadoop. Currently I am pursuing analytic and database courses from coursera."+"<br>"+" I have a passion for technology and I am looking forward to enhance my skills and learn about hacking with my studies.I can be contacted on kushan.joshi@gmail.com "
	intro_para.style.color = "#000";
	
	var projectLink = document.getElementById("projectLink");
	projectLink.innerHTML = "Take tour"

	var pro_txt = document.getElementById("pro_text");
	pro_txt.innerHTML = "More >>"

	}

	function projectText(){
			console.log("In roject")
		var proIntro = document.getElementById("proIntro");
		proIntro.innerHTML = "Project WORK!"

	var more = document.getElementsByClassName("more");
	more.innerHTML = "More >>"
	var hprotask1 =  document.getElementById("hprotask1");
	var prodesc1 = hprotask1.nextElementSibling;
	prodesc1.innerHTML = "Famous game pong build in python language, it a multiplayer fun game. Click on more, hit the play button in the webpage and you are good to go"
	
	console.log(prodesc1);
	hprotask1.innerHTML = "Famous Game Pong";
	var hprotask2 =  document.getElementById("hprotask2");
	var prodesc2 = hprotask2.nextElementSibling;
	prodesc2.innerHTML = "Famous game RiceRocks build in python language, it is a single player game. You got 3 lives destroy all the rocks if you can. Click on more, hit the play button in the webpage and you are good to go."
		console.log(hprotask2);
		hprotask2.innerHTML = "Famous Game Rice Rock";
	var hprotask3 = document.getElementById("hprotask3");
	var prodesc3 = hprotask3.nextElementSibling;
		console.log(hprotask3);
		hprotask3.innerHTML = "Coming Soon";
	prodesc3.innerHTML = "An innovation Idea is coming to server you winthin 8 months, just wait and count the countdown."

	}

		

})();


	
