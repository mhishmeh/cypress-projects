/// <reference types="cypress"/>

describe("Keyboard & Mouse Actions", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.clickCard("Actions");
    });
  
    
    
    it('Right Click and Double Click', () => {
      // cy.url().should('contain', 'actions')
  
      cy.url().then((url) => {
        const actions = url.slice(url.lastIndexOf('/') +1)
        cy.wrap(actions).should('eq', 'actions')
      })
  
      cy.get('[id$="click"]').as('buttons')
  
      cy.get('@buttons').first().should('have.text', 'Click on me').click()
      .next().should('have.text', 'You clicked on a button!')
  
      cy.get('@buttons').eq(1).should('have.text', 'Right-Click on me').rightclick()
      .next().should('have.text', 'You right-clicked on a button!')
  
      cy.get('@buttons').last().should('have.text', 'Double-Click on me').dblclick()
      .next().should('have.text', 'You double-clicked on a button!')
    })

    it('Drag and Drop', () => {
        
    })
  });