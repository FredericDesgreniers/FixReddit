chrome.storage.sync.get({
    redirectCompact: true,
    redirectMobile: true
  }, function(items) {
      var url = window.location.href;
   
    if(items.redirectMobile){
        if(url.indexOf("m.reddit") >-1){
            console.log("redirect mobile");
            window.location = url.replace("m.reddit","reddit");
        }
    }
    if(items.redirectCompact){
        if(url.indexOf("/.compact") >-1){
            console.log("redirect compact")
            window.location = url.replace("/.compact","");
        }
    }
  });
