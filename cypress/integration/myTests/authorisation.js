context('Проверка авторизации', function() {

    beforeEach(function() {
        cy.visit('http://51.250.1.158:49153')
    })

    it('Дымовой тест: проверка авторизации c login=admin, password=admin', () => {

        cy.login
        cy.get('[placeholder="Пароль"]').type('admin')
        cy.get('[value="Войти"]').click()
        cy.url().should('include', '/login')

    })

    it('проверка авторизации с login=админ, password=admin', () => {

        cy.get('[placeholder="Имя пользователя"]').type('админ')
        cy.get('[placeholder="Пароль"]').type('admin')
        cy.get('[value="Войти"]').click()

    })

    it.only('проверка авторизации с login=admin, password=а', () => {

        cy.login
        cy.get('[placeholder="Пароль"]').type('a')
        cy.get('[value="Войти"]').click()

    })

    it('проверка авторизации с пустыми полями', () => {

        cy.get('[value="Войти"]').click()

    })

    it('проверка авторизации с целочисленными данными', () => {

        cy.get('[placeholder="Имя пользователя"]').type('5')
        cy.get('[placeholder="Пароль"]').type('555')
        cy.get('[value="Войти"]').click()

    })

    it('проверка авторизации со знаковыми данными', () => {

        cy.get('[placeholder="Имя пользователя"]').type('@')
        cy.get('[placeholder="Пароль"]').type('##')
        cy.get('[value="Войти"]').click()

    })

    it('проверка авторизации с login=admin, password=admin, с использованием clear()', () => {

        cy.get('[placeholder="Имя пользователя"]').clear().type('admin').clear().type('admin')
        cy.get('[placeholder="Пароль"]').type('admin')
        cy.get('[value="Войти"]').click()
        cy.url().should('include', '/login')

    })

})