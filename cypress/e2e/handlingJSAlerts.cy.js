describe('Handling Java script alerts', () => {
    it('General alert', function() {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Alert").click()

        cy.on("window:alert",function(msg){

            expect(msg).to.be.equal("I am a JS Alert")
        })
        
    });

    it('confirm alert', function() {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()

        cy.on("window:confirm",function(msg){

            expect(msg).to.be.equal("I am a JS Confirm")
            
            // If you want to click confirm on the alert then cypress will confirm the prompt automatically
            // But if you want to click cancel on the prompt then write "return false" 
            
            return false
        })

        cy.contains("You clicked: Cancel").should("be.visible")
    });

    it('prompt stub', function() {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then(function(win){   // cy.window returns the window object in DOM and store it in "win" variable

        cy.contains("Click for JS Prompt").click();// this statement should be inside the function

        cy.stub(win, "prompt").returns("Cypress")
        cy.contains("You entered: Cypress").should("be.visible")   
        })

    });
});