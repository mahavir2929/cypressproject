describe('use multiple fixtured', () => {

  beforeEach(() => {
    cy.fixture('user1').as('userData11');
    cy.fixture('products1').as('product11')

  })
  it('use fixture files', function() {
    cy.log(this.userData11.username);
    cy.log(this.product11[0].name)

  });
})




