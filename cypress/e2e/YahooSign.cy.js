describe('yahoo signin', () => {
    it('validate yahoo new signin', () => {
        cy.visit("https://login.yahoo.com/account/create?.intl=de&.lang=de-DE&src=ym&activity=ybar-mail&pspid=2142153770&.done=https%3A%2F%2Fmail.yahoo.com%2Fd%3F.intl%3Dde%26.lang%3Dde-DE%26pspid%3D2142153770%26activity%3Dybar-mail&specId=yidregsimplified&done=https%3A%2F%2Fmail.yahoo.com%2Fd%3F.intl%3Dde%26.lang%3Dde-DE%26pspid%3D2142153770%26activity%3Dybar-mail")
        cy.xpath("//button[@name='signup']").should("be.disabled")
        cy.xpath("//input[@id='usernamereg-firstName']").type("mohanlal")
        cy.xpath("//input[@id='usernamereg-lastName']").type("shah")
        cy.xpath("//input[@name='userId']").type("mohanlalshah")
        cy.xpath("//input[@id='usernamereg-password']").type("mohanlalshah")
        cy.xpath("//select[@id='usernamereg-month']").select("Mai")
        cy.xpath("//input[@id='usernamereg-day']").type("29").should("have.value","29")
        cy.xpath("//input[@id='usernamereg-year1']").type("1988")
        cy.xpath("//input[@id='checkTerms']").check({force: true})

    });
});