describe('Load, Stress, Stability Tests', () => {

  beforeEach(() => {
    cy.visit('https://qa-test.emcd.io/');
  });
  
  it('Should check the response time of the application', () => {
    cy.intercept('GET', '/factorial').as('factorialRequest');
    cy.get('#number').type('100');
    cy.get('#getFactorial').click();
    cy.wait('@factorialRequest').its('response.duration').should('be.lessThan', 1000); // Проверяем, что запрос выполнился менее чем за 1 сек
  });


  it('Should handle peak load (1000 requests)', () => {
    for (let i = 0; i < 1000; i++) {
      cy.get('#number').type('10');
      cy.get('#getFactorial').click();
      cy.get('#resultDiv').should('contain', '3628800');
      cy.get('#number').clear();
    }
  });

  
  it('Should work under slow internet connection', () => {
    cy.intercept('GET', '/factorial', { delay: 3000 }).as('slowRequest'); // Симулируем медленное соединение
    cy.get('#number').type('5');
    cy.get('#getFactorial').click();
    cy.wait('@slowRequest').its('response.statusCode').should('eq', 200); // Проверяем успешный ответ
  });
  

  it('Should handle multiple consecutive requests without failing', () => {
    for (let i = 0; i < 100; i++) { // Можем изменить любое значение
      cy.get('#number').type('5');
      cy.get('#getFactorial').click();
      cy.get('#resultDiv').should('contain', '120');
      cy.get('#number').clear(); 
    }
  });
  it('Should handle long-term operations without crashing', () => {
    const duration = 600; // Можем изменить любое значение
    const endTime = Date.now() + duration;
    cy.get('#number').type('10');
    cy.get('#getFactorial').click();
    
    while (Date.now() < endTime) {
      cy.get('#number').clear().type('10');
      cy.get('#getFactorial').click();
      cy.get('#resultDiv').should('contain', '3628800');
    }
  });
})
