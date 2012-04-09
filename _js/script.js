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
	
    var htmlContent = "";
		
	var textlang = localStorage.getItem('stonesfromghent-language');
    $(xml).find(textlang).each(function () {
		$(this).find('main').each(function () {
	        title = $(this).find('title').text();
	        text = $(this).find('text').text();
		});
    // Add matched items to an array         
    htmlContent += '<h1>' + title + '</h1>' + '<p>' + text + '</p>';
       
    }); // end each loop  

    //Write to container
    $(".text").html(htmlContent);
}

/* document ready */
$(function () {
	$.ajaxSetup ({
		cache: false
	});
	
	loadTexts("_resources/_xml/texts.xml");
})