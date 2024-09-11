describe('Functional Tests', () => {
  
  beforeEach(() => {
    cy.visit('https://qa-test.emcd.io/');
  });

  it('Should calculate factorial for minimum value (0)', () => {
    cy.get('#number').type('0');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', '1');
  });

  it('Should calculate factorial for a positive integer (1)', () => {
    cy.get('#number').type('1');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', '1');
  }); 

  it('Should calculate factorial for a positive integer (5)', () => {
    cy.get('#number').type('5');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', '120');
  });

  it('Should handle negative number input', () => {
    cy.get('#number').type('-1');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', 'Please enter an integer');
  });

  it('Should handle decimal number input', () => {
    cy.get('#number').type('2.5');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', 'Please enter an integer');
  });

  it('Should handle special characters input', () => {
    cy.get('#number').type('@');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', 'Please enter an integer');
  });

  it('Should handle text input', () => {
    cy.get('#number').type('hello');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', 'Please enter an integer');
  });

  it('Should handle empty input', () => {
    cy.get('#number').type(' ');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', 'Please enter an integer');
  });

 
  });
