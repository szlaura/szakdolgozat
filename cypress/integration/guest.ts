/* eslint-disable @typescript-eslint/quotes */
describe('Registration', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('CogSkills');
    cy.get('ion-button').contains('Vendég').click();
    cy.wait(3000);
  });
    it('Guest success', () => {
      cy.url().should('include', 'home/splash');
      cy.contains('CogSkills');
      cy.get('ion-menu-button').click();
      cy.get('ion-item').contains('Profil').should('not.exist');
    });
  });
