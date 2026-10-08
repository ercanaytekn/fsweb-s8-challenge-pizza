describe('Pizza Siparişi', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="aciktim-button"]').click()
    cy.url().should('include', '/order')
  })

  // ---------- Olumlu Testler ----------

  it('isim inputuna metin yazabiliyor', () => {
    cy.get('[data-cy="isim-input"]').type('Ercan')
    cy.get('[data-cy="isim-input"]').should('have.value', 'Ercan')
  })

  it('birden fazla malzeme seçilebiliyor', () => {
    cy.get('[data-cy="malzeme-checkbox"]').eq(0).check()
    cy.get('[data-cy="malzeme-checkbox"]').eq(1).check()
    cy.get('[data-cy="malzeme-checkbox"]').eq(2).check()
    cy.get('[data-cy="malzeme-checkbox"]').eq(3).check()
    cy.get('[data-cy="malzeme-checkbox"]:checked').should('have.length', 4)
  })

  it('form doldurulup gönderilebiliyor', () => {
    cy.get('[data-cy="isim-input"]').type('Ercan')
    cy.get('[data-cy="boyut-radio"]').eq(1).check()
    cy.get('[data-cy="hamur-select"]').select('İnce')
    cy.get('[data-cy="malzeme-checkbox"]').eq(0).check()
    cy.get('[data-cy="malzeme-checkbox"]').eq(1).check()
    cy.get('[data-cy="malzeme-checkbox"]').eq(2).check()
    cy.get('[data-cy="malzeme-checkbox"]').eq(3).check()
    cy.get('[data-cy="submit-button"]').should('not.be.disabled')
    cy.get('[data-cy="submit-button"]').click()
    cy.url().should('include', '/success')
  })

  // ---------- Olumsuz Testler ----------

  it('boş formda buton kilitli', () => {
    cy.get('[data-cy="submit-button"]').should('be.disabled')
  })

  it('3 karakterden kısa isimde hata gösteriyor', () => {
    cy.get('[data-cy="isim-input"]').type('ab')
    cy.contains('İsim en az 3 karakter olmalı')
    cy.get('[data-cy="submit-button"]').should('be.disabled')
  })

  it('4 malzemeden az seçilince hata gösteriyor', () => {
    cy.get('[data-cy="malzeme-checkbox"]').eq(0).check()
    cy.get('[data-cy="malzeme-checkbox"]').eq(1).check()
    cy.get('[data-cy="malzeme-checkbox"]').eq(2).check()
    cy.contains('En az 4, en fazla 10 malzeme seçmelisin')
    cy.get('[data-cy="submit-button"]').should('be.disabled')
  })

  it('10 malzemeden fazla seçilince hata gösteriyor', () => {
    cy.get('[data-cy="malzeme-checkbox"]').check()
    cy.contains('En az 4, en fazla 10 malzeme seçmelisin')
    cy.get('[data-cy="submit-button"]').should('be.disabled')
  })
})