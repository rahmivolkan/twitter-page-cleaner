function initializeControls(trends, wtf, footer) {
  var trends = document.getElementById("trends");
  var wtf = document.getElementById("wtf");
  var footer = document.getElementById("footer");
  // fetch state
  chrome.storage.sync.get(['hideTrends', 'hideWtf', 'hideFooter'], function(state)  {
    trends.checked = (typeof state.hideTrends == "undefined") || state.hideTrends;
    wtf.checked = (typeof state.hideWtf == "undefined") || state.hideWtf;
    footer.checked = (typeof state.hideFooter == "undefined") || state.hideFooter;
  });
  // save state
  [trends, wtf, footer].forEach(function(el){
    el.addEventListener("click", function() {
      chrome.storage.sync.set({
        'hideTrends': trends.checked,
        'hideWtf': wtf.checked,
        'hideFooter': footer.checked
      });
    });
  });
}

function initializeText() {
  var ids = ["h1_title", "legend_info", "p_description", "p_refresh",
    "label_trends", "label_wtf", "label_footer"];
  ids.forEach(function(id) {
    document.getElementById(id).innerHTML = chrome.i18n.getMessage(id);
  });
}

function initialize() {
  initializeText();
  initializeControls();
}

window.addEventListener("load", initialize, false);
