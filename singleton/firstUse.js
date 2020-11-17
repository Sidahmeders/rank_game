const { logger } = require('./FancyLogger')

function logImplementation1() {
    logger.printLogCount()
    logger.log('File One')
    logger.printLogCount()
}

exports.logImplementation1 = logImplementation1