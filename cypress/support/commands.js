// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress")

Cypress.Commands.add('selectValueList', function (locator, textToSearch) {

    cy.xpath(locator)
        .each(function (ele, num1, list1) {
            cy.log(ele.text())

            if (ele.text().includes(textToSearch)) {
                cy.wrap(ele).click({ force: true })
            }

        })
})

Cypress.Commands.add('login1', function (uname, pwd) {

    cy.xpath("//input[@id='email1']").type(uname)
    cy.xpath("//input[@id='password1']").type(pwd)
    //cy.xpath("//button[text()='Sign in']").click()
    cy.get(".submit-btn").click();



});



Cypress.Commands.add('highlight', { prevSubject: true }, (subject) => {
    cy.wrap(subject).then(($el) => {
      $el.css('border', '3px solid red');
      $el.css('background-color', '#ffe6e6');
    });
  });

