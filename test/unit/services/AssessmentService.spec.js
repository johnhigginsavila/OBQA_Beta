require('../../bootstrap.test');

describe('The AssessmentService', function(){
    before(function(done){
        Assessment.find().then(function(){
            done();
        })
    })

    it('should return all assessments', function(done){
        AssessmentService
            .getPopulatedAssessment()
            .then(function(result){
                result.should.be.an('array');
                done();
            })
            .catch(done);
    })
})

