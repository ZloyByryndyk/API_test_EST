//Клиент damitra@yandex.ru
const ClientId_0793 = {
    "accept":"application/json",
    "X-API-KEY": "1837898602aa9add07e78dfbd625f6899aece7ae736be77f94c7eccb84538680"
}

const ClientId_0793Billing = {
    "accept": "application/json",
    "X-API-KEY": "a71fde39dfe2c15992848f4fadfe4205ac3886217eb287d6ee52c51157222409"
}

const createRequest = (amount, coin, currentlyUnit, tradeSide) => {
    return {
        amount, coin, currentlyUnit, tradeSide
    }
}

const clientsData = (clientUid) => {
    return {
        clientUid
    }
}


module.exports = { ClientId_0793, createRequest, ClientId_0793Billing, clientsData, rate}