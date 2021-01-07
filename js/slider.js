//ALMACENAR SLIDER EN UNA VARIABLE 
var slider = $('#slider');

//ALMACENAR LOS BOTONES EN UNA VARIABLE
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//MOVER LA ULTIMA IMÁGEN AL PRIMER LUGAR
$('#slider section:last').insertBefore('#slider section:first');

//MOSTRAR LA PRIMERA IMAGEN CON UN MARGEN DE -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
			$('#slider section:first').insertAfter('#slider section:last');
			slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
			$('#slider section:last').insertBefore('#slider section:first');
			slider.css('margin-left', '-'+100+'%');
	});
}

siguiente.on('click',function() {
	moverD();
});

anterior.on('click',function() {
	moverI();
});

//REPRODUCCIÓN AUTOMATICA
function autoplay() {
	interval = setInterval(function() {
		moverD();
    }, 6000);
}

autoplay();
