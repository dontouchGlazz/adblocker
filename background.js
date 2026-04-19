chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
        {
            id: 1, 
            priority: 1,
            action: {type: "block"},
            condition: {
                urlFilter: "*://*.doubleclick.net/*",
                resourceTypes: ["script", "image", "sub_frame"]
            }
        }
    ],
    removeRuleIds: [1]
})

//const adsProvider = [
//	"*://*.doubleclick.net/*",
//	"*://*.scorecardresearch.com/*",
//	"*://*.googlesyndication.com/*",
//	"*://*.google-analytics.com/*",
//	"*://*.zedo.com/*",
//	"*://partner.googleadservices.com/*",
//	"*://creative.ak.fbcdn.net/*",
//	"*://*.adbrite.com/*",
//	"*://*.exponential.com/*",
//	"*://*.quantserve.com/*",
//]

//chrome.webRequest.onBeforeRequest.addListener(
  //  function(details) 
	//{ 
	//	return { cancel: true }
	//},
    //{ 
	//	urls:adsProvider 
	//},
    //["blocking"]
//)