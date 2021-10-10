const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');
const Park = require('../models/park.js');

describe('Park', function(){
    let park
    let dino_1
    let dino_2
    let dino_3

    this.beforeEach(function(){
        park = new Park('Jurassic Park', 20)

        dino_1 = new Dinosaur('T-Rex', 'Carnivore', 300)
        dino_2 = new Dinosaur('Stegasarus', 'Herbivore', 250)
        dino_3 = new Dinosaur('Pterodactyl', 'Carnivore', 100)
    });

    it('should have a name', function(){
        const actual = park.name;
        assert.deepStrictEqual(actual, 'Jurassic Park')
    });

    it('should have a ticket-price', function () {
        const actual = park.ticket;
        assert.strictEqual(actual, 20)
      });
    it('should be able to count dinosaur list', function(){
        const actual = park.dinosaurCount();
        assert.strictEqual(actual, 0)
    });
    it('should be able to add a dinosaur', function(){
        park.addDinosaur(dino_1);
        const actual = park.dinosaurCount();
        assert.strictEqual(actual, 1)
    });
    it('should be able to remove a dinosaur', function(){
        park.addDinosaur(dino_1);
        park.addDinosaur(dino_2);
        park.addDinosaur(dino_3);
        park.removeDinosaur('T-Rex');
        const actual = park.dinosaurCount();
        assert.strictEqual(actual, 2);

    });

    it('should be able to find most popular dinosaur', function(){
        park.addDinosaur(dino_1);
        park.addDinosaur(dino_2);
        park.addDinosaur(dino_3);
        const actual = park.popularDinosaur();
        const expected = dino_1;
        assert.deepStrictEqual(actual, expected)
    });

    it('should be able to find all dinos of particular species', function(){
        park.addDinosaur(dino_1);
        park.addDinosaur(dino_2);
        park.addDinosaur(dino_2); 
        const actual = park.findDinosaurSpecies(dino_2.species)
        const expected = [dino_2, dino_2];
        assert.deepStrictEqual(actual, expected)
    });

    it('should be able to calculate visits per day', function(){
        park.addDinosaur(dino_1);
        park.addDinosaur(dino_2);
        park.addDinosaur(dino_3);
        const actual = park.totalVisitsPerDay();
        const expected = 650;
        assert.strictEqual(actual, expected);
    });

    it('should have a yearly visitor count', function(){
        park.addDinosaur(dino_1);
        park.addDinosaur(dino_2);
        park.addDinosaur(dino_3);
        const actual = park.totalVisitsPerYear();
        const expected =  237250;
        assert.strictEqual(actual, expected)
    });

    it ('should be able to calculate total ticket sales per year', function(){
        park.addDinosaur(dino_1);
        park.addDinosaur(dino_2);
        park.addDinosaur(dino_3);
        const actual = park.yearlyTicketSales();
        const expected = 4745000;
        assert.strictEqual(actual, expected)
    });
});