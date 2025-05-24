describe('course end flow', () => {

    beforeEach(function () {
        cy.fixture("jsondata").then(function (datatest) {
            this.datatest = datatest;

    })  
})  
        it('verify course flow', function(){

        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.login1("ineuron@ineuron.ai","ineuron")
         cy.contains('Manage').realHover();
         cy.contains('Manage Courses').click();
         cy.xpath("//button[text()='Add New Course ']").click({force:true});
         cy.xpath("//button[text()='Save']").click()
         cy.wait(3000)
         cy.get('.errorMessage').should("contain","Please select a thumbnail!")
         cy.get('#thumbnail').attachFile('inheritacne.png');
         cy.get('#name').type(this.datatest.courseName)
         cy.get('#description').type(this.datatest.description)
         cy.get('#instructorNameId').type('Mahavir')
         cy.get('#price').clear().type(this.datatest.price)



         
        
    });
});