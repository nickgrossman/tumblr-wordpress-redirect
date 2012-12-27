

// create namespace
var TSH = {};
TSH.oldDomain = "nickgrossman.tumblr.com";
TSH.newDomain = "wayback.theslowhunch.net";
TSH.searchString = TSH.oldDomain + '/20';

// function: redirect
TSH.redirect = function() {
	
	if (document.URL.search(TSH.searchString) != -1) {
		var newURL = document.URL.replace(TSH.oldDomain, TSH.newDomain);
		window.location.href = newURL;
		window.location.reload();
	}
	 	
}

// Fire away
TSH.redirect();

