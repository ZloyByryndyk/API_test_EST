const url = require("../../test_data/apiURL");
const { ClientId_0793 } = require("../../test_data/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Trading", function () {
    this.timeout(5000);

        it("Returns balances of your trading account with EstChange OU", () => {
            return axios.get(
                url.balance,
                {headers: 
                    ClientId_0793   
                }).then(res => {
                    expect(res.status).to.equal(200);
                    expect(res.data,).not.to.equal(null);
                })
        })
});