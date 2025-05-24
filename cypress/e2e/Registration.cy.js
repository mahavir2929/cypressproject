describe('registration process', () => {
    it('create user for registration', () => {
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.contains("New user? Signup").click();
        cy.contains("Sign up").should("be.disabled");
        cy.get("#name").type("rohan shah")
        cy.get("#email").type("rohan@test.com")
        cy.get("#password").type("mohan123")
        cy.xpath("//label[text()='testing']//preceding-sibling::input").click();
        cy.get("input[type='radio']").first().click();
        cy.get("select[name='state']").select("Goa").should("have.value","Goa")
        cy.contains("Sign up").should("be.enabled");
        cy.get("button[type='submit']").click();
        cy.xpath("//input[@id='email1']").type("rohan@test.com")
        cy.xpath("//input[@id='password1']").type("rohan123")
        cy.xpath("//button[text()='Sign in']").click()

    });
});