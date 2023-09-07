class login {

    /*
    This is page object model class. In this class we will find the elements and return them by using it's methods or 

    we can also use get and set methods also to access. 

    At the end of the class we can export the whole class or we can create an object and export the object.

    Import these pages in cypress test case.

    */

    enterUsername(){
        return cy.get("input[name = 'email1']")
    }

    get enternewUsername(){
        return cy.get("input[name = 'email1']")
    }

    enterPassword(){
        return cy.get("input[name = 'password1']")
    }

    get enternewPassword(){
        return cy.get("input[name = 'password1']")
    }

    clickSubmitBtn(){
        return cy.get("button[type = 'submit']")
    }

    get clicknewSubmitBtn(){
        return cy.get("button[type = 'submit']")
    }


    loginApp(username, password){

        cy.get("input[name = 'email1']").type(username)

        cy.get("input[name = 'password1']").type(password)

        cy.get("button[type = 'submit']").click()

    }

}
export default login