describe('hande iframe', () => {
    it('test for iframe', () => {
        cy.visit("https://www.globalsqa.com/demo-site/draganddrop/");
        cy.frameLoaded()
        .iframe()
        .contains('High Tatras 2')
        .click();

    });
});