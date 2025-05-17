describe("Static Tables", {tags: '@regression'}, () => {
    beforeEach(() => {
      cy.visit('https://www.techglobal-training.com/frontend')
      cy.clickCard("Tables");
      cy.fixture('example.json').then((data) => {
        global.rows = data.staticTable
      })
    });
  
    /**
     * TEST CASE 1
     * Verify the headers of the table
     * Go to https://techglobal-training.com/frontend/
     * Click on the "Tables" card
     * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
     */
    it("Verify the headers of the table", {tags: '@table'} ,() => {
        cy.get('#static_table td').each(($ele, index) => {
            cy.wrap($ele).should('have.text', rows[index])

        })
      
    });
  });

  /*
   cy.fixture('your-fixture-file-name').then((data) => {
      const headers = data.tableHeaders
      cy.log('Table Headers:', headers)
      */

      /*
      cy.get('table thead th').each((header, index) => {
        cy.wrap(header).should('have.text', expectedHeaders[index])
      })
        */