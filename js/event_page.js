chrome.omnibox.onInputEntered.addListener(function callback(subreddit) {
	chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ) {
	  chrome.tabs.update( tabs[0].id, { url: "http://www.reddit.com/r/" + subreddit } ); 
	});
});