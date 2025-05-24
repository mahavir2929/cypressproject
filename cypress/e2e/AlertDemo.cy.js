describe('handle alerts', () => {
    it('validate the alert', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains('Click for JS Alert').click();

        cy.on("window:alert", function (msg) {

            expect(msg).to.be.equal("I am a JS Alert")

        })


    });


    it.only('validate the confirm alert', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains('Click for JS Confirm').click();

        cy.on("window:confirm", function (msg) {

            expect(msg).to.be.equal("I am a JS Confirm")

            return false

        })
        cy.contains("You clicked: Cancel").should("be.visible")
        

    });




});