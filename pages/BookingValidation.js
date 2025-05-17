import BasePage from "./BasePage";

export class BookingValidation extends BasePage {
  /* LOCATERS */
  getOneWayRadioButton() {
    return cy.get('[class$="ml-0"] .mr-1');
  }

  getRoundTripRadioButton() {
    return cy.get('label[class$="radio"] .mr-1');
  }

  getCabinClassLabel() {
    return cy.contains("label", "Cabin Class");
  }

  getCabinClassDropdown() {
    return cy
      .contains("label", "Cabin Class")
      .nextAll("div.select")
      .first()
      .find("select");
  }

  getFromLabel() {
    return cy.contains("label", "From");
  }

  getFromDropdown() {
    return cy
      .contains("label", "From")
      .nextAll("div.select")
      .first()
      .find("select");
  }
  getToLabel() {
    return cy.get(".field:nth-of-type(4) > label");
  }
  getToDropDown() {
   return  cy.get(".select").eq(2);
  }
  //break

  getDepartLabel() {
    return cy.get(".field:nth-of-type(5) > label");
  }
  getDepartDropDown() {
    return cy.get('input[type="text"][placeholder*="MM"]').first();
  }

  getReturnLabel() {
    return cy.get('label[class="label"]').eq(5);
  }

  getReturnedDateDisabled() {
    return cy.get("input[disabled]");
  }
  getReturnedDateEnabled() {
    return cy.get('input[placeholder="MM/DD/YY"]').eq(1);
  }
  getNumberOfPassengersLabel() {
    return cy.get(".field").eq(6).first();
  }

  getPassengerSelect() {
    return cy.get("select[style]").eq(3);
  }

  getPassengerOneLabel() {
    return cy.get("label[class='label']").eq(7);
  }

  getPassengerOneDropDown() {
    return cy.get(".select").eq(4);
  }

  getPassengerTwoDropdown(){
    return cy.contains('label', 'Passenger 2')
            .nextAll('div.select')
            .first()
            .find('select')
   }

  getBookButton() {
    return cy.get(".Button_c_button__TmkRS ");
  }
  
  //after BOOKING LOCATORS

  getDepartConfirmation() {
    return cy.get('.is-underlined').first()
  }
  getReturnedConfirmation() {
    return cy.get('.is-underlined').eq(1)
  }

  getFromToConfirmation() {
    return cy.get('.is-italic').first()
  }

  getToFromConfirmation() {
    return cy.get('.is-italic').eq(1)
  }
  getDepartDate() {
    return this.getFromToConfirmation().next()
  }
  getReturnDate() {
    return this.getToFromConfirmation().next()
  }
  getNumberOfPassengers() {
    return cy.get('.mt-4 p').first()
  }
  
  getPassengerInfo() {
    return cy.get('.mt-4 p').eq(1)
  }

  getCabinClassInfo() {
    return cy.ge('.mt-4 p').eq(2)
  }

}
