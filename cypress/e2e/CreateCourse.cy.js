describe('create courses', function() {

    beforeEach(function () {
        
        cy.fixture("jsondata").then(function (datatest) {
            this.datatest = datatest;

        })
    })

    it('create new course', function(){

        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.xpath("//input[@id='email1']").type(this.datatest.userName)
        cy.xpath("//input[@id='password1']").type(this.datatest.password)
        cy.xpath("//button[text()='Sign in']").click()
        cy.contains('Manage').realHover();
        cy.contains("Manage Courses").click();
        cy.wait(3000)

        cy.xpath("//table[@class='courses-table table table-borderless']//tbody/tr").its('length').then((count)=>{

         cy.log('found elements ' +  count)
         expect(count).to.be.greaterThan(0);

         })
        //cy.xpath("//table[@class='courses-table table table-borderless']//tbody/tr")
        cy.contains('Add New Course ').click({ force: true });
        cy.get('#thumbnail').attachFile('inheritacne.png');
        cy.get('#name').type(this.datatest.courseName,{parseSpecialCharSequences: false })
        cy.get('#description').type(this.datatest.description)
        cy.get('#instructorNameId').type('Mahavir')
        cy.xpath("//div[@class='intructorsList']/p").click();
        cy.get('#price').clear().type(this.datatest.price)
        cy.xpath("//input[@name='startDate']").click()
        const today = new Date().getDate() + 3;

        cy.get('.react-datepicker__month-container')  // Replace with your actual date cell class
            .contains(new RegExp(`^${today}$`))  // Match exact day number
            .click();

        cy.xpath("//input[@name='endDate']").click()
        //to select the previous month
        //cy.xpath('//button[@class="react-datepicker__navigation react-datepicker__navigation--previous"]').click();
        //const today1=new Date();
        const today1 = new Date().getDate() + 5;

        cy.get('.react-datepicker__month-container')  // Replace with your actual date cell class
           .contains(new RegExp(`^${today1}$`))  // Match exact day number
             .click();

        cy.xpath("//div[text()='Select Category']").click();
        cy.xpath("//div[@class='menu-items']/button[3]").click();
        cy.xpath("//button[text()='Save']").click();
        cy.get('.table.courses-table.table.table-borderless tbody > tr').contains('td', 'sql').should('exist')
        //cy.xpath("//div[@class='manage-course']//tbody/tr[3]/td[text()='php']//preceding::input[1]").check(); 


    });







})