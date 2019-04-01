OWN WEBSITE

server: 

template-dist
	-index.php
	-functions.php

set up custom permalink! :)

/%postname%


build cmd:
ng build --prod --deploy-url="/wp-content/themes/test/dist/"

don´t forget on style.css in main folder of theme!! - resolve missing stylesheet problem.


After build when you need multilang -> and folder assets/i18n to root folder of wp. 
