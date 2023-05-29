describe("HTTP Requests", ()=>{
    
  //Get Call
  it("GET Call", ()=>{
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('equal', 200);
  })

  //Post Call
  it("Post Call", ()=>{
      cy.request({
          method:'POST',
          url:'https://jsonplaceholder.typicode.com/posts',
          body:{
              title:'Test post',
              body:'This is post call',
              userId:1
          }
      }).its('status').should('equal', 201)
  })

  //Put Call
  it("Post Call", ()=>{
      cy.request({
          method:'PUT',
          url:'https://jsonplaceholder.typicode.com/posts/1',
          body:{
              title:'Test post',
              body:'This is post call',
              userId:1,
              id:1
          }
      }).its('status').should('equal', 200)
  })

  //Delete Call
  it("Delete Call", ()=>{
      cy.request({
          method:'DELETE',
          url:'https://jsonplaceholder.typicode.com/posts/1'
      }).its('status').should('equal', 200)
  })
})