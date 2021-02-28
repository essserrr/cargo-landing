$(function () {
    if (!$().lettering) {
        console.log('Lettering is not connected');
        return;
    }
    $('.js-embelem').lettering();
});
