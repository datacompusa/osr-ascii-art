/*jslint node: true */
'use strict';
var expect = require('chai').expect;
var art = require('../index');

// decribe('#art', function(){
    it('should give me a string', function(){
        var str = art.tardis;
        expect(str).to.be.a('string');
    });
// });
