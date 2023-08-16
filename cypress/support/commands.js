Cypress.Commands.add('login', (username ,password) => {
    cy.get('input[type="text"]').type(username)
    cy.get('input[type="password"]').type(password)
    cy.get('input[type="submit"]').click()
})