<?php session_start() ?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<title>Build in Ghent</title>
		<meta name="viewport" content="width=device-width">
		<meta name="description" content="Voor deze opdracht gaan jullie op zoek naar een Gents gebouw (groot-Gent).
		Het gebouw dient historisch, maatschappelijk of sociaal relevant te zijn.
		Rond dit gebouw creëren jullie een website, een postkaart, poster en folder die strikt aan on- derstaande normen voldoet.">
		<meta name="keywords" content="De,stenen,van,Gent,Les,pierres,de,Gand,Built,in,Ghent,Artevelde,Hogeschool" />
		<meta name="author" content="An Van Houte,David Spiessens,Louis Van de Calseyde,Pierre Van der Eecken" />
		<link rel="apple-touch-icon-precomposed" href="apple-touch-icon.png">
		<link rel="stylesheet" type="text/css" media="screen" href="_styles/css/style.css" />
		<script src="_js/_libs/modernizr-2.5.3.min.js"></script> 
	</head>
	<body>
		<div id="mainmenu">
			<nav id="chooseLang">
				<ul>
					<li id="nl"><a onclick="setLanguageFromLink(this);" href="index.php" class="nl">nederlands</a></li>
					<li id="en"><a onclick="setLanguageFromLink(this);" href="index.php" class="en">english</a></li>
					<li id="fr"><a onclick="setLanguageFromLink(this);" href="index.php" class="fr">français</a></li>
				</ul>
			</nav>
			<nav id="menu">
				<ul >
					<li><a href="#home" title="Next Section">home</a></li>
					<li><a href="#gebouw" title="Next Section">building</a></li>
					<li><a href="#fotos" title="Next Section">photo's</a></li>
					<li><a href="#praktisch" title="Next Section">practical</a></li>
					<li><a href="#video" title="Next Section">video</a></li>
					<li><a href="#awesome-o" title="Next Section">media</a></li>
				</ul>
			</nav>
		</div> <!--#mainmenu-->
		<div id="home">
			<div class="story">
				<div id="nonshadow">
					<img class="logo" src="_images/logo02.png" alt="logo" />
					<h1>justitia</h1>
					<h2>omnibus</h2>
					<p>- Gerechtigheid voor allen -</p>
				</div> <!--#nonshadow-->
				<div id="shadow">
					<p>justitia</p>
					<p>omnibus</p>
				</div> <!--#shadow-->
			</div> <!--.story-->
		</div> <!--#home-->
		<div id="gebouw">
			<div class="story">
				<img class="logo" src="_images/logo01.png" alt="logo" />
				<div id="pagerechtsgebouw"></div>
				<div id="paparkeergebouw"></div>
				<nav id="gebouwnav">
					<ul>
						<li><a href="#">General</a></li>
						<li><a href="#">Architect</a></li>
						<li><a href="#">Section</a></li>
					</ul>
				</nav>
				<section id="algemeen">
					<div class="gebouwen" id="gerechtsgebouw">
						<div class="tekst" id="tekstgerechtsgebouw">
							<div class="main"></div>
							<div class="text"></div>
						</div>
						<div class="scrollarrow"></div>
						<img src="_styles/assets/images/bg02a.png" alt="gerechtsgebouw" />
					</div>
					<div class="gebouwen" id="parkeergebouw">	
						<div class="tekst" id="tekstparkeergebouw">
							<div class="sub"></div>
							<div class="text"></div>
						</div>
						<div class="scrollarrow"></div>
						<img src="_styles/assets/images/bg02b.png" alt="parkeergebouw" />
					</div>
					<div id="gebouwennav">
						<div class="bullet leftbullet">
							<a href="#"></a>
						</div>
						<div class="bullet rightbullet">
							<a href="#"></a>
						</div>
					</div>
				</section>
				<section id="architect">
					<img src="_styles/assets/images/bg02a.png" alt="gerechtsgebouw" />
					<div class="tekst">
						<div class="arch"></div>
					</div>
					<div class="scrollarrow"></div>
				</section>
				<section id="afdeling">
					<img src="_styles/assets/images/bg02a.png" alt="gerechtsgebouw" />
					<div class="tekst">
						<div class="afd"></div>
					</div>
					<div class="scrollarrow"></div>
				</section>
			</div> <!--.story-->
		</div> <!--#gebouw-->
		<div id="fotos">
			<div class="story">
				<img class="logo" src="_images/logo01.png" alt="logo" />
				<div class="pafotos"></div>
				<div id="flexocontainer">
					<div class="flexslider">
						<ul class="slides">
							<li>
								<img src="_images/flexslider/slideshow/1.jpg" alt="" />
							</li>
							<li>
								<img src="_images/flexslider/slideshow/2.jpg" alt="" />
							</li>
							<li>
								<img src="_images/flexslider/slideshow/3.jpg" alt="" />
							</li>
							<li>
								<img src="_images/flexslider/slideshow/4.jpg" alt="" />
							</li>
							<li>
								<img src="_images/flexslider/slideshow/5.jpg" alt="" />
							</li>
						</ul>
					</div>
				</div>
			</div> <!--.story-->
		</div> <!--#fotos-->
		<div id="praktisch">
			<div class="story">
				<img class="logo" src="_images/logo01.png" alt="logo" />
				<nav id="praktischnav">
					<ul>
						<li><a href="#">wegbeschrijving</a></li>
						<li><a href="#">openingsuren</a></li>
						<li><a href="#">contact</a></li>
					</ul>
				</nav>
				<section class="praktisch" id="contactmap">
					<div class="papraktisch"></div>
					<div id="map" class="praktischbox">
						<iframe width="640" height="480" src="http://maps.google.be/maps?f=q&amp;source=s_q&amp;hl=nl&amp;geocode=&amp;q=Opge%C3%ABistenlaan+401,+gent&amp;aq=&amp;sll=51.062493,3.717129&amp;sspn=0.002795,0.00574&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=Opge%C3%ABistenlaan+401,+Gent+9000+Gent,+Oost-Vlaanderen,+Vlaams+Gewest&amp;ll=51.066482,3.716125&amp;spn=0.02589,0.054932&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>
					</div> <!--eo map-->
				</section>
				<section class="praktisch" id="contacturen">
					<div class="papraktisch"></div>
					<div id="openingsuren" class="praktischbox">
						<!-- xml -->
					</div>
				</section>
				<section class="praktisch" id="contactform">
					<div id="contact-form" class="praktischbox">
						<?php
						//init variables
						$cf = array();
						$sr = false;
						
						if(isset($_SESSION['cf_returndata'])){
							$cf = $_SESSION['cf_returndata'];
							$sr = true;
						}
						?>
						<ul id="errors" class="<?php echo ($sr && !$cf['form_ok']) ? 'visible' : ''; ?>">
							<li id="info">There were some problems with your form submission:</li>
							<?php 
							if(isset($cf['errors']) && count($cf['errors']) > 0) :
								foreach($cf['errors'] as $error) :
							?>
							<li><?php echo $error ?></li>
							<?php
								endforeach;
							endif;
							?>

					    </ul>
					    <p id="success" class="<?php echo ($sr && $cf['form_ok']) ? 'visible' : ''; ?>">Thanks for your message! We will get back to you ASAP!</p>
					    <form method="post" action="process.php">
					        <label id="lblName" for="name">Name: <span class="required">*</span></label>
					        <input type="text" id="name" name="name" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['name'] : '' ?>" placeholder="John Doe" required />
					        
					        <label for="email">Email:<span class="required">*</span></label>
					        <input type="email" id="email" name="email" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['email'] : '' ?>" placeholder="johndoe@example.com" required />
					        
					        <label for="telephone">Telephone: </label>
					        <input type="tel" id="telephone" name="telephone" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['telephone'] : '' ?>" />
					        
					        <label for="enquiry">Enquiry: </label>
					        <select id="enquiry" name="enquiry">
					            <option value="General" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'General') ? "selected='selected'" : '' ?>>General</option>
					            <option value="Sales" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Sales') ? "selected='selected'" : '' ?>>Sales</option>
					            <option value="Support" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Support') ? "selected='selected'" : '' ?>>Support</option>
					        </select>
					        
					        <label id="lblmessage" for="message">Message: <span class="required">*</span></label>
					        <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required data-minlength="20"><?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['message'] : '' ?></textarea>
					        
					        <span id="loading"></span>
					        <input type="submit" value="SUBMIT" id="submit-button" />
					        <p id="req-field-desc"><span class="required">*</span> indicates a required field</p>
					    </form>
					    <?php unset($_SESSION['cf_returndata']); ?>
					</div>
				</section>
			</div> <!--.story-->
		</div> <!--#praktisch-->
		<div id="video">
			<div class="story">
				<img class="logo" src="_images/logo01.png" alt="logo" />
				<div class="pavideo"></div>
				<a class="various fancybox.iframe" href="http://player.vimeo.com/video/40165286"><img id="playb" src="_styles/assets/images/play.png" alt="play" /></a>
			</div> <!--.story-->
		</div> <!--#video-->
		<div id="awesome-o">
			<div class="story">
				<img class="logo" src="_images/logo01.png" alt="logo" />
				<h2>Brochure</h2>
				<div id="folder">
				</div>
				<h2>Poster</h2>
				<div id="poster">
					<a id="single_1" href="_images/poster.jpg" title="Poster Groot Gents Gerechtsgebouw">
						<img src="_images/posterthumb.jpg" alt="" />
					</a>
				</div>	
			</div> <!--eo story-->
		</div> <!--#awesome-o-->
		<div id="contact" class="contactsmall">
			<div id="contactup">
				<img src="_styles/assets/images/uparrow.png" alt="arrow" />
				<p>contact</p>
			</div>
			<div id="contactinfo">
				<section id="contactmenu">
					<div id="collapse">
						<img src="_styles/assets/images/downarrow.png" alt="arrow" />
						<p>hide</p>
					</div>
					<div id="more">
						<p>the authors</p>
					</div>
					<div id="less">
						<p>GGG</p>
					</div>
				</section>
				<section id="contactjustitie">
					<div class="table1">
						<table>
							<tr>
								<td>Adres
								<td>Opgeëistenlaan 401
								<td>Tel.: 09 234 53 50 
							<tr>
								<td>
								<td>9000 Gent
								<td>Fax: 09 234 53 51 
							<tr>
								<td>
								<td>Oost-Vlaanderen
								<td>
						</table>
					</div>
				</section>
				<section id="contactauthors">
					<div class="table1">
						<table>
							<tr>
								<td>Designers
								<td>David Spiessens
								<td>An Van Houte
							<tr>
								<td>
								<td>davids@live.be
								<td>an.vanhoute@hotmail.com
							<tr>
								<td>
								<td>+32472946262
								<td>+32485839712
						</table>
					</div>
					<div class="table2">
						<table>
							<tr>
								<td>Developers
								<td>Louis Van de Calseyde
								<td>Pierre Van der Eecken
							<tr>
								<td>
								<td>vdc.louis@gmail.com
								<td>p_vde@hotmail.com
							<tr>
								<td>
								<td>+32400000000
								<td>+32400000000
						</table>
					</div>
				</section>
			</div>
		</div>
	<!--jQuery and jQuery UI-->
		<script type="text/javascript" src="_js/_libs/jquery-1.7.2.min.js"></script>
		<script type="text/javascript" src="_js/_libs/jquery-ui-1.8.18.custom.min.js"></script>
	<!--fancybox-->
		<script type="text/javascript" src="_js/_libs/jquery.fancybox.pack.js"></script>
	<!--flexslider-->
		<script type="text/javascript" src="_js/_libs/jquery.flexslider-min.js"></script>
	<!--parallax-->
		<script type="text/javascript" src="_js/_libs/jquery.localscroll-1.2.7-min.js"></script>
		<script type="text/javascript" src="_js/jquery.parallax-1.1.js"></script>
	<!--onepagenav + current menu-items-->
		<script type="text/javascript" src="_js/_libs/jquery.scrollTo-1.4.2-min.js"></script>
		<script type="text/javascript" src="_js/jquery.nav.js" ></script>
	<!--custom made xml loader-->
		<script type="text/javascript" src="_js/languagechooser.js" ></script>
		<script type="text/javascript" src="_js/script.js" ></script>
	<!--custom made effects-->
		<script type="text/javascript" src="_js/effects.js" ></script>
	<!--php form-->
		<!--<script src="_js/contactformplugins.js"></script>
		<script src="_js/contactformscript.js"></script>-->
	</body>
</html>