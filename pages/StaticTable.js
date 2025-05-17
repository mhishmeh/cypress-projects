import BasePage from "./BasePage"

export class StaticPage extends BasePage {
    /* Locators */

    getTableHeaders() {
        return cy.get('#static_table thead th')
    }

}