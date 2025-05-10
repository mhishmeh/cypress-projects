/// <reference types="cypress" />

describe('Project 02 - Login Function', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/login')
    })
    it('Test Case 01 - Validate the login form', () => {

        cy.get('#username')
         .should('be.visible')
         .and('be.enabled')
         .and('not.have.attr', 'required')

        cy.get('label[for="username"]').should('have.text', 'Please enter your username')

        cy.get('#password')
         .should('be.visible')
         .and('be.enabled')
         .and('not.have.attr', 'required')

        cy.get('label[for="password"')
         .should('have.text', 'Please enter your password')

        cy.get('#login_btn')
         .should('be.visible')
         .and('not.be.disabled')
         .and('have.text','LOGIN')

        cy.get('a[href="/frontend/login"')
        .should('be.visible')
        .and('have.text','Forgot Password?')
        .click()


    })

    it('Test Case 02 - Validate the valid login', () => {

    
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#success_lgn').should('have.text', 'You are logged in')
        cy.get('#logout').should('have.text', 'LOGOUT')

    })
    it('Test Case 03 - Validate the logout', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#logout').realClick()
        cy.get('.pt-6').should('be.visible')
    })

    it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {
        cy.get('#login_btn').next().realClick()
        cy.get('#modal_title').should('be.visible')
        .next().should('be.visible')

        cy.get('#email').should('be.visible')
        cy.get('label[for="email"]').should('have.text', 'Enter your email address and we\'ll send you a link to reset your password. ' )

        cy.get('#submit').should('have.text', 'SUBMIT')
         .and('be.visible').and('be.enabled')
    })

    it('Test Case 05 - Validate the Reset Password modal close button', () => {
        /**
            Navigate to https://techglobal-training.com/frontend/login
            Click on the “Forgot Password?” link
            Validate that the “Reset Password” modal is displayed
            Click on the close button
            Validate that the “Reset Password” modal is closed
         */
            cy.get('#login_btn').next().realClick()
            cy.get('#modal_title').should('be.visible')
            cy.get('button[aria-label="close"]').realClick()
            cy.get('#modal_title').should('not.exist')
    })

    it('Test Case 06 - Validate the Reset Password form submission', () => {
       
            cy.get('#login_btn').next().realClick()
            cy.get('#email').type('moehish@gmail.com')
            cy.get('#submit').realClick()

            cy.get('#confirmation_message').should('have.text', 'A link to reset your password has been sent to your email address.')
    })

    it('Test Case 07 - Validate the invalid login with the empty credentials', () => {
        cy.get('#username').should('be.empty')
        cy.get('#password').should('be.empty')
        cy.get('#login_btn').realClick()
        cy.get('#error_message').should('have.text', 'Invalid Username entered!')

    })

    it('Test Case 08 - Validate the invalid login with the wrong username', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').realClick()
        cy.get('#error_message').should('have.text', 'Invalid Username entered!')
    })

    it('Test Case 09 - Validate the invalid login with the wrong password', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('1234')
        cy.get('#login_btn').realClick()
        cy.get('#error_message').should('have.text', 'Invalid Password entered!')
    })

    it('Test Case 10 - Validate the invalid login with the wrong username and password', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('1234')
        cy.get('#login_btn').realClick()
        cy.get('#error_message').should('have.text', 'Invalid Username entered!')
    })

    
})

