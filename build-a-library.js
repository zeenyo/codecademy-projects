class Catalog {
  constructor(){
    this.data = {};
    this.length = 0;        
  }

    //declare a push method to class
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const catalog = new Catalog;

class Media {
  constructor(title, genre){
    this._title = title;
    this._genre = genre;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get genre() {
    return this._genre;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(bool) {
    this._isCheckedOut = bool;
  }

  toggleCheckoutStatus() {
    if(this._isCheckedOut === false){
      this._isCheckedOut = true;
    } else if(this._isCheckedOut === true){
      this._isCheckedOut = false;
    }
  }

  getAverageRating(){
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum / this._ratings.length;
  }

  addRating(val) {
    if(val >= 1 && val <= 5){
      this._ratings.push(val);
    } else{
      console.log(`Invalid rating. Please add a number between 1 and 5.`);
    }
  }
}

class Book extends Media {
  constructor(auth, title, pages, genre){
    super(title, genre);
    this._author = auth;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(dir, title, runtime, genre){
    super(title, genre);
    this._director = dir;
    this._runtime = runtime;
    this._cast = [];
  }

    get director(){
      return this._director
    }

    get runtime(){
      return this._runtime;
    }

    addCast(val){
      this._cast.push(val);
    }
}

class CD extends Media {
  constructor(artist, title, genre){
    super(title, genre);
    this._artist = artist;
    this._trackList = [];
  }

  get artist(){
    return this._artist;
  }

  get tracks(){
    return this._trackList;
  }

  addTracks(val){
    if(typeof val === "string"){
      this._trackList.push(val);
    } else {
      console.log(`Can't add this track`);
    }
  }

  shuffle(){
    if(this._trackList == ![]){
      console.log(`No tracks listed. Please addTracks().`);
    } else {
      let songs = this._trackList;
      for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
      }
      console.log(songs);
    }
  }
}

const crackTheSkye = new CD('Mastodon', 'Crack The Skye', 'metal');

crackTheSkye.addTracks('Oblivion');
crackTheSkye.addTracks('Divinations');
crackTheSkye.addTracks('Quintessence'); 
crackTheSkye.addTracks('The Czar'); 
crackTheSkye.addTracks('Ghost of Karelia'); crackTheSkye.addTracks('Crack the Skye'); 
crackTheSkye.addTracks('The Last Baron');
// console.log(crackTheSkye);
//crackTheSkye.shuffle();

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything',544, 'Non-Fiction');

//historyOfEverything.toggleCheckoutStatus();
//historyOfEverything.addRating(4);
//historyOfEverything.addRating(5);
//historyOfEverything.addRating(5);
// console.log(historyOfEverything.getAverageRating());
// console.log(historyOfEverything);

const speed = new Movie('Jan de Bont', 'Speed', 116, 'Action');

// speed.toggleCheckoutStatus();
// console.log(speed);
// speed.addRating('okay');
// speed.addRating(1);
// speed.addRating(5);
// speed.getAverageRating();
// console.log(speed.getAverageRating());

catalog.push(crackTheSkye);
catalog.push(historyOfEverything);
catalog.push(speed);

console.log(catalog.data);


