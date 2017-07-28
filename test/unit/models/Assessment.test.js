describe('AssessmentModel', function(){
    describe('#find()', function(){
        it('should check find function', function(done){
            Assessment.find().then(function(results){
                done();
            })
            .catch(done);
        })
    })
})