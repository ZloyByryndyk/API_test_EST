const url = require("../../Helpers/apiURL");
const { ClientId_0793Billing } = require("../../Helpers/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Withdrawal", function () {
    this.timeout(5000);

    it("Get withdrawal information list", () => {
        return axios.get(
            url.withdrawal,
            {headers:
                ClientId_0793Billing
            }).then(res => {
                expect(res.status).to.equal(200);
            })
    })
})