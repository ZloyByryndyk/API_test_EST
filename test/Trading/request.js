const url = require("../../test_data/apiURL");
const { ClientId_0793, POST_request } = require("../../test_data/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Trading", function () {
    this.timeout(5000);

        it("Returns the status of the request with request ID {ID}", () => {
            return axios.get(
                url.requestId,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(BTC/EUR)", () => {
            return axios.get(
                url.request_BTC_EUR,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(BTC/RUB)", () => {
            return axios.get(
                url.request_BTC_RUB,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(BTC/USDT_ERC20)", () => {
            return axios.get(
                url.request_BTC_USDT_ERC20,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(ETH/BTC)", () => {
            return axios.get(
                url.request_ETH_BTC,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(ETH/EUR)", () => {
            return axios.get(
                url.request_ETH_EUR,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(ETH/RUB)", () => {
            return axios.get(
                url.request_ETH_RUB,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(ETH/USDT_ERC20)", () => {
            return axios.get(
                url.request_ETH_USDT_ERC20,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(USDT_ERC20/BTC)", () => {
            return axios.get(
                url.request_USDT_ERC20_BTC,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(USDT_ERC20/EUR)", () => {
            return axios.get(
                url.request_USDT_ERC20_EUR,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(USDT_ERC20/RUB)", () => {
            return axios.get(
                url.request_USDT_ERC20_RUB,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        //макс значение 2 > BTC - нужно дождаться ответа
        //мин значение 0.00
        it("Accepts new trading requests for a specified trading pair. (BTC/EUR)", () => {
            return axios.post(
                url.request, POST_request,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        })
});