/* GLOBAL VARIABLES */
var selectedLanguage = "nl";
function setLanguageFromLink(languageLink){
	/* GET LANGUAGE FROM REL */
	var language = $(languageLink).attr('rel');
	
	/* SET LANGUAGE FROM REL --> LINK */
	setLanguage(language);
}
/* SET LANGUAGE FOR THE WEBAPP
--> Update HTML
*/
function setLanguage(language){
	/* CALL METHOD  setLanguageToStorage
	first argument: the language
	*/
	setLanguageToStorage(language);
	
	/* LOAD SPECIFIED CONTENT IN LANGUAGE */
	$("#language-indicator").html('<h1>' + language + '</h1>');
	
	
	/* SET THE NEW LANGUAGE TO THE GLOBAL VARIABLE */
	selectedLanguage = language;
	
}
function getLanguageFromStorage(){
	var language = "nl";
	/* GET LANGUAGE FROM LOCALSTORAGE */
	if (Modernizr.localstorage) {		
		if(localStorage.getItem('stonesfromghent-language') == null){
			setLanguageToStorage('nl');
		}
		else{
			language = localStorage.getItem('stonesfromghent-language');
		}
	}
	return language;	
}
function setLanguageToStorage(language){
	if (Modernizr.localstorage) {
		localStorage.setItem('stonesfromghent-language',language);
	}
	else {
		setLanguage('nl');
	}	
}


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

    $(xml).find(localStorage.getItem('stonesfromghent-language')).each(function () {

        title = $(this).find('title').text();
        text = $(this).find('text').text();

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
	
	/* SET THE LANGUAGE AFTER PAGE LOAD OR REFRESH */
	setLanguage(getLanguageFromStorage());
})