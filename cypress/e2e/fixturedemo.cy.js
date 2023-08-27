describe('Fixture Demo', () => {

    beforeEach(function() {
        
        cy.fixture("cypressdata").then(function (jsondata) {
            
            this.jsondata = jsondata
        })
    }) 

    it('Fixture data Read', function() {
        
        cy.log(this.jsondata.name)
        cy.log(this.jsondata.body)
    });
    
});