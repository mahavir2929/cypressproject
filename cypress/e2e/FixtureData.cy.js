describe('Using multiple fixtures', () => {
    beforeEach(() => {
      cy.fixture('user2').as('userData');
      cy.fixture('user2').as('productData');
    //  cy.fixture('settings').as('settingsData');
    });
  
    it('uses all the fixtures', function () {
      // Access the fixtures via `this`
      //cy.log(this.userData.username); // testuser
      //cy.log(this.productData[0].name); // Apple
     // cy.log(this.settingsData.theme); // Depends on your file
     cy.visit("https://ineuron-courses.vercel.app/login")
     cy.login1(this.userData.username,this.userData.password)
    });
  });

