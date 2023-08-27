describe('Register with INeuron', () => {
    it('New User', () => {

        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.viewport(1920,1080)

        cy.contains("New user? Signup").click()
        cy.contains("Sign up").should("be.disabled")
        
        //cy.get("input[id = 'name']").type("Veera{shift+alt+b}") // along with text we can also pass the keys 
        //cy.get("input[id = 'name']").type("Veera", {timeout:10000})  // pass the time to wait for the specific element
        // cypress by default wait for 4 sec to perform any action webelement

        cy.get("input[id = 'name']").type("Veera")
        cy.get("input[id = 'email']").type("malluri189@gmail.com")
        cy.get("input[id = 'password']").type("zxcvbnmasdf123")

        //cy.get("input[type='checkbox']").click({multiple:true}) // selects all the checkbox matching that path
        //cy.get("input[type='checkbox']").first().click() // selects the first checkbox
        //cy.get("input[type='checkbox']").last().click() // selects the last check box
        //cy.get("input[type='checkbox']").eq(2).click() // selects 2nd element matching the path 
        cy.xpath("//label[text() ='Testing']/preceding::input[1]").click()
        cy.get("input[type='radio']").first().click()

        //cy.get("input[type='radio']").first().click({force:true})  // we can perform force actions even if the element is disabled

        cy.get("select[id = 'state']").select("Andhra Pradesh")
        cy.get("select[id = 'state']").select(1)
        cy.get("button[type = 'submit']").should("be.enabled").click()
 

    });
});