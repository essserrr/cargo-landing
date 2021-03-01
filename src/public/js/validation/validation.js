$(document).ready(function () {
    if (!$().validationEngine) {
        console.log('Validation engine is not connected');
        return;
    }
    $('#form-delivery, #form-phoneback').validationEngine();
});
