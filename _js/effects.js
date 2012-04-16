$(function () {
	//jquery test
	console.log("It's Alive!");

	//gives the first nav element current status (red color)
	$('#nav li:first-child').addClass('current');
	
	// ---------------------------- //

	$('#architect, #afdeling').hide();
	$('#gebouwnav ul li:nth-child(1) a').css('color', '#cc3333');
	
	$('#gebouwnav ul li:nth-child(1) a').click(function () {
		$(this).css('color', '#cc3333');
		$('#gebouwnav ul li:nth-child(2) a, #gebouwnav ul li:nth-child(3) a').css('color', 'black');
		$('#architect, #afdeling').hide();
		$('#algemeen').fadeIn(1000);
		console.log('algemeen clicked');
		return false;
	});
	
	$('#gebouwnav ul li:nth-child(2) a').click(function () {
		$(this).css('color', '#cc3333');
		$('#gebouwnav ul li:nth-child(1) a, #gebouwnav ul li:nth-child(3) a').css('color', 'black');
		$('#algemeen, #afdeling').hide();
		$('#architect').fadeIn(1000);
		console.log('architect clicked');
		return false;
	});
	
	$('#gebouwnav ul li:nth-child(3) a').click(function () {
		$(this).css('color', '#cc3333');
		$('#gebouwnav ul li:nth-child(1) a, #gebouwnav ul li:nth-child(2) a').css('color', 'black');
		$('#algemeen, #architect').hide();
		$('#afdeling').fadeIn(1000);
		console.log('afdeling clicked');
		return false;
	});

	//hides the second page 'parkeergebouw'
	$('#parkeergebouw').hide();
	
	$('#gebouwennav .rightbullet a').css("background-position","0 0");
	
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
	
/*	
	//hides the second page 'contactform'
	$('#contactform').hide();
	
	$('.rightbullet a').css("background-position","0 0");
	
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
*/

	$('#contacturen, #contactform').hide();
	$('nav#praktischnav ul li:nth-child(1) a').css('color', '#cc3333');
	
	$('nav#praktischnav ul li:nth-child(1)').click( function () {
		$('nav#praktischnav ul li:nth-child(1) a').css('color', '#cc3333');
		$('nav#praktischnav ul li:nth-child(2) a, nav#praktischnav ul li:nth-child(3) a').css('color', '#636466');
		$('#contacturen, #contactform').hide();
		$('#contactmap').fadeIn(1000);
		console.log('wegebeschrijving clicked!');
		return false;
	});
	
	$('nav#praktischnav ul li:nth-child(2)').click( function () {
		$('nav#praktischnav ul li:nth-child(2) a').css('color', '#cc3333');
		$('nav#praktischnav ul li:nth-child(1) a, nav#praktischnav ul li:nth-child(3) a').css('color', '#636466');
		$('#contactmap, #contactform').hide();
		$('#contacturen').fadeIn(1000);
		console.log('openingsuren clicked!');
		return false;
	});
	
	$('nav#praktischnav ul li:nth-child(3)').click( function () {
		$('nav#praktischnav ul li:nth-child(3) a').css('color', '#cc3333');
		$('nav#praktischnav ul li:nth-child(1) a, nav#praktischnav ul li:nth-child(2) a').css('color', '#636466');
		$('#contactmap, #contacturen').hide();
		$('#contactform').fadeIn(1000);
		console.log('contact clicked!');
		return false;
	});
	
	// ---------------------------- //
	// footer contact
	
	$('#contactbig').hide();

	$('#contact').click(function() {
		$(this).animate({
		
//			'width':'100%',
//			'height':'50px',

//			'right':'0',
//			'padding': '0',
		}, 500);
		$(this).addClass('contactsmall')
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
		
	});
	
//	remove the fancybox when a menulink is clicked
	$('#mainmenu a').click( function () {
		$('.fancybox-wrap, #fancybox-overlay').hide();
	});
});