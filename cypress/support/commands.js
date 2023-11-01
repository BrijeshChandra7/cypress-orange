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
import './commands';
import '@4tw/cypress-drag-drop';
import 'cypress-iframe';
import 'cypress-file-upload';

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
      const baseUrl = Cypress.env("baseUrl");
      cy.visit(baseUrl);
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").clear().type(username);
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").clear().type(password);
      cy.get(".oxd-button").click();
    })
  })

  Cypress.Commands.add('enterText',(selector, text) => {
    cy.get(selector).clear().type(text);
  })

  
  Cypress.Commands.add('clickElement',(selector) => {
    cy.get(selector).click();
  })

  Cypress.Commands.add('assertElementVisibility',(selector) => {
    cy.get(selector).should('be.visible');
  })

  Cypress.Commands.add('assertElementText',(selector,text) => {
    cy.get(selector).should('contain',text);
  })

  Cypress.Commands.add('selectDrop',(selector,text) => {
    cy.get(selector).select(text);
  })

  Cypress.Commands.add('logout',()=>{
    cy.get('a.nav-link').contains('Logout').click();
  })