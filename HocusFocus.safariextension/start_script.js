// Wrap this all up so we don't accidentally screw with the page's JS.
var HocusFocus = function() {
  return {
    forceFocus: function() {
      // Normally, we would just set this in the Safari extension itself,
      // but Safari apparently doesn't consider your active search engine
      // as a domain.
      currentURL = (window.location + "");
      searchEngines = /google\.com|bing\.com|yahoo\.com/;

      if (currentURL.search(searchEngines) > -1) {
        document.documentElement.tabIndex = "1";
        document.documentElement.focus();
      }
    }
  }
}

// Prevent any focus switching if we're not in the parent frame
if (window.location == window.parent.location) {
  new HocusFocus().forceFocus();
}