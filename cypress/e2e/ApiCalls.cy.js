describe('Check for broken links', () => {
    it('should not have broken links', () => {
      const brokenLinks = [];
  
      cy.visit('https://ineuron-courses.vercel.app/login');
  
      cy.get('a[href]').each(($el) => {
        const href = $el.prop('href');
  
        if (href && href.startsWith('https')) {
          cy.request({
            url: href,
            failOnStatusCode: false
          }).then((response) => {
            if (response.status >= 400) {
              brokenLinks.push({ url: href, status: response.status });
            }
          });
        }
      });
  
      // Wait until all requests are done, then assert
      cy.then(() => {
        if (brokenLinks.length > 0) {
          cy.log('Broken links:', JSON.stringify(brokenLinks, null, 2));
        }
        expect(brokenLinks, 'No broken links found').to.be.empty;
      });
    });
  });