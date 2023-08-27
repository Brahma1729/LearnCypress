describe('This is my first multi testcase suite',function() {

    it.only('This is my first test case', function(){

        expect(true).to.equal(true)
    })

    it('This is my second test case', function(){

        expect(true).to.equal(false)
    })

    it('This is my second test case', function(){

        expect(true).to.equal((true))
    })
    
})

// it.only executes only that test case in the test suite
