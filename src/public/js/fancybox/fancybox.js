$(function () {
    if (!$().lettering) {
        console.log('Lettering is not connected');
        return;
    }

    const phonecallbackHandler = function (event) {
        const opens = $(event.currentTarget).attr('data-open-target');
        $.fancybox.open({
            src: opens,
            type: 'inline',
        });
    };

    $('.js-callback').on('click', phonecallbackHandler);
    $('.js-callback').trigger('click');
});
