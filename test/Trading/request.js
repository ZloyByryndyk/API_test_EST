const url = require("../../test_data/apiURL");
const { ClientId_0793, createRequest } = require("../../test_data/Send_data");
const { expect } = require("chai");
const axios = require("axios");

describe("Request", function () {
    this.timeout(5000);

        it("Returns the status of the request with request ID {ID}", () => {
            return axios.get(
                url.requestId,
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(BTC/EUR)", () => {
            return axios.get(
                url.request("BTC","EUR"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(BTC/RUB)", () => {
            return axios.get(
                url.request("BTC","RUB"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(BTC/USDT_ERC20)", () => {
            return axios.get(
                url.request("BTC","USDT_ERC20"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(ETH/BTC)", () => {
            return axios.get(
                url.request("ETH","BTC"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(ETH/EUR)", () => {
            return axios.get(
                url.request("ETH","EUR"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(ETH/RUB)", () => {
            return axios.get(
                url.request("ETH","RUB"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(ETH/USDT_ERC20)", () => {
            return axios.get(
                url.request("ETH","USDT_ERC20"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(USDT_ERC20/BTC)", () => {
            return axios.get(
                url.request("USDT_ERC20","BTC"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(USDT_ERC20/EUR)", () => {
            return axios.get(
                url.request("USDT_ERC20","EUR"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Returns a list of completed requests with relevant request details and data.(USDT_ERC20/RUB)", () => {
            return axios.get(
                url.request("USDT_ERC20","RUB"),
                {headers:
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        //Sell
        it("Accepts new trading requests for a specified trading pair. (BTC/EUR) (sell)", () => { 
            return axios.post(
                url.request(0.1, "BTC", "EUR", "sell") ,
                createRequest(0.1, "BTC", "EUR","sell"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (BTC/RUB) (sell)", () => { 
            return axios.post(
                url.request(0.1, "BTC", "RUB", "sell") ,
                createRequest(0.1, "BTC", "RUB","sell"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (BTC/USDT_ERC20) (sell)", () => { 
            return axios.post(
                url.request(0.1, "BTC", "USDT_ERC20", "sell") ,
                createRequest(0.1, "BTC", "USDT_ERC20","sell"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (ETH/BTC) (sell)", () => { 
            return axios.post(
                url.request(0.1, "ETH", "BTC", "sell") ,
                createRequest(0.1, "ETH", "BTC","sell"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (ETH/EUR) (sell)", () => { 
            return axios.post(
                url.request(0.1, "ETH", "EUR", "sell") ,
                createRequest(0.1, "ETH", "EUR","sell"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (ETH/RUB) (sell)", () => { 
            return axios.post(
                url.request(0.1, "ETH", "RUB", "sell") ,
                createRequest(0.1, "ETH", "RUB","sell"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (ETH/USDT_ERC20) (sell)", () => { 
            return axios.post(
                url.request(0.1, "ETH", "USDT_ERC20", "sell") ,
                createRequest(0.1, "ETH", "USDT_ERC20","sell"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (USDT_ERC20/BTC) (sell)", () => { 
            return axios.post(
                url.request(0.1, "USDT_ERC20", "BTC", "sell") ,
                createRequest(0.1, "USDT_ERC20", "BTC","sell"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (USDT_ERC20/EUR) (sell)", () => { 
            return axios.post(
                url.request(0.1, "USDT_ERC20", "EUR", "sell") ,
                createRequest(0.1, "USDT_ERC20", "EUR","sell"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (USDT_ERC20/RUB) (sell)", () => { 
            return axios.post(
                url.request(0.1, "USDT_ERC20", "RUB", "sell") ,
                createRequest(0.1, "USDT_ERC20", "RUB","sell"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        // Buy
        it("Accepts new trading requests for a specified trading pair. (BTC/EUR) (buy)", () => { 
            return axios.post(
                url.request(0.1, "BTC", "EUR", "buy") ,
                createRequest(0.1, "BTC", "EUR","buy"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (BTC/RUB) (buy)", () => { 
            return axios.post(
                url.request(0.1, "BTC", "RUB", "buy") ,
                createRequest(0.1, "BTC", "RUB","buy"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (BTC/USDT_ERC20) (buy)", () => { 
            return axios.post(
                url.request(0.1, "BTC", "USDT_ERC20", "buy") ,
                createRequest(0.1, "BTC", "USDT_ERC20","buy"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (ETH/BTC) (buy)", () => { 
            return axios.post(
                url.request(0.1, "ETH", "BTC", "buy") ,
                createRequest(0.1, "ETH", "BTC","buy"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (ETH/EUR) (buy)", () => { 
            return axios.post(
                url.request(0.1, "ETH", "EUR", "buy") ,
                createRequest(0.1, "ETH", "EUR","buy"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (ETH/RUB) (buy)", () => { 
            return axios.post(
                url.request(0.1, "ETH", "RUB", "buy") ,
                createRequest(0.1, "ETH", "RUB","buy"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (ETH/USDT_ERC20) (buy)", () => { 
            return axios.post(
                url.request(0.1, "ETH", "USDT_ERC20", "buy") ,
                createRequest(0.1, "ETH", "USDT_ERC20","buy"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (USDT_ERC20/BTC) (buy)", () => { 
            return axios.post(
                url.request(0.1, "USDT_ERC20", "BTC", "buy") ,
                createRequest(0.1, "USDT_ERC20", "BTC","buy"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (USDT_ERC20/EUR) (buy)", () => { 
            return axios.post(
                url.request(0.1, "USDT_ERC20", "EUR", "buy") ,
                createRequest(0.1, "USDT_ERC20", "EUR","buy"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        }),

        it("Accepts new trading requests for a specified trading pair. (USDT_ERC20/RUB) (buy)", () => { 
            return axios.post(
                url.request(0.1, "USDT_ERC20", "RUB", "buy") ,
                createRequest(0.1, "USDT_ERC20", "RUB","buy"),
                {headers: 
                    ClientId_0793
                }).then(res => {
                    expect(res.status).to.equal(200);
                })
        })
});