 let dataForTest = [
    {
        "filename":"cypressdata.json",
        "context":"1"
    },
    {
        "filename":"cypressdata2.json",
        "context":"2"
    }
 ]

 describe('DataDriven test', function() {

    dataForTest.forEach(function(testData)

    {
        describe(testData.context, function ()  {
            before(function() {
                
                cy.fixture(testData.filename).then(function(getdata)

                {
                    this.getdata = getdata
                })
            
            });

            it('data driven testing', function ()  {
                
                cy.log(this.getdata.name)
            });
        });
        
    })
    
 });