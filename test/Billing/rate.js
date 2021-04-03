const url = require("../../Helpers/apiURL");
const { ClientId_0793Billing } = require("../../Helpers/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Billing", function () {
    this.timeout(5000);

    it("Returns live market prices for the specified trading pair, including all trading margins and commissions associated with your account. (BTC%3AEUR)", () => {
            return axios.get(
                url.ratePair("BTC%3AEUR"),
                {headers: 
                    ClientId_0793Billing   
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns live market prices for the specified trading pair, including all trading margins and commissions associated with your account. (BTC%3AUSDT_ERC20)", () => {
            return axios.get(
                url.ratePair("BTC%3AUSDT_ERC20"),
                {headers: 
                    ClientId_0793Billing   
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns live market prices for the specified trading pair, including all trading margins and commissions associated with your account. (ETH%3AEUR)", () => {
            return axios.get(
                url.ratePair("ETH%3AEUR"),
                {
                    headers:
                        ClientId_0793Billing
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),
        
        it("Returns live market prices for the specified trading pair, including all trading margins and commissions associated with your account. (ETH%3AUSDT_ERC20)", () => {
            return axios.get(
                url.ratePair("ETH%3AUSDT_ERC20"),
                {
                    headers:
                        ClientId_0793Billing
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns live market prices for the specified trading pair, including all trading margins and commissions associated with your account. (USDT_ERC20%3AEUR)", () => {
            return axios.get(
                url.ratePair("USDT_ERC20%3AEUR"),
                {
                    headers:
                        ClientId_0793Billing
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        })
});