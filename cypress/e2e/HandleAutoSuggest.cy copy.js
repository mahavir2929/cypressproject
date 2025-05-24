describe('Handle Google Search', () => {
    it('Select values from google search', () => {
        
        cy.visit("https://www.google.com/")
        cy.wait(10000)

        cy.get("textarea[name='q']").type("Mukesh Otwani",{delay:100})

        cy.xpath("//div[@role='option']/div[1]//span")
        .each(function(ele,num1,list1)
        {
            cy.log(ele.text())

            if(ele.text().includes("postman"))
            {
                cy.wrap(ele).click({force:true})
            }

        })


    });
});