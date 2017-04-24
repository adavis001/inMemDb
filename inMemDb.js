/*jshint esversion: 6*/

const users = {
  '1': { name: 'Alice', age: 12, gender: 'f', jobType: 'st' },
  '2': { name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },
  '3': { name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },
  '4': { name: 'David', age: 9, gender: 'm', jobType: 'na' },
  '5': { name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },
  '6': { name: 'Fred', age: 45, gender: 'm', jobType: 'dv' },
  '7': { name: 'George', age: 38, gender: 'm', jobType: 'dv' },
  '8': { name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },
  '9': { name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },
  '10': { name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },
  '11': { name: 'Kathy', age: 8, gender: 'f', jobType: 'na' },
  '12': { name: 'Liam', age: 20, gender: 'm', jobType: 'st' }
};

const employer = {
  dv: 'DevLeague',
  st: 'Student',
  na: 'N/A'
};

let youngestAge = 99;
let oldestAge = 0;

let userArray = [];
for( var i in users ) {
    if (users.hasOwnProperty(i)){
       userArray.push(users[i]);
    }
}

let maleArray = [];
let femaleArray = [];


function byId(id) {
  console.log(users[id]);
  return users[id];
}

function youngest() {
  for (let i = 0; i < userArray.length; i++) {
    if(userArray[i].age < youngestAge){
      youngestAge = userArray[i].age;
    }
  }
  for (let j = 0; j < userArray.length; j++) {
    if(userArray[j].age === youngestAge){
      console.log(userArray[j].name);
      return userArray[j].name;
    }
  }
}

function oldest() {
  for (let i = 0; i < userArray.length; i++) {
    if(userArray[i].age > oldestAge){
      oldestAge = userArray[i];
    }
  }
  for (let j = 0; j < userArray.length; j++) {
    if(userArray[j].age === oldestAge){
      console.log(userArray[j].name);
      return userArray[j];
    }
  }
}

function males () {
  for (var i = 0; i < userArray.length; i++) {
    if(userArray[i].gender === 'm'){
      maleArray.push(userArray[i]);
    }
  }
  console.log(maleArray);
  return maleArray;
}

function females() {
  for (var i = 0; i < userArray.length; i++) {
    if(userArray[i].gender === 'f'){
      femaleArray.push(userArray[i]);
    }
  }
  console.log(femaleArray);
  return femaleArray;
}

// function employees(employer) {

// }

const functions = {
  byId: byId,
  youngest: youngest,
  oldest: oldest,
  males: males,
  females: females,
  // employees: employees
};


module.exports = functions;


// byId(4);
// youngest();
//oldest();
//males();
females();
