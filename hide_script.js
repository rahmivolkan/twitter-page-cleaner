function hide() {
  var style = document.createElement('style');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  chrome.storage.sync.get(['hideTrends', 'hideWtf','hideFooter'], function(state)  {
    if((typeof state.hideTrends == "undefined") || state.hideTrends) {
      style.appendChild(document.createTextNode(".Trends{display:none !important;}"));
    }
    if((typeof state.hideFooter == "undefined") || state.hideFooter) {
      style.appendChild(document.createTextNode(".Footer{display:none !important;}"));
    }
    if((typeof state.hideWtf == "undefined") || state.hideWtf) {
      style.appendChild(document.createTextNode(".wtf-module{display:none !important;}"));
      style.appendChild(document.createTextNode(".WhoToFollow{display:none !important;}"));
    }
  });
  (document.head||document.documentElement).appendChild(style);
}

window.addEventListener("load", hide, false);
