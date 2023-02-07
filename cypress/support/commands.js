/// <reference types="cypress" />
import { frameworks } from '../../data';

// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('clickLinkInFooterAndAssertItsHighlighted', (regexp) => {
  cy.get('footer')
    .find('a')
    .contains(regexp)
    .then(($link) => {
      const linkBGColorBefore = $link.css('background-color');
      cy.wrap($link)
        .click()
        .then(($link) => {
          const linkBgColorAfter = $link.css('background-color');
          expect(linkBGColorBefore).to.not.equal(linkBgColorAfter);
        });
    });
});

Cypress.Commands.add('shouldDisplayChartHeader', () => {
  const { surveys } = frameworks[0];
  cy.get('[data-cy="chart-header"] > *')
    .should('have.lengthOf', surveys.length + 2)
    .each(($cell, index) => {
      if (index === 0 || index > surveys.length) {
        expect($cell).to.be.empty;
      } else {
        const { year } = surveys[index - 1];
        expect($cell).to.have.text(year);
      }
    });
});

Cypress.Commands.add('shouldDisplayChartData', (category) => {
  const { surveys } = frameworks[0];
  cy.get('[data-cy="chart-row"]')
    .should('have.lengthOf', frameworks.length)
    .each(($row, index) => {
      const framework = frameworks[index];
      const missingSurveysCount = framework.surveys[0].year - 2016;

      cy.wrap($row)
        .find('[data-cy="chart-cell"]')
        .should('have.lengthOf', surveys.length + 2)
        .each(($cell, index) => {
          if (index === 0 || index > surveys.length) {
            cy.wrap($cell)
              .should('have.text', framework.name)
              .should('have.css', 'color')
              .and('be.colored', framework.color);
          } else if (index - 1 < missingSurveysCount) {
            expect($cell).to.be.empty;
          } else {
            const surveyIndex = index - 1 - missingSurveysCount;
            const survey = framework.surveys[surveyIndex];
            cy.wrap($cell)
              .find('[data-cy="chart-circle"]')
              .should('have.text', survey[category] + '%')
              .should('have.css', 'border-color')
              .and('be.colored', framework.color);

            cy.wrap($cell)
              .find('[data-cy="chart-circle"]')
              .then(($circle) => {
                const circleBgColor = $circle.css('background-color');
                cy.get('body').then(($body) => {
                  const bodyBgColor = $body.css('background-color');
                  expect(circleBgColor).to.equal(bodyBgColor);
                });
              });
          }
        });

      cy.wrap($row)
        .find('[data-cy="row-line"]')
        .should('be.visible')
        .should('have.css', 'position', 'absolute')
        .should('have.css', 'z-index', '-10')
        .should('have.css', 'background-color')
        .and('be.colored', framework.color);

      cy.wrap($row).find('[data-cy="row-line"]').invoke('width').should('be.gt', 300);
    });
});

Cypress.Commands.add('assertLayoutHasHeaderMainFooter', () => {
  cy.get('header')
    .should('exist')
    .should('be.visible')
    .find('h1')
    .should('have.text', 'State of Javascript');
  cy.get('main').should('exist').should('be.visible');
  cy.get('footer')
    .should('exist')
    .should('be.visible')
    .should('include', /retention/i);
});

Cypress.Commands.add('ensureNoHorizontalScroll', () => {
  cy.viewport('samsung-s10');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);
  cy.viewport('iphone-xr');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);
  cy.viewport('ipad-2');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);
  cy.viewport('ipad-2', 'landscape');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);
  cy.viewport('macbook-13');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);
  cy.viewport('macbook-16');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);

  cy.get('body')
    .should('not.have.css', 'overflow', 'hidden')
    .should('not.have.css', 'overflow-x', 'hidden');
  cy.get('header')
    .should('not.have.css', 'overflow', 'hidden')
    .should('not.have.css', 'overflow-x', 'hidden');
  cy.get('main')
    .should('not.have.css', 'overflow', 'hidden')
    .should('not.have.css', 'overflow-x', 'hidden');
  cy.get('footer')
    .should('not.have.css', 'overflow', 'hidden')
    .should('not.have.css', 'overflow-x', 'hidden');
});
