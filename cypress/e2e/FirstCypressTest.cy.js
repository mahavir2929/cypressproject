describe('smoke test', () => {
    it('verify title', () => {
        cy.visit("https://ineuron-courses.vercel.app")
        cy.title().should("contain", "Courses")

    });

    it('verify title', () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=common/home")
        cy.title().should("equal", "Your Stor")



    })
});