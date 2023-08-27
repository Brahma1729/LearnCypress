describe('Handle Auto Suggestion', () => {

    it('Google auto suggetsion', () => {
        
        cy.visit("https://www.google.com/")

        cy.xpath("//textarea[@type = 'search']").type("Auto sugession",{delay:100})

        cy.xpath("//div[@role = 'option']/div[1]/span").each(function(element)
        {
            //cy.log(element.text())

            if(element.text().includes("examples"))
            {
                cy.wrap(element).click()
                // wrap is a powerful function it converts anything to cypress variable
                // function(element) inside each function is jquery element.
            }
        })

    });
    
});