/* eslint-disable @typescript-eslint/quotes */
describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('CogSkills');
    cy.get('ion-button').contains('Bejelentkezés').click();
    cy.wait(3000);
  });

  it('Login Success', () => {
    cy.get("[type='email']").type('xcv@gmail.com');
    cy.get("[type='password']").type('xcvxcv');
    cy.get('span').contains('Bejelentkezés').click();
    cy.wait(3000);
    cy.url().should('include', 'home/splash');
    cy.contains('CogSkills');
    cy.contains('Iowa Gambling');
    cy.contains('Wisconsin Card Sorting');
    cy.contains('Mental Rotation');
    cy.contains('Balloon Analog Risk');
    cy.get('ion-menu-button').click();
    cy.get('ion-item').contains('Profil');
    cy.get('ion-item').contains('Kijelentkezés').click();
    cy.url().should('include', '/welcome');
    cy.contains('CogSkills');
  });

  it('Login Fail', () => {
    cy.get("[type='email']").type('xcv@gmail.com');
    cy.get("[type='password']").type('xcvxcvv');
    cy.get('span').contains('Bejelentkezés').click();
    cy.contains('Bejelentkezés');
    cy.contains('Hibás e-mail cím vagy jelszó.');
  });

  it('Back to Welocome', () => {
    cy.get('span').contains('Kezdőoldal').click();
    cy.url().should('include', '/welcome');
    cy.contains('CogSkills');
  });

  it('Go to Registration', () => {
    cy.get('a').contains('Még nincs profilod? Kattints!').click();
    cy.url().should('include', '/registration');
    cy.contains('Regisztráció');
  });
});
