$(function () {

    $("#start_script").click(function () {

        $('#table_body').html('');
        $("#progress_bar").show();

        chrome.runtime.sendMessage({
            from: 'popup',
            subject: 'start'
        });

        return false;
    });
});
