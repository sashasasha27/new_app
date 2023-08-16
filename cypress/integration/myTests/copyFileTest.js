context('Проверка кнопки "Копировать"', function() {

    beforeEach(function() {
        cy.visit('/')
        cy.login('arnold','1')
        cy.get('[aria-label="arnold"]').click()
    })

    it('копирование элемента', () => {

        cy.get('#copy-button').click()
        cy.get('.card-title > h2').should('have.text', 'Копировать')
        cy.get('[aria-label="Копировать"]').click()
        cy.get('[aria-label="arnold(2)"]').should('exist').and('be.visible')

    })

})