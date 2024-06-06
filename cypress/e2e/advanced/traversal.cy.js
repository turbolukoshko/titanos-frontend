/// <reference types="cypress" />

context('Traversal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('.children() - get child DOM elements', () => {
    // https://on.cypress.io/children
    cy.get('.horizontal-list-container')
      .children('.horizontal-list')
      .should('exist'); // Check if the .horizontal-list exists as a child
  });

  it('.find() - find child DOM elements', () => {
    // https://on.cypress.io/find
    cy.get('.horizontal-list-container')
      .find('.horizontal-list')
      .should('exist'); // Check if the .horizontal-list exists within the container
  });

  it('.closest() - get closest ancestor DOM element', () => {
    cy.get('.horizontal-list__card')
      .closest('li')
      .should('have.class', 'horizontal-list__card'); // This checks for the correct class on the <li> element
  });

  it('.eq() - get a DOM element at a specific index', () => {
    // https://on.cypress.io/eq
    cy.get('.horizontal-list__card>div')
      .eq(1).should('have.class', 'horizontal-list__card-image-container')
  })
})
