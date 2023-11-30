/// <reference types="cypress" />
describe('Amazon',()=>{
    it('add cart',()=>{
        cy.visit('https://www.amazon.in/');
        cy.get('input#twotabsearchtextbox').type('iphone 15');
        cy.get('input#nav-search-submit-button').click();
        cy.get("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_3'] span[class='a-size-medium a-color-base a-text-normal']").parent().invoke('removeAttr','target').click();
        cy.get("input#add-to-cart-button").click();
    })
})