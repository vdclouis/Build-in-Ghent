var selectedLanguage = "nl";

function setLanguageFromLink(languageLink){

	var language = $(languageLink).attr('rel');
	setLanguage(language);
		
}
/* SET LANGUAGE FOR THE WEBAPP
--> Update HTML
*/
function setLanguage(language){

	setLanguageToStorage(language);
		
	if (language == "nl") {
		$("#nl a").css({'color':'#cc3333'});
	}else if (language == "en") {
		$("#en a").css({'color':'#cc3333'});
	}else{
		$("#fr a").css({'color':'#cc3333'}); //undifined -> fr is dus gekleurd
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
});