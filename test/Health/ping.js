const url = require("../../Helpers/apiURL");
const { ClientId_0793 } = require("../../Helpers/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Ping", function () {
    this.timeout(5000);

        it("Test connectivity to the Rest API.", () => {
            return axios.get(
                url.ping,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        })
});