const url = require("../../Helpers/apiURL");
const { ClientId_0793Billing, clientsData } = require("../../Helpers/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Clients", function () {
    this.timeout(5000);

        it("Get the list of client in your account", () => {
            return axios.get(
                url.clients,
                {headers:
                    ClientId_0793Billing
                }).then(res => {
                    expect(res.status).to.equal(200);
                    expect(res.data).not.to.equal(null);
                })
        }),

        it("Creating a client for address management ddd", () => {
            return axios.post(
                url.clientsPost("123"),
                clientsData(123),
                {headers:
                    ClientId_0793Billing
                }).then(res => {
                    expect(res.status).to.equal(200);
                    expect(res.data).not.to.equal(null);
                })
        })
});