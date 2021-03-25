const url = require("../../test_data/apiURL");
const { ClientId_0793 } = require("../../test_data/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Time", function () {
    this.timeout(5000);

        it("Check server time", () => {
            return axios.get(
                url.time,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        })
});