const url = require("../../Helpers/apiURL");
const { ClientId_0793Billing, coinBody } = require("../../Helpers/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Coin", function () {
    this.timeout(5000);
  
    it("Sends coins to specified address (BTC)", () => {
        return axios.post(
            url.coin("BTC"),
            coinBody("string", "spend", 0, "string"),
            {headers:
                ClientId_0793Billing
            }).then(res => {
                expect(res.status).to.equal(200);
            })
    }),
    
    it("Sends coins to specified address (ETH)", () => {
        return axios.post(
            url.coin("ETH"),
            coinBody("string", "spend", 0, "string"),
            {headers:
                ClientId_0793Billing
            }).then(res => {
                expect(res.status).to.equal(200);
            })
    }),

    it("Sends coins to specified address (USDT_ERC20)", () => {
        return axios.post(
            url.coin("USDT_ERC20"),
            coinBody("string", "spend", 0, "string"),
            {headers:
                ClientId_0793Billing
            }).then(res => {
                expect(res.status).to.equal(200);
            })
    })
})