$(function () {
    if (!$().bxSlider) {
        console.log('Bx slider is not connected');
        return;
    }

    let prevTarget = $('.js-review-flag#flag-0');

    const slideCallback = function ($slideElement, oldIndex, newIndex) {
        const newID = `flag-${newIndex}`;
        if (prevTarget.attr('id') === newID) return;

        const target = $(`#${newID}`);

        target.addClass('active');
        if (prevTarget) {
            prevTarget.removeClass('active');
        }
        prevTarget = target;
    };

    slider = $('.js-review-slider').bxSlider({
        pager: false,
        controls: true,
        onSlideBefore: slideCallback,
    });

    const flagClickHandler = function (event) {
        const target = $(event.currentTarget);

        if (prevTarget.attr('id') === target.attr('id')) return;

        const reviewID = target.attr('id').slice(5);

        slider.goToSlide(reviewID);

        target.addClass('active');
        if (prevTarget) {
            prevTarget.removeClass('active');
        }

        prevTarget = target;
    };

    $('.js-review-flag').on('click', flagClickHandler);
});
