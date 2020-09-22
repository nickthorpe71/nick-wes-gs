// You are driving a vehicle that has capacity empty seats initially available for passengers.  The vehicle only drives east (ie. it cannot turn around and drive west.)

// Given a list of trips, trip[i] = [num_passengers, start_location, end_location] contains information about the i-th trip: the number of passengers that must be picked up, and the locations to pick them up and drop them off.  The locations are given as the number of kilometers due east from your vehicle's initial location.

// Return true if and only if it is possible to pick up and drop off all passengers for all the given trips. 

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  let hash = {};

  //Loop through trips
  for(let i = 0; i < trips.length; i++){

    //Set hash at start value to the passengers added
    if(hash[trips[i][1]]){
      hash[trips[i][1]] += trips[i][0];
    } else {
      hash[trips[i][1]] = trips[i][0];
    }

    //Set hash at end value to the passengers subtracted
    if(hash[trips[i][2]]){
      hash[trips[i][2]] -= trips[i][0];
    } else {
      hash[trips[i][2]] = -trips[i][0];
    }
  }

  //Loop through hash adding/subtracting the passengers and checking against capacity
  let currentPassengers = 0;
  for(let location in hash){
    currentPassengers += hash[location];
    if(currentPassengers > capacity){
      return false;
    }
  }

  return true;    
};

console.log(carPooling([[2,1,5],[3,3,7]], 4)); //false

console.log(carPooling([[2,1,5],[3,3,7]], 5)); //true

console.log(carPooling([[2,1,5],[3,5,7]], 3)); //true