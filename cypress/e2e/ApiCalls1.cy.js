describe('Check for broken links', () => {
  it('should not have broken links', () => {
    const brokenLinks = [];

    cy.visit("https://ineuron-courses.vercel.app/login")
    cy.get("a").each((link) => {

      cy.request({
        url: link.prop("href"), //get the link and capture the href
        failOnStatusCode: false

      }).then(function (resp) {
        cy.log(resp.status)
        if (resp.status >= 400) {

          brokenLinks.push({ url: link.prop("href"), status: resp.status });
        }

      })




    })



  

cy.then(() => {
  if (brokenLinks.length > 0) {
    cy.log('Broken links:', JSON.stringify(brokenLinks, null, 2));
  }
  expect(brokenLinks, 'No broken links found').to.be.empty;
});
})
})