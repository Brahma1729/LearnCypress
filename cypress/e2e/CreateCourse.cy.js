describe('Create course - Delete course', () => 
{
    it('Create Course', () => 
    {
       cy.visit("https://ineuron-courses.vercel.app/login")
       
       cy.get("input[name = 'email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")

       cy.get("input[name = 'password1']").type("ineuron").should("have.value", "ineuron")

       cy.get("button[type = 'submit']").click()

       cy.wait(5000)

       cy.get(".navbar-menu-links > button").should("be.visible")

       cy.xpath("//span[text() = 'Manage']").realHover()

       cy.wait(1000)

       cy.xpath("//span[text() = 'Manage Courses']").click()
       cy.xpath("//table[contains(@class, 'courses')]//tbody/tr").should("have.length", 1)
       cy.xpath("//button[text() = 'Add New Course ']").click({force:true})
       cy.get("#thumbnail").attachFile("img1.jpg");

       cy.get("input[id='name']").type("Testing123")
       cy.get("textarea[id='description']").type("Testing course")
       
       cy.get("input[id = 'instructorNameId']").type("Raghuram",{delay :100})
       cy.get("input[id = 'price']").clear().type("100")
       cy.get("input[name= 'startDate']").click()
       cy.xpath("//div[@class = 'react-datepicker__week']/div[text()= '3'and @aria-disabled = 'false']").click()

       cy.get("input[name= 'endDate']").click()
       cy.xpath("//div[@class = 'react-datepicker__week']/div[text()= '8'and @aria-disabled = 'false']").click()
       cy.wait(2000)
    
       cy.xpath("//div[contains(text(), 'Select Category')]//*[local-name() = 'path']").click({force:true})
       cy.xpath("//div[@class = 'menu-items']/button[contains(text(), 'Cypress')]").click()

       cy.xpath("//button[contains(text(), 'Save')]").click()
       cy.xpath("//table[contains(@class, 'courses')]//tbody/tr").should("have.length", 2)

    });


    it('Delete the course', () => {

       cy.visit("https://ineuron-courses.vercel.app/login")
       
       cy.get("input[name = 'email1']").type("ineuron@ineuron.ai").should("have.value","ineuron@ineuron.ai")

       cy.get("input[name = 'password1']").type("ineuron").should("have.value", "ineuron")

       cy.get("button[type = 'submit']").click()

       cy.wait(5000)

       cy.get(".navbar-menu-links > button").should("be.visible")

       cy.xpath("//span[text() = 'Manage']").realHover()

       cy.wait(1000)

       cy.xpath("//span[text() = 'Manage Courses']").click()
       cy.xpath("//table[contains(@class, 'courses')]//tbody/tr").should("have.length", 2)

       cy.xpath("//td[contains(text(), 'Cypress')]/parent::tr/td/button").click()

       cy.xpath("//table[contains(@class, 'courses')]//tbody/tr").should("have.length", 1)

    });

});