/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/');
});

it('should have a layout with a header, main and footer element', () => {
  cy.viewport('macbook-15');
  cy.assertLayoutHasHeaderMainFooter();
  cy.viewport('ipad-2');
  cy.assertLayoutHasHeaderMainFooter();
  cy.viewport('samsung-s10');
  cy.assertLayoutHasHeaderMainFooter();
});

it('should not be possible to scroll horizontally on any device', () => {
  cy.ensureNoHorizontalScroll();
});

it('should display survey years in chart header with an empty cell on each side', () => {
  cy.viewport('macbook-15');
  cy.shouldDisplayChartHeader();
  cy.viewport('ipad-2');
  cy.shouldDisplayChartHeader();
  cy.viewport('samsung-s10');
  cy.shouldDisplayChartHeader();
});

it('should display rows of each framework over its yearly retention with the frameworks name on each side', () => {
  cy.viewport('macbook-15');
  cy.shouldDisplayChartData('retention');
  cy.viewport('ipad-2');
  cy.shouldDisplayChartData('retention');
  cy.viewport('samsung-s10');
  cy.shouldDisplayChartData('retention');
});
