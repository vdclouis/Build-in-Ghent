$(function () {
	$('#parkeergebouw').hide();
	console.log('test');
	$('#rightbullet').click( function () {
		$('#gerechtsgebouw').fadeOut(100);
		$('#parkeergebouw').fadeIn(800);
		$(this).animate({ backgroundColor: '#2096d3'}, 500);
		$('#leftbullet').animate({ backgroundColor: '#b2b2b2'}, 500);
		console.log('rightbullet clicked!');
		return false;
	});
	$('#leftbullet').click( function () {
		$('#parkeergebouw').fadeOut(1);
		$('#gerechtsgebouw').fadeIn(800);
		$(this).animate({ backgroundColor: '#2096d3'}, 500);
		$('#rightbullet').animate({ backgroundColor: '#b2b2b2'}, 500);
		console.log('leftbullet clicked!');
		return false;
	});
});