describe('login tc', () => {
    it('valid crendetials', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.xpath("//input[@id='email1']").type('{enter}neuron@ineuron.ai')
        cy.xpath("//input[@id='password1']").type("ineuron")

    });
});