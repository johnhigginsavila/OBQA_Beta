var sails = require('sails');
var _ = require('lodash');

global.chai = require('chai');
global.should = chai.should();

before(function(done){
    this.timeout(50000);

    sails.lift({
        /*log:{
            level:'silent'
        },
        hooks:{
            grunt:false
        },
        models:{
            connection:'unitTestConnection',
            migrate:'drop'
        },
        connections:{
            unitTestConnection:{
                adapter: 'sails-disk'
            }
        }*/
    }, function(err, server){
        if(err) return done(err);
        done(err, sails);
    });
});

after(function(done){
    if(sails && _.isFunction(sails.lower)){
        sails.lower(done);
    }
});