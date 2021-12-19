class Catalog {
  constructor(){
    this.data = {};
    this.length = 0;        
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const SchoolCatalog = new Catalog;

class School{
  constructor(name, level, numOfStudents){
    this._name = name;
    this._level = level;
    this._numOfStudents = numOfStudents;
  }

  get schoolName(){
    return this._name;
  }

  get schoolLevel(){
    return this._level;
  }

  get numOfStudents(){
    return this._numOfStudents;
  }

  set numOfStudents(num){
    if(typeof num === 'number'){
      this._numOfStudents = num;
    } else {
      console.log(`Invalid input: numberOfStudents must be set to a Number.`);
    }
  }

  quickFacts(){
    console.log(`${this._name} educates ${this._numOfStudents} students at the ${this._level} school level.`);
  }

  static pickSub(subs){
    let i = Math.floor(subs.length * Math.random());
    console.log(subs[i]);
  }
}

class PrimarySchool extends School{
  constructor(name, numOfStudents, pickupPolicy){
    super(name, 'primary', numOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School{
  constructor(name, numOfStudents, mascot){
    super(name, 'middle', numOfStudents);
    this._mascot = mascot;
  }

  get mascot(){
    return this._mascot;
  }
}

class Highschool extends School{
  constructor(name, numOfStudents, sportsTeams){
    super(name, 'high', numOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    return this._sportsTeams;
  }
}

const subs = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

// School.pickSub(subs);

const lh = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

// console.log(lh);
// lh.quickFacts();

const alSmith = new Highschool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

// console.log(alSmith.sportsTeams);

const ajs = new MiddleSchool('Abington Junior High', 1640, 'Ghosts');

SchoolCatalog.push(lh);
SchoolCatalog.push(alSmith);
SchoolCatalog.push(ajs);
console.log(SchoolCatalog);
