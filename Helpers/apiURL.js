const baseURL = "http://dev-trading-api.estchange.io/"
const baseBillingURL = "http://dev-billing-api.estchange.io/"

const url = {
//GET запросы
    balance: baseURL + "balance",

    rate: (firstCurrency, secondCurrency) => baseURL + `rate/${firstCurrency}/${secondCurrency}`,

    request: (coin, currencyUnit) => baseURL + `requests?coin=${coin}&currencyUnit=${currencyUnit}`,

    requestId: baseURL + "requests/843926d0-8691-11eb-86b5-0d117786fb91",

    ping: baseURL + "ping",

    time: baseURL + "time",

    clients: baseBillingURL + "clients",

//POST запросы
    request: (amount, coin, currentlyUnit, tradeSide) => (baseURL + `requests?amount=${amount}&coin=${coin}&currencyUnit=${currentlyUnit}&tradeSide=${tradeSide}`),

    clientsPost: (clientUid) => (baseBillingURL + `clients?clientUid=${clientUid}`)
}

    

module.exports = url;