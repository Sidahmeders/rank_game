const { logger } = require('./FancyLogger')

function logImplementation2() {
    logger.printLogCount()
    logger.log('file Two')
    logger.printLogCount()
}

exports.logImplementation2 = logImplementation2