/// <reference types="cypress" />

beforeEach(() => {
  cy.viewport('macbook-13');
  cy.visit('/');
});

it('should redirect user to "/retention" when visiting start page', () => {
  cy.location('pathname').should('equal', '/retention');
  cy.shouldDisplayChartData('retention');
});

it('should display retention data when clicking link in footer', () => {
  cy.get('footer')
    .find('a')
    .contains(/retention/i)
    .click();
  cy.location('pathname').should('equal', '/retention');
  cy.shouldDisplayChartData('retention');
  cy.reload();
  cy.shouldDisplayChartData('retention');
});

it('should display interest data when clicking link in footer', () => {
  cy.clickLinkInFooterAndAssertItsHighlighted(/interest/i);
  cy.location('pathname').should('equal', '/interest');
  cy.shouldDisplayChartData('interest');
  cy.reload();
  cy.shouldDisplayChartData('interest');
});

it('should display usage data when clicking link in footer', () => {
  cy.clickLinkInFooterAndAssertItsHighlighted(/usage/i);
  cy.location('pathname').should('equal', '/usage');
  cy.shouldDisplayChartData('usage');
  cy.reload();
  cy.shouldDisplayChartData('usage');
});

it('should display awareness data when clicking link in footer', () => {
  cy.clickLinkInFooterAndAssertItsHighlighted(/awareness/i);
  cy.location('pathname').should('equal', '/awareness');
  cy.shouldDisplayChartData('awareness');
  cy.reload();
  cy.shouldDisplayChartData('awareness');
});
