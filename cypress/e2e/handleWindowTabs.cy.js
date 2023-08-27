describe('Handle window tabs', () => {
    it('Mutiple windows', function () {
        cy.visit("https://ineuron-courses.vercel.app/login")
       
       cy.get("input[name = 'email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")

       cy.get("input[name = 'password1']").type("ineuron").should("have.value", "ineuron")

       cy.get("button[type = 'submit']").click()

       cy.wait(5000)

       cy.get(".navbar-menu-links > button").should("be.visible")

       cy.xpath("//span[text() = 'Manage']").realHover()

       cy.wait(1000)

       cy.xpath("//span[text() = 'Manage Courses']").click()
      
       cy.contains("Manage Categories").invoke("removeAttr","target").click({force:true})
       //for links which open in new tab always have a attribute "target" with value "_blank" to open 
       // the that kind ok links in same window we need to remove that attribute
       //This is one of the workaround because cypress can't work with mutiple windows i.e., one of the cypress trade-off

       cy.window().then(function(win){
        cy.contains("Add New Category").click({force:true})
        cy.stub(win, "prompt").returns("Playwrite")
       })

       cy.contains("Playwrite").should("be.visible")

       cy.xpath("//td[contains(text(),'Playwrite')]//following::button[contains(text(),'Delete')]").click()

       cy.xpath("//button[contains(text(),'Delete')]/parent::div/button[2]").click()

       cy.wait(1000)
       cy.contains("Playwrite").should("not.exist")
       
    });
});