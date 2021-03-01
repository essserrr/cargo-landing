$(function () {
    if (!$().lettering) {
        console.log('Lettering is not connected');
        return;
    }

    const phonebackHandler = function (event) {
        const opens = $(event.currentTarget).attr('data-open-target');
        $.fancybox.open({
            src: opens,
            type: 'inline',
        });
    };

    $('.js-phoneback').on('click', phonebackHandler);
    //$('.js-phoneback').trigger('click');

    const closeHandler = function () {
        $.fancybox.close();
    };
    $('button[type="close-fancy"]').on('click', closeHandler);
});
