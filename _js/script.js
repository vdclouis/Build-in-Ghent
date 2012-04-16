/* load texts */
function loadTexts(url){
	$.ajax({
		url:url,
		type:"GET",
		datatype:"xml",
		encoding:"utf-8",
		cache:false,
		success:loadTextsSuccess,
		error:loadTextsError
	});
}

function loadTextsError(xhr, message, optional){	
	$(".text").html("Error loading the XML file!");
}

function loadTextsSuccess(data, xhr){
	parseTexts(data);
}

function parseTexts(xml){
	var title;
	var text;
	
	var date
	
    var htmlMain = "";
    var htmlSub = "";
    var htmlArchitecten = "";
    var htmlAfdeling = "";
    var htmlNews = "";
    var htmlNewsContent = "";
		
	var textlang = localStorage.getItem('stonesfromghent-language');
	
	//main gebouw
    $(xml).find(textlang).each(function () {
		$(this).find('main').each(function () {
	        title = $(this).find('title').text();
	        text = $(this).find('text').text();
		});
    // Add matched items to an array         
    htmlMain += '<h1>' + title + '</h1>' + '<p>' + text + '</p>';
       
    }); // end each loop  
    
    //sub gebouw
    $(xml).find(textlang).each(function () {
    	$(this).find('sub').each(function () {
            title = $(this).find('title').text();
            text = $(this).find('text').text();
    	});
    // Add matched items to an array         
    htmlSub += '<h1>' + title + '</h1>' + '<p>' + text + '</p>';
    }); // end each loop
    
    //architecten
    $(xml).find(textlang).each(function () {
    	$(this).find('architecten').each(function () {
    		title = $(this).find('title').text();
    		text = $(this).find('p').text();
    	});
    	
    htmlArchitecten += '<h1>' + title + '</h1>' + '<p>' + text + '</p>';
    
    });
    
    //afdeling
    $(xml).find(textlang).each(function () {
    	text = $(this).find('departments').text();
    	
    htmlAfdeling += text;
    });
    
    //news
    $(xml).find(textlang).each(function () {
    	$(this).find('item').each(function () {
    		title = $(this).find('title').text();
    		date = $(this).find('date').text();
    		
    		htmlNews += '<tr><td><p>' + date + '</p></td><td><p>' + title + '</p></td></tr>';
    	});
    });

    //Write to container
    $(".main").html(htmlMain);
    $(".sub").html(htmlSub);
    $(".arch").html(htmlArchitecten);
    $(".afd").html(htmlAfdeling);
    $("table#newz").html(htmlNews);
}

/* document ready */
$(function () {
	$.ajaxSetup ({
		cache: false
	});
	
	//hook parallax
	$('#nav').onePageNav();
	//$('#nav').localScroll(800);
	//.parallax(xPosition, adjuster, inertia, outerHeight) options:
	//xPosition - Horizontal position of the element
	//adjuster - y position to start from
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#home').parallax("50%", 0, 0.1, true);
	$('#pahome').parallax("50%", 0, 0.4, true)	
	$('#gebouw').parallax("50%", 2350, 0.2, true);
	$('#pagerechtsgebouw').parallax("50%", 2600, 0.4, true);
	$('#paparkeergebouw').parallax("50%", 2600, 0.4, true);
	$('#fotos').parallax("50%", 0, 0.3, true);
	$('.pafotos').parallax("50%", 4000, 0.4, true);
	$('#praktisch').parallax("50%", 0, 0.3, true);
	$('.papraktisch').parallax("50%", 5800, 0.4, true);
	$('#video').parallax("50%", 700, 0.3, true);
	$('.pavideo').parallax("50%", 6600, 0.4, true);
	$('#nieuws').parallax("50%", 2750, 0.3, true);
	$('.panieuws').parallax("270px", 7900, 0.4, true);
	
	//hook fancybox
	$(".various").fancybox({
		maxWidth	: 780,
		maxHeight	: 450,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
	//hook flexslider
	$('.flexslider').flexslider();
	
	//XML text loading
	loadTexts("_resources/_xml/texts.xml");

/*
//	language menu
//	dutch
	$('#chooseLang li:nth-child(1) a').click(function () {
//		setLanguageFromLink(this);
//		$(this).addClass('current');
//		$('#chooseLang li:nth-child(2) a, #chooseLang li:nth-child(3) a').removeClass('current');
		console.log('dutch selected!');
		return false;
	});

//	english
	$('#chooseLang li:nth-child(2) a').click(function () {
//		setLanguageFromLink(this);
//		$(this).addClass('current');
//		$('#chooseLang li:nth-child(1) a, #chooseLang li:nth-child(3) a').removeClass('current');
		console.log('english selected!');
		return false;
	});
	
//	french
	$('#chooseLang li:nth-child(3) a').click(function () {
//		setLanguageFromLink(this);
//		$(this).addClass('current');
//		$('#chooseLang li:nth-child(1) a, #chooseLang li:nth-child(2) a').removeClass('current');
		console.log('french selected!');
		return false;
	});*/
});