

describe("API Testing", ()=>{

    //Parsing simple JASON Response
    it("Parsing simple JASON response", ()=>{
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
        }).then((response)=>{
            expect(response.status).to.equal(200),
            expect(response.body[0].id).to.equal(1), // 【0】：the first JASON object in the reponse body
            expect(response.body[0].title).to.equal('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'),
            expect(response.body[0].price).to.equal(109.95),
            expect(response.body[0].rating.rate).to.equal(3.9)
        })
    });

    //Parsing complext JASON Response
    it("Parsing complex JASON response", ()=>{

        // Declare total price variable 
        let totalPrice = 0;

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: //qs: query params
            {
                limit: 5 //Set limit to get response with 5 objects only
            }
        }).then((response)=>{
            expect(response.status).to.equal(200),

            //Use for each loop to capture the price of each object(element) and add them up to the total price.
            response.body.forEach(element => {
                totalPrice = totalPrice + element.price;
            })
            expect(totalPrice).to.equal(899.23)
        })
    });
})