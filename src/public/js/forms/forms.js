$(function () {
    if (!$.fancybox) {
        console.log('Fancybox is not connected');
        return;
    }

    const submitPhoneHandler = function (event) {
        event.preventDefault();

        const target = $(event.currentTarget);
        if (!target.validationEngine('validate')) return;

        target.css('display', 'none');
        target
            .parents('.callb-form')
            .find('.js-close-fancy-button')
            .toggleClass('hidden');

        target.parents('.diolog__content').addClass('diolog--success');
    };

    $('#form-phoneback').on('submit', submitPhoneHandler);

    const submitCostsHandler = function (event) {
        event.preventDefault();

        const target = $(event.currentTarget);
        if (!target.validationEngine('validate')) return;

        target.css('display', 'none');

        const parents = target.parents('.callb-form');
        parents.find('.js-close-fancy-button').toggleClass('hidden');
        parents
            .find('.callb-form__title')
            .html('Ваша заявка \nна рассчет стоимости \nдоставки принята');

        target.parents('.diolog__content').addClass('diolog--success');
    };
    $('#form-costs').on('submit', submitCostsHandler);
});
