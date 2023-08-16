context('Проверка кнопки "Переименовать"', function() {

    beforeEach(function() {
        cy.visit('/')
        cy.login('arnold','1')
        cy.get('[aria-label="arnold"]').click()
    })

    it('переименование элемента (а затем переименование в исходное состояние)', () => {

        cy.get('[aria-label="Переименовать"] > .material-icons').click()
        cy.get('.input').clear().type('Arnold')
        cy.get('[type="submit"]').click()
        cy.get('[aria-label="Переименовать"] > .material-icons').click()
        cy.get('.input').clear().type('arnold')
        cy.get('[type="submit"]').click()

    })

})