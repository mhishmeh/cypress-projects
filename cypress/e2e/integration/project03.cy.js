/// <reference types="cypress" />

import { BookingValidation } from "../../../pages/BookingValidation";
const bookingValidation = new BookingValidation();

describe("Project 4", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/booking");
  });
  it("Test Case 01 - Validate the default Book your trip form", () => {
    bookingValidation
      .getOneWayRadioButton()
      .should("be.enabled")
      .and("be.checked");

    bookingValidation
      .getRoundTripRadioButton()
      .should("be.enabled")
      .and("not.be.checked");

    bookingValidation.getCabinClassLabel().should("be.visible");

    bookingValidation.getToLabel().should("be.visible");
    bookingValidation.getToDropDown().should("be.visible");

    bookingValidation.getDepartLabel().should("be.visible");
    bookingValidation.getDepartDropDown().should("be.visible");

    bookingValidation.getReturnLabel().should("be.visible");
    bookingValidation
      .getReturnedDateDisabled()
      .should("be.visible")
      .and("not.be.enabled");

    bookingValidation.getNumberOfPassengersLabel().should("be.visible");

    bookingValidation.getPassengerSelect().should("be.visible").contains("1");

    bookingValidation.getPassengerOneLabel().should("be.visible");
    bookingValidation
      .getPassengerOneDropDown()
      .should("be.visible")
      .contains("Adult (16-64)");

    bookingValidation.getBookButton().should("be.visible").and("be.enabled");
  });
  it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
    /*
    Navigate to https://techglobal-training.com/frontend/booking
Click on the “Round trip” radio button and validate it is selected
Validate that the “One way” radio button is not selected
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled

*/

    bookingValidation.getRoundTripRadioButton().click().should("be.checked");
    bookingValidation.getOneWayRadioButton().should("not.be.checked");
    bookingValidation.getCabinClassLabel().should("be.visible");

    bookingValidation.getToLabel().should("be.visible");
    bookingValidation.getToDropDown().should("be.visible");

    bookingValidation.getDepartLabel().should("be.visible");
    bookingValidation.getDepartDropDown().should("be.visible");

    bookingValidation.getReturnLabel().should("be.visible");
    bookingValidation
      .getReturnedDateEnabled()
      .should("be.visible")
      .and("be.enabled");

    bookingValidation.getNumberOfPassengersLabel().should("be.visible");

    bookingValidation.getPassengerSelect().should("be.visible").contains("1");

    bookingValidation.getPassengerOneLabel().should("be.visible");
    bookingValidation
      .getPassengerOneDropDown()
      .should("be.visible")
      .contains("Adult (16-64)");

    bookingValidation.getBookButton().should("be.visible").and("be.enabled");
  });

  it("Test Case 03 - Validate the booking for 1 passenger and one way", () => {
    bookingValidation.getOneWayRadioButton().click().should("be.checked");
    bookingValidation.getCabinClassDropdown().select("Business");
    bookingValidation.getFromDropdown().select("Illinois");

    bookingValidation.getToDropDown().find("select").select("Florida");

    bookingValidation.getDepartDropDown().clear().type("05/23/2025");

    bookingValidation.getPassengerSelect().select("1");
    bookingValidation
      .getPassengerOneDropDown()
      .find("select")
      .select("Senior (65+)");

    bookingValidation.getBookButton().click();
    cy.get("div.mt-4").should("contain", "Number of Passengers: 1");
    cy.get("div.mt-4").should("contain", "Passenger 1: Senior (65+)");
    cy.get("div.mt-4").should("contain", "Cabin class: Business");

    cy.get("div.mt-4 p").eq(0).should("contain", "Number of Passengers: 1");
    cy.get("div.mt-4 p").eq(1).should("contain", "Passenger 1: Senior (65+)");
    cy.get("div.mt-4 p").eq(2).should("contain", "Cabin class: Business");
  });

  it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {
    bookingValidation.getRoundTripRadioButton().click()
    bookingValidation.getCabinClassDropdown().select('First')
    bookingValidation.getFromDropdown().select('California')
    bookingValidation.getToDropDown().find('select').select('Illinois')
    bookingValidation.getDepartDropDown().clear().type("05/23/2025")
    bookingValidation.getReturnedDateEnabled().clear().type('06/23/2025')
    bookingValidation.getPassengerSelect().select("1")
    bookingValidation
      .getPassengerOneDropDown()
      .find("select")
      .select("Adult (16-64)")
    bookingValidation.getBookButton().click()
    
    bookingValidation.getFromToConfirmation().should('have.text', 'CA to IL')
    cy.get("div.mt-4 p").eq(0).should("contain", "Number of Passengers: 1");
    cy.get("div.mt-4 p").eq(1).should("contain", "Passenger 1: Adult (16-64)");
    cy.get("div.mt-4 p").eq(2).should("contain", "Cabin class: First")
  })

  it.only('Test Case 05 - Validate the booking for 2 passengers and one way', () => {
    const date = '5/21/2025'
    bookingValidation.getOneWayRadioButton().click()
    bookingValidation.getCabinClassDropdown().select('Premium Economy')
    bookingValidation.getFromDropdown().select('New York')
    bookingValidation.getToDropDown().find('select').select('Texas')
    bookingValidation.getDepartDropDown().clear().type(date)
    bookingValidation.getPassengerSelect().select('2')
    bookingValidation.getPassengerOneDropDown().find('select').select('Adult (16-64)')
    bookingValidation.getPassengerTwoDropdown().select('Child (2-11)')
    bookingValidation.getBookButton().click()

    bookingValidation.getFromToConfirmation().should('have.text', 'NY to TX')
    bookingValidation.getDepartDate().should('have.text', 'Wed May 21 2025')
    cy.get("div.mt-4 p").eq(0).should("contain", "Number of Passengers: 2");
    cy.get("div.mt-4 p").eq(1).should("contain", "Passenger 1: Adult (16-64)");
    cy.get("div.mt-4 p").eq(2).should("contain", "Passenger 2: Child (2-11");
    cy.get("div.mt-4 p").eq(3).should("contain", "Cabin class: Premium Economy")
  })

});
