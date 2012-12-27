

// create namespace
var TSH = {};
TSH.oldDomain = "theslowhunch.net";
TSH.newDomain = "wayback.theslowhunch.net";

// function: redirect
TSH.redirect = function() {
	
	if (document.URL.search('/' + TSH.oldDomain + '\/200/')) {
		var newURL = document.URL.replace(TSH.oldDomain, TSH.newDomain);
		console.log(newURL);
	}
	 	
}

// Fire away
TSH.redirect();

