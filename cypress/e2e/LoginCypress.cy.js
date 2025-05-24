describe('login test for cypress', function () {
    // it('login with credentials', () => {
    //     cy.visit("https://ineuron-courses.vercel.app/login")
    //     cy.get("#email1").type("ineuron@ineuron.ai")
    //     cy.get("#password1").type("ineuron")
    //     cy.get(".submit-btn").click();


    // });

    it('login with valid credential xpath', () => {

        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.login1("ineuron@ineuron.ai","ineuron")
        //cy.get('.errorMessage').should("contain","Email and Password Doesn't match")
        //cy.get('.errorMessage').should("contain","Password is required")
        cy.get(".submit-btn").click();

       // cy.title().should("equal", "iNeuron Courses")
       // cy.xpath("//button[text()='Sign out']").click();
        //cy.get("button[type='submit']").should("be.visible")

    });



});