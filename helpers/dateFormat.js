const {format} = require('date-fns')

const dateFormat = () => {
    const formattedDate = format(new Date(), 'PPPP')
    return formattedDate
}

module.exports = dateFormat
