const url = require("../../Helpers/apiURL");
const { ClientId_0793 } = require("../../Helpers/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Rate", function () {
    this.timeout(5000);

        it("Real market prices for a trading pair (BTC/EUR)", () => {
            return axios.get(
                url.rate("BTC","EUR"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (BTC/RUB)", () => {
            return axios.get(
                url.rate("BTC","RUB"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (BTC/USDT_ERC20)", () => {
            return axios.get(
                url.rate("BTC","USDT_ERC20"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (ETH/BTC)", () => {
            return axios.get(
                url.rate("ETH","BTC"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (ETH/EUR)", () => {
            return axios.get(
                url.rate("ETH","EUR"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (ETH/RUB)", () => {
            return axios.get(
                url.rate("ETH","RUB"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (ETH/USDT_ERC20)", () => {
            return axios.get(
                url.rate("ETH","USDT_ERC20"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (USDT_ERC20/BTC)", () => {
            return axios.get(
                url.rate("USDT_ERC20","BTC"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (USDT_ERC20/EUR)", () => {
            return axios.get(
                url.rate("USDT_ERC20","EUR"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Real market prices for a trading pair (USDT_ERC20/RUB)", () => {
            return axios.get(
                url.rate("USDT_ERC20","RUB"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        })
});