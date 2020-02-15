
function validating(){
				var myName= document.getElementById("name").value;
				var myMobile= document.getElementById("mobile").value;
				var myPass= document.getElementById("pass").value;

				var namePattern= /^\w{4,}$/gmi;
				var mobilePattern= /^\d{10}$/gmi;				 
				var passPattern= /^\S{6,20}$/gmi;

				if(namePattern.test(myName)){
				
				 	myName= document.getElementById("nameerr").innerHTML="Correct";
					}
					else{
						document.getElementById("nameerr").innerHTML="**Name must be atleast 4 Chars";
						return false;
					}

				if(mobilePattern.test(myMobile)){
				 	myMobile= document.getElementById("mobileerr").innerHTML="Correct";
					}
					else{
						document.getElementById("mobileerr").innerHTML="Number should be min and max 10 digits";
						return false;
					}

				if(passPattern.test(myPass)){
				 	myPass= document.getElementById("passerr").innerHTML="Correct";
				 		alert("Form Submitted");
					}
					else{
						document.getElementById("passerr").innerHTML="Password should between 6 to 20 char";
						return false;
					}
			}		