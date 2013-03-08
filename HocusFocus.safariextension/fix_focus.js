function fixFocus() {
  var currentURL = (window.location + "");
  var searchEngines = /google\.com|bing\.com|yahoo\.com/;
  
  if (currentURL.search(searchEngines) > -1) {
    var body = document.getElementsByTagName('body')[0];
    body.tabIndex = "1"; // Set a tab index so we can call focus on it.
    body.focus();
  }
}