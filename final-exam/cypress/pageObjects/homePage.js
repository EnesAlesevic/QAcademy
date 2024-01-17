class homePage {

    visitHomePage() {
        return cy.fixture('data').then((data) => {
            cy.visit(data.url)
        })
    }
    
    electronicsCategoryBtn(){
        return cy.get(':nth-child(1) > .category-ite > .picture > a > img')
    }

}

module.exports = new homePage();