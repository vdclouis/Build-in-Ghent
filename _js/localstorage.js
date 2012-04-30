if ($('html').attr('title') == 'Welcome!') {
	if(localStorage.getItem('stonesfromghent-language') != null) {
		window.location.href = "index.html";
	}
}

var selectedLanguage = "nl";

function setLanguageFromLink(languageLink){
	var language = $(languageLink).attr('class');
	
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
//	$("#language-indicator").html('<h1>' + language + '</h1>');
	
	if (language == "nl") {
		$("#nl a").css({'color':'#cc3333'});
	}else if (language == "en") {
		$("#en a").css({'color':'#cc3333'});
	}else{
		$("#fr a").css({'color':'#cc3333'});
	}
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

/* document ready */
$(function () {
	/* SET THE LANGUAGE AFTER PAGE LOAD OR REFRESH */
	setLanguage(getLanguageFromStorage());
})