describe('DoubleClick', () => {
    it('Double click', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        
        cy.xpath("//span[contains(text(), 'right click me')]").rightclick()

        //cy.pause()  this command will pause the execution and you can either resume or you can run step by step

        cy.xpath("//li/span[contains(text(), 'Delete')]").click()
        
        cy.on("window:alert",function(msg){

            expect(msg).to.be.equal("clicked: delete")
        })
    });
});