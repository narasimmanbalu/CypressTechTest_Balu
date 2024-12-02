
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
let getUser: any
let base_url = 'https://gorest.co.in/public/v2/users/'


export default class ApiTestCode {

    validateGetResponse() {
        cy.request({
            method: 'GET',
            url: base_url,
            headers: {
                'authorization': "Bearer 65f50188dec1fd564a5e7e403dd3b76896d80c573fabc222f7fbb4cda3d1daee"
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    }

    validatePostResponse() {
        const timestamp = Date.now();
        // Define URL and payload data
        const apiUrl = 'https://gorest.co.in/public/v2/users/';
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
                'authorization': "Bearer 65f50188dec1fd564a5e7e403dd3b76896d80c573fabc222f7fbb4cda3d1daee"
            }
        }).then(function(response) {
            if (response.status == 201) {
                expect(response.body).to.have.property("name","Username")
            }
            else{
    
                throw new Error(`Failed to update data. Status code: ${response.status}`);
            }
        })
    }}