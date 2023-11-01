class Recruitment {
  recruitMenu = ":nth-child(5) > .oxd-main-menu-item > .oxd-text";
  recruitPageTitle = ".oxd-topbar-header-breadcrumb > .oxd-text";
  dropJobTitle =
    ":nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input";
  dropVaccancy =
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input";
  dropHiringManager = "div.oxd-select-text-input";
  dropStatus =
    ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input";
  txtCandName = 'input[placeholder="Type for hints..."]';
  txtKeywords = 'input[placeholder="Enter comma seperated words..."]';
  dateFrom = 'input[placeholder="From"]';
  dateTo = 'input[placeholder="To"]';
  dropMethodOfApp =
    ":nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input";
  btnSearch = 'button[type="submit"]';
  noRecordFound = "div.orangehrm-vertical-padding span.oxd-text--span";

  clickOnRecruitment() {
    cy.assertElementVisibility(this.recruitMenu);
    cy.clickElement(this.recruitMenu);
  }
  verifyRecruitTitle(text) {
    cy.assertElementText(this.recruitPageTitle, text);
  }
  selJobTitle(title) {
    // cy.get(this.dropJobTitle).eq(0).click();
    cy.get(this.dropJobTitle).click();
    cy.contains(title).click();
  }
  verifySelectedJobTitle(title) {
    cy.get(this.dropJobTitle).contains(title);
  }
  selVaccancy(vaccancy) {
    cy.get(this.dropVaccancy).click();
    cy.contains(vaccancy).click();
  }
  verifySelectedVaccancy(title) {
    cy.get(this.dropVaccancy).contains(title);
  }
  selHiringManager(manager) {
    cy.scrollTo(0, -500);
    cy.wait(1000);
    cy.get(this.dropHiringManager).eq(2).click();
    cy.wait(1000);
    cy.contains(manager).click();
  }
  verifySelectedHiringManager(title) {
    //cy.get(this.dropHiringManager).contains(title);
  }
  selStatus(status) {
    cy.scrollTo(0, -500);
    cy.wait(1000);
    cy.get(this.dropStatus).click();
    cy.contains(status).click();
  }
  verifySelectedStatus(status) {
    cy.get(this.dropStatus).contains(status);
  }
  enterCandName(name) {
    cy.scrollTo(0, -500);
    cy.enterText(this.txtCandName, name);
    cy.scrollTo(0, -500);
    cy.contains("Chris  Harris").click();
  }
  enterDOAFrom(date) {
    cy.clickElement(this.dateFrom).type(date);
  }
  enterDOATo(date) {
    cy.clickElement(this.dateTo).type(date);
  }
  selMethodOfApp(method) {
    cy.get(this.dropMethodOfApp).click();
    cy.contains(method).click();
  }
  verifySelectedMethodOfApp(method) {
    cy.get(this.dropMethodOfApp).contains(method);
  }
  clickOnSearch() {
    cy.scrollTo(0, -500);
    cy.clickElement(this.btnSearch);
  }
  verifyNoRecord(text) {
    cy.get(this.noRecordFound).contains(text);
  }
}
export default new Recruitment();
