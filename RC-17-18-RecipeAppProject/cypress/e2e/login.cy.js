describe('login page', () => {
    it('login test', () => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-test="loginHeader"]').should('be.visible').contains('Recipe')
      cy.get('[data-test="loginName"]').should('be.visible').type('abdulkadir')
      cy.get('[data-test="loginPassword"]').should('be.visible').type('1234')
      cy.get('[data-test="loginSbmt"]').should('be.visible').click()
      cy.url().should('include', 'home')
  
    })
  
  
  })