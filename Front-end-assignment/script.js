

// Fetching name,email and website of sidebar from api
fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{ return response.json()})
.then((alldata)=>{ 
	
	const name= alldata.map((item,i)=>{
		return alldata[i].name + "<br>";

	})
	name.sort();

	const email= alldata.map((item,i)=>{

		return alldata[i].email + "<br>";

	})

	const website= alldata.map((item,i)=>{

		return alldata[i].website + "<br>";

	})
// Displaying Sidebar User List

	 document.getElementById("user_names").innerHTML=
	 			`	<h2>Artists</h2>
	 				<p id="n0">${name[0]}</p>
	 				<div id="slide0">
	 					<b>${name[0]}</b>
	 					Email: ${email[0]}
	 					Website: ${website[0]}
	 				</div>

	 				<p id="n1">${name[1]}</p>
	 				<div id="slide1">
	 					<b>${name[1]}</b>
	 					Email: ${email[1]}
	 					Website: ${website[1]}
	 				</div>

	 				<p id="n2">${name[2]}</p>
	 				<div id="slide2">
	 					<b>${name[2]}</b>
	 					Email: ${email[2]}
	 					Website: ${website[2]}
	 				</div>

	 				<p id="n3">${name[3]}</p>
	 				<div id="slide3">
	 					<b>${name[3]}</b>
	 					Email: ${email[3]}
	 					Website: ${website[3]}
	 				</div>

	 				<p id="n4">${name[4]}</p>
	 				<div id="slide4">
	 					<b>${name[4]}</b>
	 					Email: ${email[4]}
	 					Website: ${website[4]}
	 				</div>

	 				<p id="n5">${name[5]}</p>
	 				<div id="slide5">
	 					<b>${name[5]}</b>
	 					Email: ${email[5]}
	 					Website: ${website[5]}
	 				</div>

	 				<p id="n6">${name[6]}</p>
	 				<div id="slide6">
	 					<b>${name[6]}</b>
	 					Email: ${email[6]}
	 					Website: ${website[6]}
	 				</div>

	 				<p id="n7">${name[7]}</p>
	 				<div id="slide7">
	 					<b>${name[7]}</b>
	 					Email: ${email[7]}
	 					Website: ${website[7]}
	 				</div>

	 				<p id="n8">${name[8]}</p>
	 				<div id="slide8">
	 					<b>${name[8]}</b>
	 					Email: ${email[8]}
	 					Website: ${website[8]}
	 				</div>

	 				<p id="n9">${name[9]}</p>	
	 				<div id="slide9">
	 					<b>${name[9]}</b>
	 					Email: ${email[9]}
	 					Website: ${website[9]}
	 				</div>
	 	    	 `
// Showing Dropdown popup on hovering on the user list in the sidebar
	$(document).ready(function(){

		$("#n0").hover(function(){
    		$("#slide0").slideDown("slow");
  		},
 		 function(){
    		$("#slide0").slideUp("slow");
  		});


  		$("#n1").hover(function(){
    		$("#slide1").slideDown("slow");
  		},
 		 function(){
    		$("#slide1").slideUp("slow");
  		});


  		$("#n2").hover(function(){
    		$("#slide2").slideDown("slow");
  		},
 		 function(){
    		$("#slide2").slideUp("slow");
  		});

  		$("#n3").hover(function(){
    		$("#slide3").slideDown("slow");
  		},
 		 function(){
    		$("#slide3").slideUp("slow");
  		});

  		$("#n4").hover(function(){
    		$("#slide4").slideDown("slow");
  		},
 		 function(){
    		$("#slide4").slideUp("slow");
  		});

  		$("#n5").hover(function(){
    		$("#slide5").slideDown("slow");
  		},
 		 function(){
    		$("#slide5").slideUp("slow");
  		});

  		$("#n6").hover(function(){
    		$("#slide6").slideDown("slow");
  		},
 		 function(){
    		$("#slide6").slideUp("slow");
  		});

		$("#n7").hover(function(){
    		$("#slide7").slideDown("slow");
  		},
 		 function(){
    		$("#slide7").slideUp("slow");
  		});

		$("#n8").hover(function(){
    		$("#slide8").slideDown("slow");
  		},
 		 function(){
    		$("#slide8").slideUp("slow");
  		});

		$("#n9").hover(function(){
    		$("#slide9").slideDown("slow");
  		},
 		 function(){
    		$("#slide9").slideUp("slow");
  		});

	});			 

  });

