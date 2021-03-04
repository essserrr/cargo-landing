$(document).ready(function () {
    if (!$().validationEngine) {
        console.log('Validation engine is not connected');
        return;
    }
    $('#form-delivery, #form-phoneback, #form-costs').validationEngine({
        promptPosition: 'topRight:-100',
        addPromptClass:"hidden"
    });

});
