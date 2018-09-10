const { assert } = require('chai');

const getErrors = (validation, expected) => {
    assert.isDefined(validation, 'Expected validation errors but got none');
    const { errors } = validation;
    assert.isDefined(errors);
    if(expected !== undefined) {
        assert.equal(Object.keys(errors).length, expected);
    }
    return errors;
};

module.exports = {
    getErrors
};