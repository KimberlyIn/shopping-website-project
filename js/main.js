$(document).ready(function(){
	$('#menu-trigger').click(function(e){
		e.preventDefault();
		$('.row').fadeToggle();

	});
});