describe('Handle Auto Suggestion', () => {

    it('Google auto suggetsion', () => {
        
        cy.visit("https://www.google.com/")

        cy.xpath("//textarea[@type = 'search']").type("Auto sugession",{delay:100})

        //cy.xpath("//div[@role = 'option']/div[1]/span")

        cy.SelectValueFromList("//div[@role = 'option']/div[1]/span","meaning")

    });
    
});