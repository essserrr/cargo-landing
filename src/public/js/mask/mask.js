$(document).ready(function () {
    if (!$().inputmask) {
        console.log('Inputmask engine is not connected');
        return;
    }
    $("input[type='phone']").inputmask('9 (999) 999-99-99');
});
