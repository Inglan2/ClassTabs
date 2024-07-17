chrome.action.onClicked.addListener((tab) => {
    chrome.windows.create().then(function (winid) {
        chrome.tabs.create({
            url: "https://classroom.google.com"
        }).then(function (e) {
            chrome.tabs.update(e.id, {
                pinned: true
            })
        })
    })
});
