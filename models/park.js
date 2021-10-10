const Park = function(name, ticket){
    this.name = name;
    this.ticket = ticket;
    this.dinosaurArray = [];
}

Park.prototype.dinosaurCount = function(){
    return this.dinosaurArray.length;
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurArray.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaurSpecies){
    const indexOfDinosaur = this.dinosaurArray.indexOf(dinosaurSpecies);
    this.dinosaurArray.splice(indexOfDinosaur, 1);
}

Park.prototype.popularDinosaur = function (){
    const popularArray = this.dinosaurArray.slice()
    popularArray.sort(function(a, b){
        return b.visitsPerDay - a.visitsPerDay;
    })
    return popularArray[0];
};

Park.prototype.findDinosaurSpecies = function(species){
    const speciesArray = this.dinosaurArray.filter(function(dinosaur){
        return dinosaur.species === species;
    })
    return speciesArray;
};

Park.prototype.totalVisitsPerDay = function(){
    visitorCount = 0;
    for (let i = 0; i < this.dinosaurArray.length; i++){
        visitorCount += this.dinosaurArray[i].visitsPerDay;
    }
    return visitorCount;
};

Park.prototype.totalVisitsPerYear = function(){
    return this.totalVisitsPerDay() * 365;
};

Park.prototype.yearlyTicketSales = function(){
    return this.totalVisitsPerYear() * this.ticket;
};


// EXTENSIONS

Park.prototype.removeBySpecies = function(species){
    const speciesArray = this.dinosaurArray.filter(function(dinosaur){
        return dinosaur.species !== species;
    })
   return speciesArray;
};


Park.prototype.dietTypeObj = function(){
    const dietTypeObj = {};

    for (dinosaur of this.dinosaurArray){
        if (dietTypeObj[dinosaur.diet]){
            dietTypeObj[dinosaur.diet] += 1;
        } else{
            dietTypeObj[dinosaur.diet] = 1;
        }
    }
return dietTypeObj;
};


module.exports = Park;

