$(function () {
    if (!$.fancybox) {
        console.log('Fancybox is not connected');
        return;
    }

    const submitHandler = function (event) {
        event.preventDefault();

        const target = $(event.currentTarget);
        if (!target.validationEngine('validate')) return;

        target.css('display', 'none');
        target
            .parents('.callb-form')
            .find('.js-close-fancy-button')
            .toggleClass('hidden');
    };

    $('#form-phoneback').on('submit', submitHandler);
});
