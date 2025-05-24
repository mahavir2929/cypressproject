describe('handle keyboard events', () => {
    it('handle keyboard', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        //cy.xpath("//input[@id='email1']").type("ineuron@ineuron.ai")
        //cy.xpath("//input[@id='password1']").type("password{enter}")
        cy.get('#email1').type("mukesh@gmail.com")
        cy.get('#password1').type("121212{enter}")
        //cy.xpath("//button[text()='Sign in']").click()
        
    });
});