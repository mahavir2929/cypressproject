describe('fixture demo', () => {

    beforeEach(function () {
        cy.fixture("jsondata").then(function (datatest) {
            this.datatest = datatest;

        })

    });

    it('fixture demo test', function () {
        cy.log(this.datatest.name)

    });
});