context('Querying', function () {
  beforeEach(function () {
    cy.visit(Cypress.env('host') || 'http://localhost:4200')
  })
  it('should contain title', function () {
    cy.get('h1').should('contain', 'Quickstart Library');
  })
  it('should contain meaning', function () {
    cy.get('h3').should('contain', '42');
  })
});
