/* eslint-disable @typescript-eslint/quotes */
describe('Profile', () => {
  it('Profile Data Added', () => {
    cy.visit('/');
    cy.contains('CogSkills');
    cy.get('ion-button').contains('Bejelentkezés').click();
    cy.wait(3000);
    cy.get("[type='email']").type('qwe@gmail.com');
    cy.get("[type='password']").type('qweqwe');
    cy.get('span').contains('Bejelentkezés').click();
    cy.wait(3000);
    cy.url().should('include', 'home/splash');
    cy.contains('CogSkills');
    cy.get('ion-menu-button').click();
    cy.get('ion-item').contains('Profil').click();
    cy.url().should('include', 'home/profile');
    cy.contains('Becenév: qwe');
    cy.contains('Nem: nő');
    cy.get('ion-button').contains('Mentés').should('not.exist');
  });

  it('Profile Not Data Added', () => {
    cy.visit('/');
    cy.contains('CogSkills');
    cy.get('ion-button').contains('Bejelentkezés').click();
    cy.wait(3000);
    cy.get("[type='email']").type('xcv@gmail.com');
    cy.get("[type='password']").type('xcvxcv');
    cy.get('span').contains('Bejelentkezés').click();
    cy.wait(3000);
    cy.url().should('include', 'home/splash');
    cy.contains('CogSkills');
    cy.get('ion-menu-button').click();
    cy.get('ion-item').contains('Profil').click();
    cy.url().should('include', 'home/profile');
    cy.contains('Nincs megadva további adat');
    cy.get('ion-button').contains('Mentés');
  });
});
