const baseURL = "http://dev-trading-api.estchange.io/"

const url = {
//GET запросы
    balance: baseURL + "balance",

    rate_BTC_EUR: baseURL + "rate/BTC/EUR",
    rate_BTC_RUB: baseURL + "rate/BTC/RUB",
    rate_BTC_USDT_ERC20: baseURL + "rate/BTC/USDT_ERC20",
    rate_ETH_EUR: baseURL + "rate/ETH/EUR",
    rate_ETH_RUB: baseURL + "rate/ETH/RUB",
    rate_ETH_USDT_ERC20: baseURL + "rate/ETH/USDT_ERC20",
    rate_ETH_BTC: baseURL + "rate/ETH/BTC",
    rate_USDT_ERC20_EUR: baseURL + "rate/USDT_ERC20/EUR",
    rate_USDT_ERC20_RUB: baseURL + "rate/USDT_ERC20/RUB",
    rate_USDT_ERC20_BTC: baseURL + "rate/USDT_ERC20/BTC",

    request_BTC_EUR: baseURL + "requests?coin=BTC&currencyUnit=EUR",
    request_BTC_RUB: baseURL + "requests?coin=BTC&currencyUnit=RUB",
    request_BTC_USDT_ERC20: baseURL + "requests?coin=BTC&currencyUnit=BTC_USDT_ERC20",
    request_ETH_EUR: baseURL + "requests?coin=ETH&currencyUnit=EUR",
    request_ETH_RUB: baseURL + "requests?coin=ETH&currencyUnit=RUB",
    request_ETH_USDT_ERC20: baseURL + "requests?coin=ETH&currencyUnit=USDT_ERC20",
    request_ETH_BTC: baseURL + "requests?coin=ETH&currencyUnit=BTC",
    request_USDT_ERC20_EUR: baseURL + "requests?coin=USDT_ERC20&currencyUnit=EUR",
    request_USDT_ERC20_RUB: baseURL + "requests?coin=USDT_ERC20&currencyUnit=RUB",
    request_USDT_ERC20_BTC: baseURL + "requests?coin=USDT_ERC20&currencyUnit=BTC",

    requestId: baseURL + "requests/843926d0-8691-11eb-86b5-0d117786fb91",

//POST запросы
    request: baseURL + "requests?amount=0.1&coin=BTC&currencyUnit=EUR&tradeSide=sell"
}

module.exports = url;