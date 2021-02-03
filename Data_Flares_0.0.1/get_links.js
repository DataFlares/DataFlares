$(function () {

    let url_index = random_int(0, $("a").length - 1);
    setTimeout(function () {
        $("a")[url_index].click();
    }, 5000);

    document.title = "Data Flares - Your Privacy Tab.";
    change_favicon("https://i.ibb.co/DMzYhcF/icon.png");
});

function random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function change_favicon(img) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');
    
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.setAttribute('rel', 'shortcut icon');
        var head = document.querySelector('head');
        head.appendChild(favicon);
    }
    
    
    favicon.setAttribute('type', 'image/png');
    favicon.setAttribute('href', img);
}