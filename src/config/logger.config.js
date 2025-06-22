const winston = require('winston')
const os = require('node:os')


const allowedTransports = []

allowedTransports.push(new winston.transports.Console({
    format : winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format : 'YYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}] : ${log.message }`),
        // winston.format.simple()
    )
}),
new winston.transports.File(
    {filename : 'combined.log'}))

// allowedTransports.push(new winston.transports.Console(),new winston.transports.File({filename : 'combined.log'}))

const logger = winston.createLogger({
    format : winston.format.combine(
        // winston.format.colorize(),
        winston.format.timestamp({
            format : 'YYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}] : ${log.message }`),
    ),
    transports : allowedTransports,

})


module.exports = logger