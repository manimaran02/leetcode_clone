const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFound extends BaseError{
    constructor(description,details){
        super("NotFound",StatusCodes.NOT_FOUND,description,details)
    }
}


module.exports = NotFound