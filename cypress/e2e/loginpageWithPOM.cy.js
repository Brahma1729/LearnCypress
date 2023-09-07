import login from "../Pages/LoginPage.cy"

describe('Login page', function(){
    it('Login page with Page Object Model', function () {

        cy.visit("https://ineuron-courses.vercel.app/login")

        let lp = new login()
        /*
        
        // This part of the code is using the methods in the login class and for each webelement

        lp.enterUsername().type("ineuron@ineuron.ai")
        lp.enterPassword().type("ineuron")

        lp.clickSubmitBtn().click()
        */


        // By passing username and password we can run all steps required to login in the method declare in login class.

        lp.loginApp('ineuron@ineuron.ai', 'ineuron')

        /* 
        below portion of the code is by using get methods. 
        
        lp.enternewUsername.type("ineuron@ineuron.ai")
        lp.enternewPassword.type("ineuron")
        lp.clicknewSubmitBtn.click()
        */
        
    })
})