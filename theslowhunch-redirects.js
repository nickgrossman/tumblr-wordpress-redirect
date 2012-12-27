

// create namespace
var TSH = {};
TSH.oldDomain = "nickgrossman.tumblr.com";
TSH.newDomain = "wayback.theslowhunch.net";

// function: redirect
TSH.redirect = function() {
	
	if (document.URL.search(TSH.oldDomain + '/20') != -1) {
		var newURL = document.URL.replace(TSH.oldDomain, TSH.newDomain);
		console.log(newURL);
	}
	 	
}

// Fire away
TSH.redirect();

