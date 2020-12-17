const fs = require('fs')

const addDateToJSON = (filepath) => {
    let data = JSON.parse(fs.readFileSync(filepath, 'utf8'))


    let parsedData = data.map(el => {
        el.createdAt = new Date()
        el.updatedAt = new Date()
        return el
    })
    return parsedData
}

module.exports = addDateToJSON
