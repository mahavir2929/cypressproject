describe('create courses', () => {

    it('create new course', () => {

        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.xpath("//input[@id='email1']").type("ineuron@ineuron.ai")
        cy.xpath("//input[@id='password1']").type("ineuron")
        cy.xpath("//button[text()='Sign in']").click()
        cy.contains('Manage').realHover();
        cy.wait(3000)
        cy.contains("Manage Courses").click();
        //cy.xpath("//div[@class='table-responsive']//tbody/tr[3]/td[text()='php']//preceding::input[@type='checkbox'][1]").check();
       cy.xpath("//div[@class='manage-course']//tbody").then(($rows) => {
        if ($rows.length > 0) {
            cy.wrap($rows[0]).within(() => {
              cy.xpath("(//button[@class='action-btn delete-btn'])[1]").click();
            });
        }
        else {
            cy.log('No rows available to delete');
          }
    })
       
       
       // cy.xpath("//div[@class='manage-course']//tbody/tr[1]/td/button").click()
    
    
    })

    })  