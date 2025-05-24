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
        cy.wait(3000)
        cy.contains("Manage Courses").click();
        cy.xpath("//table[@class='courses-table table table-borderless']//tbody/tr").its('length').then((count)=>{

         cy.log('found elements ' +  count)
         expect(count).to.be.greaterThan(0);

         })
        cy.xpath("//table[@class='courses-table table table-borderless']//tbody/tr")
        cy.contains('Add New Course ').click({ force: true });
        cy.get('#thumbnail').attachFile('inheritacne.png');
        cy.get('#name').type(this.datatest.courseName)
        cy.get('#description1').highlight().should('be.visible').type(this.datatest.description)
        cy.get('#instructorNameId').type('Mahavir')
        cy.xpath("//div[@class='intructorsList']/p").click();
        cy.get('#price').clear().type(this.datatest.price)
        cy.xpath("//input[@name='startDate1']").click()
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
        //cy.xpath("//div[@class='manage-course']//tbody/tr[3]/td[text()='php']//preceding::input[1]").check(); 
     

    });

    // afterEach(function () {
    //     if (this.currentTest.state === 'failed') {
    //       const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    //       const testName = this.currentTest.title.replace(/\s+/g, '_');
    //       cy.screenshot(`${testName}-failed-${timestamp}`);
    //     }
    //   });

    //   afterEach(function () {
    //     if (this.currentTest.state === 'failed') {
    //       // Highlight the last element Cypress interacted with
    //       cy.get('.command-name-assert')
    //         .last()
    //         .then((el) => {
    //           const selector = el[0]?.parentElement?.getAttribute('data-cy');
    //           if (selector) {
    //             cy.get(`[data-cy="${selector}"]`).then(($el) => {
    //               $el.css('border', '3px solid red');
    //             });
    //           }
    //         });
      
    //       // Optional: Take screenshot after highlight
    //       const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    //       const testName = this.currentTest.title.replace(/\s+/g, '_');
    //       cy.screenshot(`${testName}-highlighted-${timestamp}`);
    //     }
    //   });
    



})