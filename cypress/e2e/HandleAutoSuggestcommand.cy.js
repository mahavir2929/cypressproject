describe('Handle Google Search', () => {
    it('Select values from google search', () => {
        
        cy.visit("https://www.google.com/")
        cy.wait(10000)

        cy.get("textarea[name='q']").type("Mukesh Otwani",{delay:100})

        cy.selectValueList("//div[@role='option']/div[1]//span","cypress");


    });
});