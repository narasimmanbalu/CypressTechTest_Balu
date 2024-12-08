
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
let getUser: any
const token = Cypress.env('BEARER_TOKEN');


export default class ApiTestCode {

    sendGetRequest(url) {
        cy.request({
            method: 'GET',
            url: url,
            headers: {
                authorization: `Bearer ${token}`,
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.wrap(response).as('apiResponse');
        });
    }

    validateGetResponse(statusCode) {
        cy.get('@apiResponse').then((response) => {
            // Cast the response to the correct type
            const typedResponse = response as unknown as Cypress.Response<any>;
            const expectedResponse = parseInt(statusCode, 10);
            expect(typedResponse.status).to.eq(expectedResponse);
        });
    }

    sendPostRequest(url) {
        const timestamp = Date.now();
        const payload = {
            name: 'Username',
            email: 'email' + timestamp + '@yopmail.com',
            gender: 'female',
            status: 'active',
        };
        cy.request({
            method: 'POST',
            url: url,
            body: payload,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                authorization: `Bearer ${token}`
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.wrap(response).as('apiResponse');
        });
    }

    validateValidPostResponse(statusCode) {
        cy.get('@apiResponse').then((response) => {
            // Cast the response to the correct type
            const actualResponse = response as unknown as Cypress.Response<any>;
            const expectedResponse = parseInt(statusCode, 10);
            if (actualResponse.status == expectedResponse) {
                expect(actualResponse.body).to.have.property("name", "Username")
            }
            else {
                throw new Error(`Failed to update data. Status code: ${actualResponse.status}`);
            }
        })
    }

    validateInvalidPostResponse(statusCode) {
        cy.get('@apiResponse').then((response) => {
            // Cast the response to the correct type
            const actualResponse = response as unknown as Cypress.Response<any>;
            const expectedResponse = parseInt(statusCode, 10);
            expect(actualResponse.status == expectedResponse)
        });
    }
}