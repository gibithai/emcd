describe('Functional and Non-functional Tests', () => {

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

  it('Should calculate factorial for a positive integer (10)', () => {
    cy.get('#number').type('10');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', '3628800');
  });

  it('Should calculate factorial for large positive integer (30)', () => {
    cy.get('#number').type('30');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', '265252859812191058636308480000000');
  });

  it('Should calculate factorial for large number (100)', () => {
    cy.get('#number').type('100');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', '9.33262154439441e+157');
  });

  it('Should calculate factorial for boundary value (169)', () => {
    cy.get('#number').type('169');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', '4.269068009004705e+306');
  });

  it('Should calculate factorial for boundary value (170)', () => {
    cy.get('#number').type('170');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', '7.257415615307994e+306');
  });

  it('Should return Infinity for input greater than boundary value (171)', () => {
    cy.get('#number').type('171');
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', 'Infinity');
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
    cy.get('#number').clear();
    cy.get('#getFactorial').click();
    cy.get('#resultDiv').should('contain', 'Please enter an integer');
  });
  
});
