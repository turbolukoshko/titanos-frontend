/// <reference types="cypress" />

context('Connectors', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('.each() - iterate over an array of elements', () => {
    // https://on.cypress.io/each
    cy.get('.horizontal-list-container>ul')
      .each(($el, index, $list) => {
      })
  })

  it('.its() - get properties on the current subject', () => {
    // https://on.cypress.io/its
    cy.get('.horizontal-list-container>ul>li')
      // calls the 'length' property yielding that value
      .its('length')
      .should('be.above', 1)
  })
})
