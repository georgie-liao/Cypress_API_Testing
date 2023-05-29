
describe("API Testing", ()=>{

    //Post request to get Token
    let authToken = null;

    before("Creating access token", ()=>{
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body:
            {
                clientName: 'George',
                clientEmail: Math.random().toString(5).substring(2)+"@gmail.com" //method to generate random gmail address
            }
        }).then((response) =>{
            authToken = response.body.accessToken; //capture response access token into variable authToken
        });
    });

    //Use authToken to place order
    before("Create a new order", ()=> {
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
            },
            body:
            {
                bookId:1,
                customerName: "George"
            }
        }).then((response) =>{
            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true);
        })
    });

    //Get orders
    it("Get orders", ()=>{
        cy.request({
            method:'GET',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+authToken
                },
            cookies:
                {
                'cookieName':'mycookie'
                }
        }).then((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).has.length(1);
        });
    });

});