
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, {file: "designMode.js"});
   
});


var titles = ["Activate, Deactivate"];
function toggleTitle(title, tabId) {
  if (title == "Activate") {
    chrome.browserAction.setTitle({title: "Deactivate"});
  } else {
    chrome.browserAction.setTitle({title: "Activate"});
  }
}

chrome.browserAction.onClicked.addListener(() => {
  chrome.browserAction.getTitle({}, toggleTitle);
});

var min = 1;
var max = 2;
var current = min;
var tabId;
var designState;


function updateIcon() {
  chrome.browserAction.setIcon({path:"icon" + current + ".png"});
  current++;


  if (current > max)
    current = min;
}



chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();



chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(current==min ){
     updateIcon(); 
    }    
     chrome.browserAction.setTitle({title: "Activate"});
    chrome.tabs.executeScript(null, {file: "designMode.js"}); 
});

chrome.tabs.onActivated.addListener(function(tabId, windowId) { 
   if(current==min){
updateIcon();
    }
     chrome.browserAction.setTitle({title: "Activate"});
    chrome.tabs.executeScript(null, {file: "designMode.js"});
});

chrome.tabs.onCreated.addListener(function(tab) {            
  if(current==min){
    updateIcon();
    }
     chrome.browserAction.setTitle({title: "Activate"});
    chrome.tabs.executeScript(null, {file: "designMode.js"});
});

