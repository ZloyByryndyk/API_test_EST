const url = require("../../test_data/apiURL");
const { ClientId_0793 } = require("../../test_data/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Trading", function () {
    this.timeout(5000);

        it("Real market prices for a trading pair (BTC/EUR)", () => {
            return axios.get(
                url.rate_BTC_EUR,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (BTC/RUB)", () => {
            return axios.get(
                url.rate_BTC_RUB,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (BTC/USDT_ERC20)", () => {
            return axios.get(
                url.rate_BTC_USDT_ERC20,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (ETH/BTC)", () => {
            return axios.get(
                url.rate_ETH_BTC,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (ETH/EUR)", () => {
            return axios.get(
                url.rate_ETH_EUR,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (ETH/RUB)", () => {
            return axios.get(
                url.rate_ETH_RUB,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (ETH/USDT_ERC20)", () => {
            return axios.get(
                url.rate_ETH_USDT_ERC20,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (USDT_ERC20/BTC)", () => {
            return axios.get(
                url.rate_USDT_ERC20_BTC,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (USDT_ERC20/EUR)", () => {
            return axios.get(
                url.rate_USDT_ERC20_EUR,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (USDT_ERC20/RUB)", () => {
            return axios.get(
                url.rate_USDT_ERC20_RUB,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        })
});