// Fetching all Post from api and displaying it on div
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
.then((response)=>{ return response.json()})
.then((allpost)=>{ 

	var post0= document.getElementById("post0");
	var post1= document.getElementById("post1");
	var post2= document.getElementById("post2");
	var post3= document.getElementById("post3");
	var post4= document.getElementById("post4");
	var post5= document.getElementById("post5");
	var post6= document.getElementById("post6");
	var post7= document.getElementById("post7");
	var post8= document.getElementById("post8");
	var post9= document.getElementById("post9");
	
	post0.innerHTML=`<img src="images/image1.webp" alt="img"><br><br>
							<h2>${allpost[0].title}</h2>
							${allpost[0].body}
						 `

	post1.innerHTML= `
						<img src="images/image2.jpg" alt="img"><br><br>
						<h2>${allpost[1].title}</h2>
						${allpost[1].body} 
						`
						

	post2.innerHTML= `<img src="images/image3.jpg" alt="img"><br><br>
						<h2>${allpost[2].title}</h2>
						${allpost[2].body} `


	post3.innerHTML= `<img src="images/image3.jpg" alt="img"><br><br>
						<h2>${allpost[3].title}</h2>
						${allpost[3].body} `

	post4.innerHTML= ` <img src="images/image2.jpg" alt="img"><br><br>
						<h2>${allpost[4].title}</h2>
						${allpost[4].body} `

	post5.innerHTML= ` <img src="images/image1.webp" alt="img"><br><br>
						<h2>${allpost[5].title}</h2>
						${allpost[5].body} `

	post6.innerHTML= ` <img src="images/image1.webp" alt="img"><br><br>
						<h2>${allpost[6].title}</h2>
						${allpost[6].body} `


	post7.innerHTML= ` <img src="images/image2.jpg" alt="img"><br><br>
						<h2>${allpost[7].title}</h2>
						${allpost[7].body} `

	post8.innerHTML= `<img src="images/image1.webp" alt="img"><br><br>
						<h2>${allpost[8].title}</h2>
						${allpost[8].body} `

	post9.innerHTML= ` <img src="images/image2.jpg" alt="img"><br><br>
						<h2>${allpost[9].title}</h2>
						${allpost[9].body} `
			
// When Clicking on the userlist on sidebar then showing the post according to 
	// that user

$(document).ready(function(){

	$("#n0").click(function(){
		$(".content").hide();
		$("#post0").show();

	});

	$("#n1").click(function(){

		$(".content").hide();
		$("#post1").show();

	});

	$("#n2").click(function(){

		$(".content").hide();
		$("#post2").show();

	});

	$("#n3").click(function(){
		$(".content").hide();
		$("#post3").show();

	});

	$("#n4").click(function(){
		$(".content").hide();
		$("#post4").show();

	});

	$("#n5").click(function(){

		$(".content").hide();
		$("#post5").show();

	});

	$("#n6").click(function(){
		$(".content").hide();
		$("#post6").show();

	});

	$("#n7").click(function(){
		$(".content").hide();
		$("#post7").show();

	});

	$("#n8").click(function(){

		$(".content").hide();
		$("#post8").show();

	});

	$("#n9").click(function(){
		$(".content").hide();
		$("#post9").show();

	});

});

 });

// fetching user comments from api and displaying it

fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
.then((response)=>{ return response.json() })
.then((comments)=>{

	val="";
	for( var x in comments){

		val+= `<b>${comments[x].name}</b> <br> <i>${comments[x].email}</i><br>
			 ${comments[x].body} <br><br>` ;
	}
	

	document.getElementById("allcomments").innerHTML=val;

})


// Clicking Next-Previous Button and post wil change accordingly

$(document).ready(function(){

	$('.back').show();
	$('.next').show();
	$('#post0').show();
	$('.end1').hide();

	var counter = 0;
	$('body').on('click','.next', function() { 
		$('.content').hide();
		$('.end1').hide();
    	counter++;	
	$('#post'+counter+'').show();
    
	if(counter > 9) {
		$('.content-holder').hide();
		$('.end').show();
	};
	
});

$('body').on('click', '.back', function() { 
    counter--;
    $('.content').hide();
    var id = counter;    
	$('#post'+id).show();

    if(counter<0){
          $('.end1').show();
    }
});

$('body').on('click', '.edit-previous', function() { 
	$('.end').hide();
    $('.content-holder').show();
    $('#post9').show();
});

});

// Form Validation

function formvalidation(){
		let myemail=document.getElementById("exampleFormControlInput1").value;
		let mycomment=document.getElementById("exampleFormControlTextarea1").value;

		if(myemail==""){

			alert("Please Fill Email ID");
			return false;
		}
 		else if(mycomment=="" || mycomment.length<10){
 			alert("Please Write Comment and it should be atleast 10 characters");
 				return false;
 		}
 		else{
 			alert("Comment Submitted");
 		}
	}
	








