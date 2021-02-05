$(document).ready(function() {
	$('.image-frame').hover(function(){
			$(this).find('.image-caption').slideToggle('slow');
  		}, function(){
			$(this).find('.image-caption').slideToggle('slow');
	});
});