const BaseError = require("./base.error");
const {StatusCodes} = require('http-status-codes')

class NotImplented extends BaseError{
    constructor(methodName,details){
        super("NotImplented",StatusCodes.NOT_IMPLEMENTED,`${methodName}`,{})
    }
}


module.exports = NotImplented