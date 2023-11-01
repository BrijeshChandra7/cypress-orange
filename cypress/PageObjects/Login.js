class Login {
  txtUserName = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  txtPassword = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  btnLogin = ".oxd-button";
  errorMssg = ".oxd-alert-content > .oxd-text";
  homeHeader = ".oxd-topbar-header-title";
  NullHeader = ":nth-child(2) > .oxd-input-group > .oxd-text";
  LoginPageTitle = ".oxd-text--h5";

  setUserName(UserName) {
    cy.assertElementVisibility(this.txtUserName);
    cy.enterText(this.txtUserName, UserName);
  }

  setPassword(Password) {
    cy.assertElementVisibility(this.txtPassword);
    cy.enterText(this.txtPassword, Password);
  }

  clickLogin() {
    cy.assertElementVisibility(this.btnLogin);
    cy.clickElement(this.btnLogin);
  }

  verifyLoginPageTitle(message) {
    cy.get(this.LoginPageTitle).contains(message);
  }

  verifyErrorMssgIncorrectCred(message) {
    cy.get(this.errorMssg).contains(message);
  }

  verifyDashboardHeader(message) {
    cy.get(this.homeHeader).contains(message);
  }

  verifyErrorMssgNullVal(message) {
    cy.get(this.NullHeader).should("have.text", message);
  }
}
export default new Login();
