$(function () {
	$('#nav li:first-child').addClass('current');

	$('#parkeergebouw').hide();
	
	console.log('test');
	$('.bulletnav .rightbullet').click( function () {
		$('#gerechtsgebouw').hide();
		$('#parkeergebouw').fadeIn(1000);
		$(this).animate({ backgroundColor: '#2096d3'}, 500);
		$('.leftbullet').animate({ backgroundColor: '#b2b2b2'}, 500);
		console.log('rightbullet clicked!');
		return false;
	});
	$('.bulletnav .leftbullet').click( function () {
		$('#parkeergebouw').hide();
		$('#gerechtsgebouw').fadeIn(1000);
		$(this).animate({ backgroundColor: '#2096d3'}, 500);
		$('.rightbullet').animate({ backgroundColor: '#b2b2b2'}, 500);
		console.log('leftbullet clicked!');
		return false;
	});
	
	$('#contactbig').hide();
//	$('#contactsmall').click(function() {
//		$('#contactbig').toggle("fold", { direction: "vertical" }, 1000);
//		return false;
//	});
//	$('#collapse').click(function() {
//		$('#contactbig').toggle("fold", { direction: "vertical" }, 1000);
//		return false;
//	});

	$('#contactsmall').click(function() {
		$(this).animate({
			'width':'400px',
			'height':'100px'
		}, 500);
		return false;
	});
});