
describe('Handling Iframes', () => {
    it('IFrame1', function()  {
        
        cy.visit("https://the-internet.herokuapp.com/tinymce")

    // document.getElementsByTagName("iframe")[0].contentDocument.querySelector('p')

    // above comment is a Java Script to get the content in iframe

        cy.get("iframe").its("0.contentDocument")
                        .its("body")
                        .then(cy.wrap)
                        .clear()
                        .type("Cypress")

        //cy.frameLoaded('#tox-edit-area__iframe')

        // cy.frameLoaded()
        // To use this command u need to install iframe package from 

        cy.frameLoaded().iframe().clear().type("Cypress")


        // By Using custom command
        cy.SwitchtoIframe("iframe").clear().type("Cypress")
    
    });
});