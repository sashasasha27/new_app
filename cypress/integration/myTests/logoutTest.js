context('Проверка logout', function() {

    beforeEach(function() {
        cy.visit('/')
        cy.login('arnold','1')
    })

    it('проверка logout', () => {

        cy.get('[id="logout"]').click()

    })

})