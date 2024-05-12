describe('home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.viewport(1200, 1200);
    })
    it('home test', () => {
        cy.login()
        cy.get("[data-test='homeAbout']").contains("About").should("be.visible").click({ force: true });
        cy.url().should("include", "/about");
        cy.get("[data-test='homeLogo']").contains("AKT").should("be.visible").click({ force: true });
        cy.url().should("include", "/home");
        cy.get("[data-test='recipeHeader']").contains("Healthy").should("be.visible")
        cy.get("[data-test='menuOpenButton']").click();
        cy.get("[data-test='selectType']").contains("lunch").should("be.visible").click({force: true})
        cy.get("[data-test='homeSearch']").type("r")
        cy.get("[data-test='homeSearchBtn']").click({ force: true });
        cy.get("[data-test='cardHeader']").should("be.visible")
        cy.get("[data-test='cardImage']").should("be.visible")
        cy.get("[data-test='cardBtn']").should("be.visible").first().click({ force: true });
        cy.url().should("include", "/details");
    })

})