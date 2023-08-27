describe("Smoke Test Suite", () => {
    it('Verify Title', () => 
    {
        cy.visit("https://www.google.com/")
        cy.title().should("contain", "Google")
    });

    it('Verify exact title', () => 
    {
        cy.visit("https://www.google.com/")
        cy.title().should("eq", "Google")
    });

    it('verify url', () => 
    {
        cy.visit("https://www.google.com/")
        cy.url().should("contain", "google")
    });
});

