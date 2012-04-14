$(function () {
	//jquery test
	console.log("It's Alive!");

	//gives the first nav element current status (red color)
	$('#nav li:first-child').addClass('current');
	
	// ---------------------------- //

	//hides the second page 'parkeergebouw'
	$('#parkeergebouw').hide();
	
	//navigation with the bulletnavs
	$('#gebouwennav .rightbullet').click( function () {
		$('#gerechtsgebouw').hide();
		$('#parkeergebouw').fadeIn(1000);
		$(this).css("background-position","0 -26px");
		$('.leftbullet').css("background-position","0 0");
		console.log('rightbullet clicked!');
		return false;
	});
	$('#gebouwennav .leftbullet').click( function () {
		$('#parkeergebouw').hide();
		$('#gerechtsgebouw').fadeIn(1000);
		$(this).css("background-position","0 -26px");
		$('.rightbullet').css("background-position","0 0");
		console.log('leftbullet clicked!');
		return false;
	});
	
	// ---------------------------- //
	
	//hides the second page 'contactform'
	$('#contactform').hide();
	
	//navigation with the bulletnavs
	$('#praktischnav .rightbullet').click( function () {
		$('#contactmap').hide();
		$('#contactform').fadeIn(1000);
		$(this).css("background-position","0 -26px");
		$('.leftbullet').css("background-position","0 0");
		console.log('rightbullet clicked! -> contactform');
		return false;
	});
	$('#praktischnav .leftbullet').click( function () {
		$('#contactform').hide();
		$('#contactmap').fadeIn(1000);
		$(this).css("background-position","0 -26px");
		$('.rightbullet').css("background-position","0 0");
		console.log('leftbullet clicked! -> contactmap');
		return false;
	});
	
	// ---------------------------- //
	
	$('#contactbig').hide();

	$('#contactsmall p').click(function() {
		$('#contact').animate({
			'width':'100%',
			'height':'50px',
			'border-top-left-radius': '50px',
			'border-top-right-radius': '50px',
			'right':'0',
		}, 500);
		$('#contactsmall').hide();
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
		$('#contactsmall').fadeIn(500);
		console.log('contact hidden!');
		return false;
	});
	
	// ---------------------------- //
	
	$('#more').click(function () {
		$('#gd, #wd').toggle('contactshown');
	})
});



