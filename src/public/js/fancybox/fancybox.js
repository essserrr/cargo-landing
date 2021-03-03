$(function () {
    if (!$.fancybox) {
        console.log('fancybox is not connected');
        return;
    }

    const phonebackHandler = function (event) {
        console.log($(event.currentTarget).attr('data-open-target'))
        const opens = $(event.currentTarget).attr('data-open-target');
        $.fancybox.open({
            src: opens,
            type: 'inline',
        });
    };

    $('.js-phoneback').on('click', phonebackHandler);
    $('.js-costs').on('click', phonebackHandler);


    const reviewHandler = function (event) {
        const opens = $(event.currentTarget).parents(".review").find(".diolog");

        $.fancybox.open({
            src: opens,
            type: 'inline',
        });
    };
    $('.js-read-more').on('click', reviewHandler);

    const closeHandler = function () {
        $.fancybox.close();
    };
    $('button[type="close-fancy"]').on('click', closeHandler);
});
