/* JAVASCRIPT */

var Index = {

	/* Loading... */
	init: function() {

		var userLang = navigator.language || navigator.userLanguage; 

		if(userLang === "pt-br") {
			window.confirm("ATENÇÃO: Este site é uma obra fictícia.\nQualquer semelhança com pessoas ou fatos reais é mera coincidência. \nEsse projeto foi desenvolvido apenas com intuitos educacionais.\n\nCopyright © 2013 RockinRio. Todos os direitos reservados.\nCopyright © 2015 Foo Fighters, Todos os direitos reservados");
		}

		else {
			window.confirm("DISCLAIMER: This site is a fictional work. \nAny resemblance to actual persons or events is purely coincidental. \nThis project was developed only for educational motives \n\nCopyright © 2013 RockinRio. All rights reserved. \nCopyright © 2015 Foo Fighters, All rights reserved.")
		}
 		

		
	}

}

Index.init();