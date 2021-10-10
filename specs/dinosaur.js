const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');

describe('Dinosaur', function(){

    let dinosaur;
    this.beforeEach(function(){
        dinosaur = new Dinosaur('T-Rex', 'Carnivore', 300)
    });

    it('should have a species', function(){
        const actual = dinosaur.species;
        assert.deepStrictEqual(actual, 'T-Rex')
    });
    it('should have a diet', function () {
        const actual = dinosaur.diet;
        assert.strictEqual(actual, 'Carnivore');
      });
    
    it('should have an average number of visitors it attracts per day', function () {
        const actual = dinosaur.visitsPerDay;
        assert.strictEqual(actual, 300);
      });
});