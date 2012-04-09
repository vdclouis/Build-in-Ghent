/* LOAD PRODUCTS */
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
function loadTextError(xhr, message, optional){	
	$(".text").html("Error loading products XML file!");
}
function loadTextsSuccess(data, xhr){
	parseProducts(data);
}
function parseTexts(xml){
	var title;
	var text;
	
    var htmlContent = "";

    $(xml).find('en').each(function () {

        title = $(this).find('title').text();
        text = $(this).find('text').text();

        // Add matched items to an array         
        htmlContent += '<h1>' + title + '</h1>' + '<p>' + text + '</p>';
       
    }); // end each loop  

    //Write to container
    $(".text").html(htmlContent);
}


$(function () {
	//NO CACHE FOR AJAX
	$.ajaxSetup ({
		cache: false
	});
	
	/* LOAD PRODUCTS */
	loadProducts("./data/xml/data.xml");
})