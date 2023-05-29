

describe("API Testing", ()=>{

    //Get users with query parameters
    it("Passing Query Parameters", ()=>{
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users',
            qs:{page:2}
        }).then((response) =>{
            expect(response.status).to.eq(200); //Assert status code
            expect(response.status).equal(200); //Same assertion as above
            expect(response.body.page).to.eq(2); //Assert result page
            expect(response.body.data).has.length(6) //Assert the number of user
            expect(response.body.data[0]).have.property('id', 7); //Assert id in first data field. Can use 'have/has'
            expect(response.body.data[0]).has.property('first_name', 'Michael') //Assert first_name in first data field. Can use 'have/has'
        })
    })
    
        //Get users with query parameters using const variable
        const queryParam={page:2};

        it("Passing Query Parameters using variable", ()=>{
            cy.request({
                method:'GET',
                url:'https://reqres.in/api/users',
                qs:queryParam
            }).then((response) =>{
                expect(response.status).to.eq(200); //Assert status code
                expect(response.status).equal(200); //Same assertion as above
                expect(response.body.page).to.eq(2); //Assert result page
                expect(response.body.data).has.length(6) //Assert the number of user
                expect(response.body.data[0]).have.property('id', 7); //Assert id in first data field. Can use 'have/has'
                expect(response.body.data[0]).has.property('first_name', 'Michael') //Assert first_name in first data field. Can use 'have/has'
            })
        })
})