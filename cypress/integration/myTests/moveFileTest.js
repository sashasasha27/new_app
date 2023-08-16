context('Проверка кнопки "Переместить файл"', function() {

    beforeEach(function() {
        cy.visit('/')
        cy.login('arnold','1')
    })

    it('перемещение файла arnold(1) в папку new_folder', () => {

        cy.get('[aria-label="arnold(1)"]').click()
        cy.get('#move-button > .material-icons').click()
        cy.get('li').click()
        cy.get('[aria-label="Переместить"]').click()

    })

})