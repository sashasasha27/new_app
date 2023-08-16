context('Проверка кнопки "Вид"', function() {

    beforeEach(function() {
        cy.visit('/')
        cy.login('arnold','1')
    })

    it('проверка кнопки Вид', () => {
        cy.get('[aria-label="Вид"] > .material-icons').click()
        cy.get('[id="listing"]').should('have.class','mosaic file-icons')

        cy.get('[aria-label="Вид"] > .material-icons').click()
        cy.get('[id="listing"]').should('have.class','mosaic gallery file-icons')

        cy.get('[aria-label="Вид"] > .material-icons').click()
        cy.get('[id="listing"]').should('have.class','list file-icons')

    })

})