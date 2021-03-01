$(document).ready(function () {
    const $target = $('.js-select');
    const $window = $(window);

    const clickHandler = function (event) {
        const currentTarget = $(event.currentTarget);
        currentTarget.toggleClass('selected');

        const closeCallback = function (event) {
            const mousedownTarget = $(event.target);
            const currentTargetCLiked = mousedownTarget.is(currentTarget);

            if (currentTargetCLiked) {
                $window.off('mousedown', closeCallback);
            } else {
                currentTarget.toggleClass('selected');
                $window.off('mousedown', closeCallback);
            }
        };

        $window.on('mousedown', closeCallback);
    };
    $target.on('click', clickHandler);

    const selectHandler = function (event) {
        $(event.currentTarget).removeClass('select--default-selected');
    };
    $target.on('change', selectHandler);
});
