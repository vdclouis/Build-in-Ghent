$(function () {
	$('#parkeergebouw').hide();
	console.log('test');
	$('#rightbullet').click( function () {
		$('#gerechtsgebouw').fadeOut(100);
		$('#parkeergebouw').fadeIn(800);
		console.log('rightbullet clicked!');
		return false;
	});
	$('#leftbullet').click( function () {
		$('#parkeergebouw').fadeOut(1);
		$('#gerechtsgebouw').fadeIn(800);
		console.log('leftbullet clicked!');
		return false;
	});
});