const input_url = chrome.runtime.getURL('input.txt');

chrome.runtime.onMessage.addListener(function (msg, sender) {

    if ((msg.from === 'popup') && (msg.subject === 'start')) {

        let index = 0;

        $.get(input_url, function (data, status) {
            let csv_array = $.csv.toArrays(data);

            let url_index = random_int(0, csv_array.length - 1);
            let url = csv_array[url_index][0];

            chrome.tabs.create({url: url, active: true}, function (tab) {
                chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
                    if (info.status === 'complete' && tabId === tab.id) {
                        chrome.tabs.executeScript(tabId, {}, function () {
                            chrome.tabs.executeScript(tab.id, {file: "get_links.js"});
                        });
                    }
                });
            });
        });
    }
});

function random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}