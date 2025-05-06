/// <reference types="cypress" />

describe("Cypress Project 1", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/form-elements");
  });

  it("Test Case 01 - Validate the Contact Us information", () => {
    cy.get("h1").should("have.text", "Contact Us");
    cy.get("#address").should(
      "have.text",
      "2800 S River Rd Suite 310, Des Plaines, IL 60018"
    );
    cy.get("#email").should("have.text", "info@techglobalschool.com");
    cy.get("#phone-number").should("have.text", "(224) 580-2150");
  });

  it("Test Case 02 - Validate the Full name input box", () => {
    cy.get('[placeholder="Enter your full name"]')
      .should("be.visible")
      .and("have.attr", "required");

    cy.get('label[for="name"]').should("have.text", "Full name *");

    cy.get('[placeholder="Enter your full name"]').should(
      "have.attr",
      "placeholder",
      "Enter your full name"
    );
  });

  it("Test Case 03 - Validate the Gender radio button", () => {
    cy.get('.control > label[class="label"]').should("have.text", "Gender *");

    cy.get('input[class="mr-1"][required]').should("have.attr", "required");

    const expectedOptions = ["Male", "Female", "Prefer not to disclose"];

    cy.get(".radio").each(($ele, index) => {
      cy.wrap($ele).should("have.text", expectedOptions[index]);
    });
    cy.get(".mr-1").each((ele) => {
      cy.wrap(ele).should("be.enabled").and("be.enabled");
    });
    cy.get('input[type="radio"][required]')
      .click()
      .should("be.checked")
      .parent()
      .next()
      .find("input")
      .and("not.be.checked")
      .parent()
      .next()
      .find("input")
      .and("not.be.checked");

    cy.get('input[type="radio"').eq(1).click().should("be.checked");

    cy.get('input[type="radio"').first().should("not.be.checked");

    cy.get('input[type="radio"').eq(2).should("not.be.checked");
  });

  it("Test Case 04 - Validate the Address input box", () => {
    /*
        Navigate to https://techglobal-training.com/frontend/form-elements
        Validate that the Address input box is displayed
        Validate that the Address input box is not required
        Validate that the label of the Address input box is “Address”
        Validate that the placeholder of the Address input box is “Enter your address*”

*/
    cy.get('input[placeholder="Enter your address"')
      .should("be.visible")
      .and("not.have.attr", "required");

    cy.get(
      "#root > div > div.SubPageLayout_subpageContentWrapper__bJOzr > div > div > div.SubPageLayout_content__KWihT > div > div.has-background-white-ter.pt-6.pr-6.pl-6.pb-4 > form > div:nth-child(3) > label"
    ).should("have.text", "Address");

    cy.get('input[placeholder="Enter your address"').should(
      "have.attr",
      "placeholder",
      "Enter your address"
    );
  });
  it("Test Case 05 - Validate the Email input box", () => {
    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Email input box is displayed
    Validate that the Email input box is required
    Validate that the label of the Email input box is “Email *”
    Validate that the placeholder of the Email input box is “Enter your emai

*/

    cy.get('input[placeholder = "Enter your email"]')
        .should('be.be.visible')
        .and('have.attr','required')
    cy.get('.field > .label')
    .contains('Email *')
    .should('have.text', 'Email *')

    cy.get('input[placeholder="Enter your email"')
    .should('have.attr', 'placeholder', 'Enter your email')
  });

  it('Test Case 06 - Validate the Phone input box', () => {
    /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Phone input box is displayed
    Validate that the Phone input box is not required
    Validate that the label of the Phone input box is “Phone”
    Validate that the placeholder of the Address input box is “Enter your phone number”

*/
    cy.get('input[placeholder="Enter your phone number"]')
    .should('be.visible')
    .and('not.have.attr', 'required')

    cy.get('.field > .label').contains('Phone')
    .should('have.text', 'Phone')

    cy.get('input[placeholder="Enter your phone number"')
    .should('have.attr', 'placeholder', 'Enter your phone number')
  })

  it('Test Case 07 - Validate the Message text area', () => {
    /*Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Message text area is displayed
    Validate that the Message text area is not required
    Validate that the label of the Message text area is “Message”
    Validate that the placeholder of the Message text area is “Type your message here…”

*/
    cy.get('.textarea')
    .should('be.visible')
    .and('not.have.attr', 'required')

    cy.get('.field > .label').contains('Message')
    .should('have.text', 'Message')

    cy.get('textarea[placeholder="Type your message here..."')
    .should('have.attr','placeholder', 'Type your message here...')

    

})

it('Test Case 08 - Validate the Consent checkbox', () => {
    cy.get('.checkbox')
    .should('have.text', ' I give my consent to be contacted.')
    
    cy.get('input[type="checkbox"]')
        .should('have.attr', 'required'); 

    cy.get('input[type="checkbox"]')
        .should('be.visible')
        .and('not.be.disabled')
        .click()
        .and('be.checked')
        .click()
        .and('not.be.checked')

})

it('Test Case 09 - Validate the SUBMIT button', () => {
    cy.get('button[class="button is-link"]')
    .should('be.visible')
    .and('be.enabled')
    .and('have.text', 'SUBMIT')
})

it('Test Case 10 - Validate the form submission', () => {
    cy.get('[placeholder="Enter your full name"]')
    .type('LebronJames')

    cy.get('input[type="radio"][required]')
      .click()

    cy.get('input[placeholder="Enter your address"]')
    .type('Akron, Ohio')

    cy.get('input[placeholder = "Enter your email"]')
    .type('LebronJames@gmail.com')

    cy.get('input[placeholder="Enter your phone number"]')
    .type('7081234567')

    cy.get('textarea[placeholder="Type your message here..."]')
    .type('Hello, my name is LebronJames (that is just my first name) and i am the greatest basketball player ever')

    cy.get('.checkbox')
    .click()


    cy.get('button[class="button is-link"]')
    .click()

    cy.get('.mt-5')
    .should('have.text', 'Thanks for submitting!')
    
})

  
});
