class homePage {

    visitHomePage() {
        return cy.fixture('data').then((data) => {
            cy.visit(data.url)
        })
    }
}

module.exports = new homePage();