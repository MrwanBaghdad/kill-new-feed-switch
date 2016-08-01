
var id="hjobfcedfgohjkaieocljfcppjbkglfd"
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.management.get(id, function (result) {
        console.log(result.enabled);
        if (result.enabled == true)
            chrome.management.setEnabled(id, false);
        else
            chrome.management.setEnabled(id, true);
        console.log("new state " + result.enabled);
    })
}
)