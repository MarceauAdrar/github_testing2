describe('Test formulaire d\'ajout', () => {
  it('passes', () => {
    cy.visit('https://testing.adrardev.fr/addUser')
    cy.get('input[name="nom"]').type('DOE')
    cy.get('input[name="prenom"]').type('John')
    cy.get('input[name="mail"]').type('')
    cy.get('input[name="mdp"]').type('!P4sSw0rD!')
    cy.get('input[type="submit"]').click()
    cy.get('#msgzone').should('contain', "Le compte a été ajouté en BDD")
  })
})