chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var currentUrl = window.location.href;
      console.log(currentUrl);
      chrome.runtime.sendMessage({
        "message": "open_url_in_incognito_mode",
        "url": currentUrl
      });
    }
  }
);
