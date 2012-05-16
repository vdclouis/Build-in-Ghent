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
	var list;
	
	var date;
	var p1;
	var p2;
	var content;
	
	var c1;
	var c2;
	var c3;
	var c4;
	
	var htmlNav = "";
  var htmlMain = "";
  var htmlSub = "";
  var htmlArchitecten = "";
  var htmlAfdeling = "";
  var htmlList = "";
  var htmlList2 = "";
  var htmlFolder = "";
  var htmlPrak = "";
		
	var textlang = localStorage.getItem('stonesfromghent-language');
	
	  //main gebouw
    $(xml).find(textlang).each(function () {
    
			$(this).find('main').each(function () {
	      title = $(this).find('title').text();
	      text = $(this).find('text').text();
	      
			});
		
    htmlMain += '<h1>' + title + '</h1>' + '<p>' + text + '</p>';
       
    }); // end each loop  
    
    //sub gebouw
    $(xml).find(textlang).each(function () {
    
    	$(this).find('sub').each(function () {
	      title = $(this).find('title').text();
	      text = $(this).find('text').text();
    	});
    	
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
    
    	$(this).find('departments').each(function () {
    		title = $(this).find('title').text();
    		
    		p1 = $(this).find('p1').text();
    		p2 = $(this).find('p2').text();
    		p3 = $(this).find('p3').text();
    		
    		$(this).find('ul1').each(function () {
    			$(this).find('li').each(function () {
    				list = $(this).text();
    				htmlList += '<li>' + list + '</li>';
    			});
    		});
    		
    		$(this).find('ul2').each(function () {
    			$(this).find('li').each(function () {
    				list = $(this).text();
    				htmlList2 += '<li>' + list + '</li>';
    			});
    		});
    	});
    	
    htmlAfdeling += '<h1>' + title + '</h1>' + '<p>' + p1 + '</p>' + '<ul>' + htmlList + '</ul>' + '<p>' + p2 + '</p>' + '<ul>' + htmlList2 + '</ul>' + '<p>' + p3 + '</p3>';
    
    });
    
    //folder
    $(xml).find(textlang).each(function () {
    	$(this).find('folder').each(function () {
    		t1 = $(this).find('t1').text();
    		f1 = $(this).find('f1').text();
    		
    		t2 = $(this).find('t2').text();
    		f2 = $(this).find('f2').text();
    	});

    	htmlFolder += '<a class="fancybox" rel="gallery1" href="_images/folder/'+ f1 +'" title="Brochure > Page 1"><img src="_images/folder/'+ t1 +'" alt="" /></a>';
    	htmlFolder +=	'<a class="fancybox" rel="gallery1" href="_images/folder/'+ f2 +'" title="Brochure > Page 2"><img src="_images/folder/'+ t2 +'" alt="" /></a>';
    });
    
    //praktisch
    $(xml).find(textlang).each(function () {
    	p = $(this).find('praktisch').text();

    	htmlPrak += p;
    });
    
    //Write to container
    $(".main").html(htmlMain);
    $(".sub").html(htmlSub);
    $(".arch").html(htmlArchitecten);
    $(".afd").html(htmlAfdeling);
    $("#folder").html(htmlFolder);
    $("#openingsuren").html(htmlPrak);
}

/* document ready */
$(function () {
	$.ajaxSetup ({
		cache: false
	});
	
	//hook parallax
	$('#menu').onePageNav();
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
	$('.papraktisch').parallax("50%", 5300, 0.4, true);
	$('#video').parallax("0", 600, 0.3, true);
	$('.pavideo').parallax("20%", 6600, 0.4, true);
	$('#nieuws').parallax("50%", 2750, 0.3, true);
	$('.panieuws').parallax("50%", 7900, 0.4, true);
	
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
	
	
	//fancybox multiple img
	$(".fancybox").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none'
		});
		
	//fancybox image
	$("#single_1").fancybox({
	          helpers: {
	              title : {
	                  type : 'float'
	              }
	          }
	      });
	
	//hook flexslider
	$('.flexslider').flexslider();
	
	//XML text loading
	loadTexts("_resources/_xml/texts.xml");

}); //eo ready fn