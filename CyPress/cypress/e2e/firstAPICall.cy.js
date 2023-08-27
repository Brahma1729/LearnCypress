describe('API call using Cypress', () => {
    it('Response Code Validation', function ()  {
        
       cy.request("https://google.com").then (function (response) {
        
            cy.log(response.status)

            cy.log(response.statusText)

            cy.log(response.duration)
       })  
    });
});