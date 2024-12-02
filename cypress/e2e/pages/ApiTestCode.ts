
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
let getUser: any
let base_url = 'http://ptsv3.com/t/Varagovi/post/'


export default class ApiTestCode {

    validateGetResponse() {
        cy.request({
            method: 'GET',
            url: base_url,
            headers: {
                'authorization': "Bearer 2e179d220ca191c3be1fce23a6072e17a271897ea3990d157d5c9bc1c41144f2"
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    }

    validatePostResponse() {
        const timestamp = Date.now();
        // Define URL and payload data
        const apiUrl = 'http://ptsv3.com/t/Varagovi/post/';
        const payload = {
            name: 'Username',
            email: 'email'+timestamp+'@yopmail.com',
            gender: 'female',
            status: 'active',
        };
    
        // Perform API request to update data
        cy.request({
            method: 'POST',
            url: apiUrl,
            body: payload,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'authorization': "Bearer 2e179d220ca191c3be1fce23a6072e17a271897ea3990d157d5c9bc1c41144f2" 
            }
        }).then(function(response) {
            if (response.status == 200) {
                expect(response.body).to.have.property("name","Username")
            }
            else{
    
                throw new Error(`Failed to update data. Status code: ${response.status}`);
            }
        })
    }}