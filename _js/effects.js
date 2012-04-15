$(function () {
	//jquery test
	console.log("It's Alive!");

	//gives the first nav element current status (red color)
	$('#nav li:first-child').addClass('current');
	
	// ---------------------------- //

	//hides the second page 'parkeergebouw'
	$('#parkeergebouw').hide();
	
	//navigation with the bulletnavs
	$('#gebouwennav .rightbullet, #gebouwennav .rightbullet a').click( function () {
		$('#gerechtsgebouw').hide();
		$('#parkeergebouw').fadeIn(1000);
		$('#gebouwennav .rightbullet a').css("background-position","0 -26px");
		$('.leftbullet a').css("background-position","0 0");
		console.log('rightbullet clicked!');
		return false;
	});
	$('#gebouwennav .leftbullet, #gebouwennav .leftbullet a').click( function () {
		$('#parkeergebouw').hide();
		$('#gerechtsgebouw').fadeIn(1000);
		$('#gebouwennav .leftbullet a').css("background-position","0 -26px");
		$('.rightbullet a').css("background-position","0 0");
		console.log('leftbullet clicked!');
		return false;
	});
	
	// ---------------------------- //
	
	//hides the second page 'contactform'
	$('#contactform').hide();
	
	//navigation with the bulletnavs
	$('#praktischnav .rightbullet, #praktischnav .rightbullet a').click( function () {
		$('#contactmap').hide();
		$('#contactform').fadeIn(1000);
		$('#praktischnav .rightbullet a').css("background-position","0 -26px");
		$('.leftbullet a').css("background-position","0 0");
		console.log('rightbullet clicked! -> contactform');
		return false;
	});
	$('#praktischnav .leftbullet, #praktischnav .leftbullet a').click( function () {
		$('#contactform').hide();
		$('#contactmap').fadeIn(1000);
		$('#praktischnav .leftbullet a').css("background-position","0 -26px");
		$('.rightbullet a').css("background-position","0 0");
		console.log('leftbullet clicked! -> contactmap');
		return false;
	});
	
	// ---------------------------- //
	
	$('#contactbig').hide();

	$('#contact').click(function() {
		$('#contact').animate({
			'width':'100%',
			'height':'50px',
//			'border-top-left-radius': '10px',
//			'border-top-right-radius': '10px',
			'right':'0',
			'padding': '0',
		}, 500);
		$('#contactsmall').hide();
		$('#contactbig').fadeIn(500);
		console.log('contact clicked!');
		return false;
	});
	$('#collapse').click(function() {
		$('#contactbig').fadeOut(500);
		$('#contact').animate({
			'width':'60px',
			'height':'15px',
//			'border-top-left-radius': '10px',
//			'border-top-right-radius': '10px',
			'right': '50px',
			'padding': '5px'
		}, 500);
		$('#contactsmall').fadeIn(500);
		console.log('contact hidden!');
		return false;
	});
	
	// ---------------------------- //
	
	$('#contactauthors').hide();
	
	
	$('#more').click(function () {
		
	})
});