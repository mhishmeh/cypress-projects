/// <reference types="cypress"/>
import LoginPage from "../../../pages/LoginPage";
describe("Login Page Test", () => {
    beforeEach(() => {
      cy.visit(`https://techglobal-training.com/frontend`);
      cy.clickCard("Login Function");
      cy.fixture('example.json').then((data) => {
        this.username = data.username
        this.password = data.password
      })
      
    });
    const loginPage = new LoginPage()
  
    it("Login without POM", () => {
      cy.get("#username").type('TechGlobal');
  
      // cy.pause()
  
      cy.get("#password").type('Test1234');
  
      cy.get("#login_btn").click();
  
      cy.get("#success_lgn").should("be.visible");
    });

    it('Login with POM', () => {
        loginPage.clickLoginButton()
    })

      /**
   * 1. Navigate to Login Project Page
   * 2. Enter the wrong username and the password
   * 3. Validate error message is "Invalid Username entered!"
   */
  it('Login with Pom - Negative', () => {
    loginPage.userLogin('Lebron', 'James')
    cy.get('#error_message').should('be.visible')
  })

})