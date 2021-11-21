/* eslint-disable @typescript-eslint/quotes */
describe('Games', () => {
  beforeEach(() => {
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
    cy.contains('Iowa Gambling');
    cy.contains('Wisconsin Card Sorting');
    cy.contains('Mental Rotation');
    cy.contains('Balloon Analog Risk');
  });

  it('IOWA', () => {
    cy.get('ion-label').contains('Iowa Gambling').click();
    cy.url().should('include', '/home/iowa');
    cy.contains('A játékról');
    cy.get('ion-button').contains('Megértettem').click();
    cy.get('ion-button').contains(' Start ').click();
    cy.get('ion-label').contains(' Nyeremény: 0');
    cy.get('ion-label').contains(' Veszteség: 0');
    cy.get('ion-label').contains(' Pénz: 2000');
    cy.get('#aa').click();
    cy.get('#bb').click();
    cy.get('#cc').click();
    cy.get('#dd').click();
    for(let n = 0; n < 21; n ++){
      cy.get('#aa').click();
    }
    cy.get('#choiceA').click();
    cy.get('ion-button').contains('Ellenőrzés').click();
    cy.get('ion-button').contains('Eredmény').click();
    cy.get('ion-card-title').contains('Eredmények');
    cy.get('ion-button').contains('Eredmények').click();
    cy.url().should('include', '/home/statistics/navstat');
    cy.get('ion-button').contains('IOWA Eredmények').click();
    cy.url().should('include', '/home/statistics/statiowa');
    cy.get('ion-card-title').contains('Iowa Gambling Eredmény 1');
  });

  it('WCST', () => {
    cy.get('ion-label').contains('Wisconsin Card Sorting').click();
    cy.url().should('include', '/home/wcst');
    cy.contains('A játékról');
    cy.get('ion-button').contains('Megértettem').click();
    cy.get('ion-button').contains(' Start ').click();
    cy.get('#1').click();
    cy.wait(2000);
    cy.get('#2').click();
    cy.wait(2000);
    cy.get('#3').click();
    cy.wait(2000);
    cy.get('#4').click();
    cy.wait(2000);
    for(let n = 0; n < 60; n ++){
      cy.get('#2').click();
      cy.wait(2000);
    }
    cy.get('ion-card-title').contains('Eredmények');
    cy.get('ion-button').contains('Eredmények').click();
    cy.url().should('include', '/home/statistics/navstat');
    cy.get('ion-button').contains('WCST Eredmények').click();
    cy.url().should('include', '/home/statistics/statwcst');
     cy.get('ion-card-title').contains('Wisconsin Card Sorting Eredmény 1');
  });

  it('BART', () => {
    cy.get('ion-label').contains('Balloon Analog Risk').click();
    cy.url().should('include', '/home/bart');
    cy.contains('A játékról');
    cy.get('ion-button').contains('Megértettem').click();
    cy.get('ion-button').contains('Start').click();
    cy.get('ion-label').contains('Bank: 0');
    for(let n = 0; n < 15; n ++){
      cy.get('ion-button').contains('Fel').click();
      cy.get('ion-button').contains('Bankba').click();
      cy.wait(1000);
    }
    cy.get('ion-card-title').contains('Eredmények');
    cy.contains('Bank: 75');
    cy.get('ion-button').contains('Eredmények').click();
    cy.url().should('include', '/home/statistics/navstat');
    cy.get('ion-button').contains('BART Eredmények').click();
    cy.url().should('include', '/home/statistics/statbart');
     cy.get('ion-card-title').contains('Balloon Analog Risk Eredmény 1');
  });

  it('MentRot', () => {
    cy.get('ion-label').contains('Mental Rotation').click();
    cy.url().should('include', '/home/mentalrotation');
    cy.contains('A játékról');
    cy.get('ion-button').contains('Megértettem').click();
    cy.get('ion-button').contains('Start').click();
    for(let n = 0; n < 5; n ++){
      cy.get('#l').click();
      cy.wait(2000);
    }
    for(let n = 0; n < 5; n ++){
      cy.get('#r').click();
      cy.wait(2000);
    }
    cy.wait(1000);
    cy.get('ion-card-title').contains('Eredmények');
    cy.get('ion-button').contains('Eredmények').click();
    cy.url().should('include', '/home/statistics/navstat');
    cy.get('ion-button').contains('Mental Rotation Eredmények').click();
    cy.url().should('include', '/home/statistics/statmentrot');
     cy.get('ion-card-title').contains('Mental Rotation Eredmény 1');
  });

});
