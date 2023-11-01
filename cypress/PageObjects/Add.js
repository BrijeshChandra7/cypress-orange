class Add {
  btnAdd =
    "div.orangehrm-header-container button.oxd-button.oxd-button--medium.oxd-button--secondary";
  PageTitle = "h6.oxd-text.oxd-text--h6.orangehrm-main-title";
  txtFirstName = 'input[placeholder="First Name"]';
  txtMiddleName = 'input[placeholder="Middle Name"]';
  txtLastName = 'input[placeholder="Last Name"]';
  dropVacancy = "div.oxd-select-text-input";
  txtEmailContact =
    'div.oxd-input-group.oxd-input-field-bottom-space div input[placeholder="Type here"]';
  ResumeUpload = 'input[type="file"]';
  txtKeywords = 'input[placeholder="Enter comma seperated words..."]';
  dateDOA = 'input[placeholder="yyyy-mm-dd"]';
  txtNotes = "textarea.oxd-textarea--resize-vertical";
  checkConsent = "i.oxd-icon.bi-check.oxd-checkbox-input-icon";
  btnSubmit = 'button[type="submit"]';
  verifyNameAdded = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-text';

  clickonAdd() {
    cy.clickElement(this.btnAdd);
  }
  verifyPageTitle(title) {
    cy.assertElementText(this.PageTitle, title);
  }
  enterFirstName(fname) {
    cy.enterText(this.txtFirstName, fname);
  }
  enterMiddleName(mname) {
    cy.enterText(this.txtMiddleName, mname);
  }
  enterLastName(lname) {
    cy.enterText(this.txtLastName, lname);
  }
  selVacancy(vacancy) {
    cy.clickElement(this.dropVacancy);
    cy.contains(vacancy).click();
  }
  enterEmail(email) {
    cy.get(this.txtEmailContact).eq(0).type(email);
  }
  verifyEmail(email) {
    cy.get(this.txtEmailContact).eq(0).contains(email);
  }
  enterContactNum(num) {
    cy.get(this.txtEmailContact).eq(1).type(num);
  }
  resumeUpload(file) {
    //cy.get(this.ResumeUpload).as('FileInput');
    //cy.get('@FileInput').attachFile('MyData.pdf',{force:true});
    cy.get('input[type="file"]').attachFile({
      filePath: "OrangeData.json",
      force: true,
    });
  }
  verifyUploadedResume(resume) {
    cy.get("div.oxd-file-input-div").contains(resume);
  }
  enterKeywords(keyword) {
    cy.enterText(this.txtKeywords, keyword);
  }
  enterDOA(date) {
    cy.enterText(this.dateDOA, date);
  }
  enterNotes(text) {
    cy.enterText(this.txtNotes, text);
  }
  checkConsentData() {
    cy.get(this.checkConsent).click();
  }
  clickOnSubmit() {
    cy.clickElement(this.btnSubmit);
  }
  verifyCandidateAdded(name){
    cy.assertElementText(this.verifyNameAdded,name);
  }
}
export default new Add();
