
var audio;
var width = window.innerWidth;
var height = window.innerHeight;

$(document).ready(function() {
	$('#loading').hide();

	$('#background').append('<img id="wata" src="assets/wata.gif" />')
	$('#wata').css({
		width:width,
		height:height
	})

	insert_ice()
	insert_title();
	insert_sound();
	insert_credits();

	$(document).click(function(){ audio.play()})
})

function insert_ice() {
	var ice = $('<img src="assets/giphy-9.gif">');
	ice.appendTo('body')
	ice.css({
		position:'absolute',
		left:width/2-(320/2),
		top:height/2-(120/2)
	})
}
function insert_credits() {
	var el = $('<div>');
	el.html("<a href='https://www.instagram.com/emmabrito/'>emma</a>, karo, andrea")
	el.appendTo('body')
	el.css({
		position:'absolute',
		left:width-250,
		top:height-50,
		fontSize:20,
		background: 'black',
		color: 'white',

	})
	
}


function insert_title() {
	var el = $('<div>');
	el.html('an intimate moment with a block of ice')
	el.appendTo('body')
	el.css({
		cursor:'pointer',
		position:'absolute',
		left:width*0.2,
		top:100,
		fontSize:30,
		background: 'black',
		color: 'white',

	})
	var el_1 = $('<div>');
	el_1.appendTo(el)
	el_1.html('clickforsound')
	el_1.css({fontSize:15})
	
	
}

function insert_sound() {
	audio = new Audio('assets/ice_audio.mp3');

}
