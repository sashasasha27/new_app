context('Проверка авторизации', function() {

    beforeEach(function() {
        cy.visit('/')
    })

    it('Дымовой тест: проверка авторизации c login=admin, password=admin', () => {

        cy.login('admin','admin')

        cy.url().should('include', '/login')

    })

    it('проверка авторизации с login=админ, password=admin', () => {

        cy.login('админ','admin')

    })

    it('проверка авторизации с login=admin, password=а', () => {

        cy.login('admin','a')

    })

    it('проверка авторизации с пустыми полями', () => {

        cy.get('[value="Войти"]').click()

    })

    it('проверка авторизации с целочисленными данными', () => {

        cy.login('5','555')

    })

    it('проверка авторизации со знаковыми данными', () => {

        cy.login('@','##')

    })

    it('проверка авторизации с login=admin, password=admin, с использованием clear()', () => {

        cy.get('[placeholder="Имя пользователя"]').clear().type('admin').clear().type('admin')
        cy.get('[placeholder="Пароль"]').type('admin')
        cy.get('[value="Войти"]').click()
        cy.url().should('include', '/login')

    })

})