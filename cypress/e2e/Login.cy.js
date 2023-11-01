/// <reference types="cypress" />
import Login from "../PageObjects/Login";

describe("Login", () => {
  beforeEach(() => {
    cy.fixture("OrangeData.json").as("OrangeData");
    cy.get("@OrangeData").then((data) => {
      cy.log(data.baseUrl);
      cy.visit(Cypress.env("baseUrl"));
      Login.verifyLoginPageTitle("Login");
    });
  });

  it("Incorrect Username", () => {
    cy.get("@OrangeData").then((data) => {
      Login.setUserName(data.IncUserName);
      Login.setPassword(data.Password);
      Login.clickLogin();
      Login.verifyErrorMssgIncorrectCred("Invalid credentials");
    });
  });

  it("Incorrect Password", () => {
    cy.get("@OrangeData").then((data) => {
      Login.setUserName(data.UserName);
      Login.setPassword(data.IncPassword);
      Login.clickLogin();
      Login.verifyErrorMssgIncorrectCred("Invalid credentials");
    });
  });

  it("Incorrect Username Incorrect Password", () => {
    cy.get("@OrangeData").then((data) => {
      Login.setUserName(data.IncUserName);
      Login.setPassword(data.IncPassword);
      Login.clickLogin();
      Login.verifyErrorMssgIncorrectCred("Invalid credentials");
    });
  });

  it("Correct Username Correct Password", () => {
    cy.get("@OrangeData").then((data) => {
      Login.setUserName(data.UserName);
      Login.setPassword(data.Password);
      Login.clickLogin();
      Login.verifyDashboardHeader("Dashboard");
    });
  });

  it("Null value and incorrect format ", () => {
    cy.get("@OrangeData").then((data) => {
      Login.setUserName(" ");
      Login.setPassword(" ");
      Login.clickLogin();
      Login.verifyErrorMssgNullVal("Required");
    });
  });
});
