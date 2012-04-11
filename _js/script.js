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
	$(".text").html("Error loading products XML file!");
}

function loadTextsSuccess(data, xhr){
	parseTexts(data);
}

function parseTexts(xml){
	var title;
	var text;
	
//	var home;
//	var gebouw;
//	var fotos;
//	var praktisch;
//	var video;
//	var nieuws;
	
    var htmlMain = "";
    var htmlSub = "";
//    var htmlNav = "";
		
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
    $(xml).find('texts').find(textlang).each(function () {
    	$(this).find('sub').each(function () {
            title = $(this).find('title').text();
            text = $(this).find('text').text();
    	});
    // Add matched items to an array         
    htmlSub += '<h1>' + title + '</h1>' + '<p>' + text + '</p>';
       
    }); // end each loop
    
    //nav
//    $(xml).find(textlang).each(function () {
//    	$(this).find('nav').each(function () {
//    		home = $(this).find('home').text();
//    		gebouw = $(this).find('gebouw').text();
//    		fotos = $(this).find('fotos').text();
//    		praktisch = $(this).find('praktisch').text();
//    		video = $(this).find('video').text();
//    		nieuws = $(this).find('nieuws').text();
//    	});
//    	
//    htmlNav += '<li><a href="#home" title="Next Section">' + home +'</a></li>'
//    			+'<li><a href="#gebouw" title="Next Section">' + gebouw +'</a></li>'
//    			+'<li><a href="#fotos" title="Next Section">' + fotos +'</a></li>'
//    			+'<li><a href="#praktisch" title="Next Section">' + praktisch +'</a></li>'
//    			+'<li><a href="#video" title="Next Section">' + video +'</a></li>'
//    			+'<li><a href="#nieuws" title="Next Section">' + nieuws +'</a></li>';
//    
//    }); //eo each loop

    //Write to container
    $(".main").html(htmlMain);
    $(".sub").html(htmlSub);
//    $("ul#nav").html(htmlNav);
}

/* document ready */
$(function () {
	$.ajaxSetup ({
		cache: false
	});
	
	loadTexts("_resources/_xml/texts.xml");
})