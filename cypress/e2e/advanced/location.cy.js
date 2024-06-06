/// <reference types="cypress" />

context('Location', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('cy.hash() - get the current URL hash', () => {
    cy.hash().should('be.empty')
  })

  it('cy.location() - get window.location', () => {
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:5173/')
      expect(location.host).to.eq('localhost:5173')
      expect(location.hostname).to.eq('localhost')
      expect(location.origin).to.eq('http://localhost:5173')
      expect(location.pathname).to.eq('/')
      expect(location.port).to.eq('5173')
      expect(location.protocol).to.eq('http:')
      expect(location.search).to.be.empty
    })
  })

  it('cy.url() - get the current URL', () => {
    cy.url().should('eq', 'http://localhost:5173/')
  })
})
