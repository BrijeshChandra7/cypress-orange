/// <reference types="cypress" />
import Login from "../PageObjects/Login";
import Recruitment from "../PageObjects/Recruitment";
import Add from "../PageObjects/Add";

describe("Recruitment", () => {
  beforeEach("Login", () => {
    cy.fixture("OrangeData.json").as("OrangeData");
    cy.get("@OrangeData").then((data) => {
      cy.login(data.UserName, data.Password);
    });
    cy.visit(Cypress.env("baseUrl"));
    Login.verifyDashboardHeader("Dashboard");
  });

  it("Recruitment", () => {
    Recruitment.clickOnRecruitment();
    Recruitment.verifyRecruitTitle("Recruitment");
    Recruitment.selJobTitle("Customer Success Manager");
    Recruitment.verifySelectedJobTitle("Customer Success Manager");
    Recruitment.selVaccancy("Senior QA Lead");
    Recruitment.verifySelectedVaccancy("Senior QA Lead");
    Recruitment.selHiringManager("Linda Anderson");
    Recruitment.verifySelectedHiringManager("Linda Anderson");
    Recruitment.selStatus("Shortlisted");
    Recruitment.verifySelectedStatus("Shortlisted");
    //Recruitment.enterCandName('Chris');
    Recruitment.enterDOAFrom("2023-11-08");
    Recruitment.enterDOATo("2023-11-09");
    Recruitment.selMethodOfApp("Online");
    Recruitment.verifySelectedMethodOfApp("Online");
    Recruitment.clickOnSearch();
    Recruitment.verifyNoRecord("No Records Found");
  });

  it.only("Add", () => {
    Recruitment.clickOnRecruitment();
    Recruitment.verifyRecruitTitle("Recruitment");
    Add.clickonAdd();
    Add.verifyPageTitle("Add Candidate");
    // Add.selVacancy('Senior QA Lead');
    Add.enterEmail("xyz@yahoo.com");
    Add.resumeUpload('MyData.pdf');
    Add.verifyUploadedResume('MyData.pdf');
    Add.enterFirstName("Brijesh");
    Add.enterLastName("Chandra");
    Add.enterMiddleName("-");
    Add.enterContactNum("99999999");
    Add.enterNotes("Notes Added");
    Add.enterKeywords("Hi World");
    Add.enterDOA("2023-11-01");
    Add.checkConsentData();
    Add.clickOnSubmit();
    cy.wait(10000);
    Add.verifyCandidateAdded('Brijesh - Chandra');
  });
});
