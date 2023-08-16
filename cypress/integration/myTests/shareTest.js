context('Проверка кнопки "Поделиться"', function() {

    beforeEach(function() {
        cy.visit('/')
        cy.login('arnold','1')
        cy.get('[aria-label="arnold"]').click()
    })

    it('проверка кнопки без пароля', () => {

        cy.get('[aria-label="Поделиться"] > .material-icons').click()
        cy.get('.button--blue').click()
        cy.get('.input-group > input').type('1')
        cy.get('.button--blue').click()
        cy.get('[aria-label="Закрыть"]').click()

    })

    it('проверка кнопки с паролем', () => {

        cy.get('[aria-label="Поделиться"] > .material-icons').click()
        cy.get('.button--blue').click()
        cy.get('.input-group > input').type('1')
        cy.get('.input--block').type('222')
        cy.get('.button--blue').click()
        cy.get('[aria-label="Закрыть"]').click()

    })

})