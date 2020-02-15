

let input = "X";
let play= document.getElementById("player");

function box(num){
	let rows= document.getElementById("row"+num);

	if(rows.innerHTML==""){
		rows.innerHTML= input;
		result();

		 checkInput();
		 play.innerHTML= input+"'s turn";
		 
	}

}
function checkInput(){
	if(input== "X"){return input="O";}
					 
	else{ return input="X"; }
}

function getbox(no){
	return document.getElementById("row"+no).innerHTML;
}

function checkmove(a,b,c,m){
	if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
		return true;
	else return false;

}

function result(){

	if(checkmove(1,2,3,input)|| checkmove(4,5,6,input) || checkmove(7,8,9,input) || checkmove(1,4,7,input) || checkmove(2,5,8,input) || checkmove(3,6,8,input) ||
	checkmove(1,5,9,input) || checkmove(7,5,3,input))
	{
		play.innerHTML= input +" is Winner !!!";
		for(let i=1; i<=9; i++){
			document.getElementById("row"+i).innerHTML="";
		}
		throw "game end";
	}
	else{

		if(getbox(1)!="" && getbox(2)!=""  && getbox(3)!="" && getbox(4)!="" 
			&& getbox(5)!="" && getbox(6)!="" && getbox(7)!="" && getbox(8)!="" 
			&& getbox(9)!="") {

				play.innerHTML=" Oh!! Match Tied.";
				throw "match ties";	

		}

	}
}