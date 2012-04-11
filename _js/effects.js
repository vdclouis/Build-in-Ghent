$(function () {
	//jquery test
	console.log("It's Alive!");

	//gives the first nav element current status (red color)
	$('#nav li:first-child').addClass('current');

	//hides the second page
	$('#parkeergebouw').hide();
	
	//navigation with the bulletnavs
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

	$('#contactsmall p').click(function() {
		$('#contact').animate({
			'width':'100%',
			'height':'100px',
			'border-top-left-radius': '50px',
			'border-top-right-radius': '50px',
			'right':'0',
		}, 500);
		$('#contactbig').fadeIn(500);
		console.log('contact clicked!');
		return false;
	});
	
	$('#collapse').click(function() {
		$('#contactbig').fadeOut(500);
		$('#contact').animate({
			'width':'50px',
			'height':'10px',
			'border-top-left-radius': '10px',
			'border-top-right-radius': '10px',
			'right': '50px'
		}, 500);
		console.log('contact hidden!');
		return false;
	});
});