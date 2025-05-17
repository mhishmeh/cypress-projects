describe('Automation Exercises', () => {
    it('Test Case 1: Register User', () => {
        cy.visit('http://automationexercise.com')
        cy.get('#slider').should('be.visible')

        cy.get('a[href="/login"]').click()
        cy.get('.signup-form > h2').should('be.visible')

        cy.get('input[data-qa="signup-name"]').type('George@gmail.com')
    })
})