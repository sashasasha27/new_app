context('Проверка кнопки "Удалить"', function() {

    beforeEach(function() {
        cy.visit('/')
        cy.login('arnold','1')
    })

    it('удаление элемента', () => {

        cy.get('[aria-label="arnold(3)"]').click()
        cy.get('#delete-button').click()

        cy.get('.button--red').click()
        cy.get('[aria-label="arnold(3)"]').should('not.exist')

    })

})