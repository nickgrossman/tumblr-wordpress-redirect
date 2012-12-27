

// create namespace
var TSH = {};

// where we are now
TSH.oldDomain = "theslowhunch.net";

// where we are going
TSH.newDomain = "wayback.theslowhunch.net";

// find urls that match the wordpress url pattern
// of sitename/year/etc.
TSH.searchString = TSH.oldDomain + '/20';

// function: redirect
TSH.redirect = function() {
	
	if (document.URL.search(TSH.searchString) != -1) {
		var newURL = document.URL.replace(TSH.oldDomain, TSH.newDomain);
		window.location = newURL;
		//window.location.reload();
	}
	 	
}

// Fire away
TSH.redirect();

