$(function () {
    if (!$().bxSlider) {
        console.log('Bx slider is not connected');
        return;
    }
    $('.js-review-slider').bxSlider({
        pager: false,
        controls: true,
    });
});
