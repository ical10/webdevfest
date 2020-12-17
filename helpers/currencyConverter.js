const currencyConverter = (value, currency) => {
    if (currency === "IDR") {
        value /= 14000
        let valueFixed = value.toFixed(2)
        return `USD ${valueFixed}`
    }
    else {
        return `IDR ${value}`
    }
}

module.exports = currencyConverter
