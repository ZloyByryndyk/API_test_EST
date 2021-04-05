const url = require("../../Helpers/apiURL");
const { ClientId_0793Billing } = require("../../Helpers/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Withdrawal", function () {
    this.timeout(5000);

    it("Get withdrawal information by id", () => {
        return axios.get(
            url.withdrawalID("026f98e0-4b5a-11eb-b5f9-1b6e8515c805"),
            {headers:
                ClientId_0793Billing
            }).then(res => {
                expect(res.status).to.equal(200);
            })
    })
})