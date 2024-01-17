import homePage from '../pageObjects/homePage.js'
import electronicsPage from '../pageObjects/electronicsPage.js'


describe('Final exam template', () => {

    context('Some context', () => {
        it('Navigate to Electronics Category', () => {
            homePage.electronicsCategoryBtn().click()
            cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click()
            cy.get(':nth-child(2) > .product-item > .details > .product-title > a').should('contain','HTC One Mini Blue')
        })

    })
    
})