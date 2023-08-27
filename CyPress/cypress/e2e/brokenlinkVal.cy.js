describe('Check the Broken links in the page', () => {
    it('Broken link validation', function() {
        
        cy.visit("https://ineuron-courses.vercel.app/login")

        cy.get("a").each(link => {

            let link_url = link.prop('href')

            cy.log(link_url)

            cy.request({url:link_url, failOnStatusCode:false}).then(function(resp){

                cy.log(resp.status)
            })

            
        })
    });
});