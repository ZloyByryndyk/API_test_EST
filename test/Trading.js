const {balance,rate_BTC_EUR} = require("../test_data/API_Link");
const { default_header } = require("../test_data/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Trading", () => {
    it("Check your balance", function () {
        this.timeout(5000);
        return axios.get(
            balance,
            {headers: 
                default_header   
            }).then(res => {
                expect(res.status).to.equal(200);
            })
            .catch(err => {
                throw new Error(`expected 200, got ${err.response.status} insted`)
            })
    });
    it("Real market prices for a trading pair (BTC/EUR)", function () {
        this.timeout(5000);
        return axios.get(
            rate_BTC_EUR,
            {
                headers:
                    default_header
            }).then(res => {
                expect(res.status).to.equal(200);
            })
            .catch(err => {
                throw new Error(`expected 200, got ${err.response.status} insted`)
            })
    });
});