'use strict';

/*
let hoy = new Date();
let birthday = new Date(1995,9,8);
let edad = parseInt((hoy.getTime() - birthday.getTime()) / 31536000000);
*/
$("#edad").append(23 + " años");



/*
$(".myButton").on("mousedown mouseup mouseleave", function(e){
    $(this).toggleClass( "active", e.type === "mousedown" );
});
*/

let letreros = document.getElementsByClassName('letrero');
for (let letrero of letreros) {
	letrero.onclick = () => {
		letrero.style.backgroundColor = "rgba(255,255,255, 30%)";
		setTimeout(function() {
        	letrero.style.backgroundColor = "rgb(204,255,255)";
    	}, 100);

	}
	
}

//$('#download').attr({target: '_blank', href: '../files/Guillermo_Llorente_CV.docx'});

let isAnimating = false; //preventing from spamming clicks

$('.letrero').on('click', function(){

	if (isAnimating) {
        return;
    }
    isAnimating = true;

	let id = $( this ).data( "superId" );
	
	if($( id ).css( "height" ) != "23px"){

		let maxima = $(id).height(); // takes height even when it is auto
		
		$(id).css({maxHeight: maxima +"px"}); // maxHeight is saved

		$(id).css({overflow: "hidden"});
		$(id).animate({height: "23px"}, 500);
		/*$(id).css({height: "30px", overflow: "hidden" });*/


		setTimeout(function() {
        	isAnimating = false;
    	}, 505);
	}else{
		//maxHeight recovered to give height
		$(id).animate({height: $(id).css( "maxHeight" )}, 500);
		//animate + auto doesn't work, animate needs a fixed quantity
		//$(id).css({height: "auto"});
		setTimeout(function() {
        	isAnimating = false;
    	}, 505);
	}
	
	
});



$('.link').on('click', function(){
	let link = $(this).data('link');
	if(link == ''){
		alert('no implementado');
	}else{
		var win = window.open(link, '_blank');
		win.focus();
	}
	
});


let userDisplay = false;
document.getElementsByClassName('fa-user-circle')[0].onclick = function(){
	if (isAnimating) {
        return;
	}
	isAnimating = true;

	if(userDisplay == false){
		userDisplay = true;
		document.getElementById('informacion').style.display = 'inline-block';
		$('#informacion').animate({
			width: '350px'
		}, 500, 'swing');
		setTimeout(function() {
        	isAnimating = false;
    	}, 505);
	}else{
		userDisplay = false;
		$('#informacion').animate({
			width: '0px',
			//display: 'none' no funciona
		}, 500, 'swing');
		setTimeout(function() {
			isAnimating = false;
			document.getElementById('informacion').style.display = 'none';
    	}, 505);
	}

}















