//Клиент damitra@yandex.ru
const ClientId_0793 = {
    "accept":"application/json",
    "X-API-KEY": "1837898602aa9add07e78dfbd625f6899aece7ae736be77f94c7eccb84538680"
}

const createRequest = (amount, coin, currentlyUnit, tradeSide) => {
    return {
        amount, coin, currentlyUnit, tradeSide
    }
}

module.exports = { ClientId_0793, createRequest}