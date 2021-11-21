/* eslint-disable @typescript-eslint/quotes */
describe('Registration', () => {
beforeEach(() => {
  cy.visit('/');
  cy.contains('CogSkills');
  cy.get('ion-button').contains('Regisztráció').click();
  cy.wait(3000);
});

  it('Registration success', () => {
    cy.get("[type='submit']").should('be.disabled');
    cy.get("[type='email']").type('ujfelhasznalo@uj.com');
    cy.get("[formcontrolname='password1']").type('ujfelhasznalo');
    cy.get("[formcontrolname='password2']").type('ujfelhasznalo');
    cy.get('span').contains('Regisztráció').click();
    cy.wait(3000);
    cy.url().should('include', '/login');
    cy.contains('Bejelentkezés');
    cy.get('#email').type('ujfelhasznalo@uj.com');
    cy.get('#pwd').type('ujfelhasznalo');
    cy.get('span').contains('Bejelentkezés').click();
    cy.wait(3000);
    cy.url().should('include', 'home/splash');
    cy.contains('CogSkills');
  });


  it('Registration User Already In Use', () => {
    cy.get("[type='submit']").should('be.disabled');
    cy.get("[type='email']").type('ujfelhasznalo@uj.com');
    cy.get("[formcontrolname='password1']").type('ujfelhasznalo');
    cy.get("[formcontrolname='password2']").type('ujfelhasznalo');
    cy.get('span').contains('Regisztráció').click();
    cy.contains('Az e-mail cím már használatban van.');
  });


  it('Registration Invalid Email', () => {
    cy.get("[type='submit']").should('be.disabled');
    cy.get("[type='email']").type('ujfelhasznalo@uj.com');
    cy.get("[formcontrolname='password1']").type('ujfelhasznalo');
    cy.get("[formcontrolname='password2']").type('ujfelhasznalo');
    cy.get('span').contains('Regisztráció').click();
  });

  it('Registration Password Not Match', () => {
    cy.get("[type='submit']").should('be.disabled');
    cy.get("[type='email']").type('ujfelhasznalo@ujabb.com');
    cy.get("[formcontrolname='password1']").type('ujfelhaszn');
    cy.get("[formcontrolname='password2']").type('ujfelhasznalo');
    cy.get('span').contains('Regisztráció').click();
    cy.contains('A jelszó nem egyezik!');
  });

  it('Back to Welocome', () => {
    cy.get('span').contains('Kezdőoldal').click();
    cy.url().should('include', '/welcome');
    cy.contains('CogSkills');
  });

  it('Go to Login', () => {
    cy.get('a').contains('Már van profilod? Lépj be itt!').click();
    cy.url().should('include', '/login');
    cy.contains('Bejelentkezés');
  });
});
