Cypress.Commands.add('login', (admin) => {
    cy.get('[placeholder="Имя пользователя"]').type('admin')
})