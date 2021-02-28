$(document).ready(function () {
    if (!$().validationEngine) {
        comsole.log('Validation engine is not connected');
        return;
    }
    $('#form-delivery').validationEngine();
});
