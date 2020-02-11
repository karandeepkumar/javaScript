
var validation= ()=>{

	let name=document.getElementById("myname").value;
	let email=document.getElementById("myemail").value;
	let password=document.getElementById("mypass").value;
	let mobile=document.getElementById("mymob").value;
	let gender=document.getElementById("mymob").value;



	let mobvalidate= /^[0-9]{10}$/;
	let emailvalidate= /^[a-zA-Z0-9.]{3,}@[a-zA-Z]{3,}[.a-z]{2,7}$/;

	if(name==""){
			document.getElementById("nameerror").innerHTML="Please fill name";
		 	return false;
			}
 
	if((name.length<=2)||(name.length>10)){
		document.getElementById("nameerror").innerHTML="Name must be between 2 to 10 char";
		return false;
	}	
	else{
		document.getElementById("nameerror").innerHTML="Correct";
		}	

	if(email==""){
		document.getElementById("emailerror").innerHTML="Please fill emal id";
		 return false;
	}
	if(emailvalidate.test(email)){
		document.getElementById("emailerror").innerHTML="Correct";
		}
	else{
		document.getElementById("emailerror").innerHTML="Please fill valid email id";
		 return false;
			}	
			
	if(password==""){
		document.getElementById("passerror").innerHTML="Please fill password";
		 return false;
	}
	if(password.length<5){
		document.getElementById("passerror").innerHTML="password must be atleast 5 char";
		 return false;
		}
	else{
		document.getElementById("passerror").innerHTML="Correct";
		}

	if(mobile==""){
		document.getElementById("numbererror").innerHTML="Please fill mobile Number";
		 return false;
	}
	if(mobvalidate.test(mobile)){
		document.getElementById("numbererror").innerHTML="Correct";
	}
	else{
		document.getElementById("numbererror").innerHTML=" Please write digits only with max-min 10 digits ";
		 return false;
	}
	// if(isNAN(mobile)){
	// 	document.getElementById("numbererror").innerHTML="Please fill Number only";
	// 	 return false;
	// }


}


// 


































// document.write("Heelo I am Karan");



// var c= 10+20;

// console.log(c);
// console.log("HI");
// var name="Karan";
// console.log(name);

// function sum(){
// 	console.log("This is not possible");
// }

// function add(){
// 	var d=10;
// 	var e=22;	
// 	var c=d+e;
// 	console.log(c);
// }
// function myfun(a,b){

// 	return a+b;
// }

// var name=["karan","banty","Rinki","Pavi"];

// var mynames= name[0];
// console.log(mynames);

// if(a>b){
// 	console.log("a is greater than e")

// }
// else{
//  	console.log("a is not greater than e")
// }

// var a=10;
// var b=15;

// while(a<b){

// console.log("I am A");
// 	a++;

// }
// switch(a){

// 	case 0 : 120;
// 		break;
// 	case 1 : 10;
// 		break;
// 	default: "Nothing";	

// 	console.log(a);
// }

// for(i=0;i<=10;i++){

// 	console.log("The Number is" + " " + i );
// }

// myhome=()=>{

// 	var hometown="Jalandhar";
// 	console.log(hometown);

// }

// let car= "Ford Audi ";
//  let carstr=car.length;
//  console.log(carstr);

// let myindex=car.indexOf("Audi");
//  console.log(myindex);

// let heading= document.getElementById("head").innerHTML;
// console.log(heading);

// document.getElementById("head").innerHTML="This is updated heading";

// let heading1= document.getElementsByClassName("list").innerHTML;
// console.log(heading1);

// document.getElementById("post1").innerHTML="FB is one of the best Social Platform";


