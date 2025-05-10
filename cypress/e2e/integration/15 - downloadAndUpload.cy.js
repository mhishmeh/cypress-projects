/// <reference types="cypress"/>
import fs from "fs";

describe("File Download & File Upload", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend");
    cy.clickCard("File Download & Upload");
  });

  it("File Download", () => {
    cy.get("#file_download").click();

    cy.readFile("cypress/downloads/SampleText.txt");

    // ways to read file
    // fs.readSync()
    // fs.unlink('cypress/downloads/SampleText.txt')
    // cy.fixture()
  });

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "File Upload" card
   * Send the path of the file as keys to the "Choose File" input box
   * Click on the "UPLOAD" button
   * Validate the result message equals "You Uploaded 'SampleText.txt'"
   */
  it("File Upload", () => {
    // .selectFile('pathOfFile')
    cy.get('#file_upload').selectFile('cypress/downloads/SampleText.txt')

    cy.get('#file_submit').realClick()

    cy.get('.notification').should("have.text", 'You Uploaded SampleText.txt')
 
  });
});