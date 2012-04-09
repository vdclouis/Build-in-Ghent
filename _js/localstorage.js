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


$(function () {
	/* SET THE LANGUAGE AFTER PAGE LOAD OR REFRESH */
	setLanguage(getLanguageFromStorage());
})