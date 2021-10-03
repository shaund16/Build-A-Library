class Media {
  constructor(title, isCheckedOut, ratings) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

//getters
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

//setters
  set isCheckedOut(value) {
    return this._isCheckedOut = value;
  }

//methods
toggleCheckOutStatus() {
 return (!this._isCheckedOut) ? true : false;
}

getAverageRating() {
  return this._ratings.reduce((a, b) => a + b, 0) / this._ratings.length
}

addRating(rating) {
  return this._ratings.push(rating);
}
}

class Book extends Media {
  constructor(author, title, pages) {
  super(author, title, pages)
  this._author = author;
  this._title = title;
  this._pages = pages;
  }

  get author() {
    return this._author;
  }
  
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title) 
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._director;
  }
}

let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

console.log(historyOfEverything.toggleCheckOutStatus())
console.log(historyOfEverything.isCheckedOut)
console.log(historyOfEverything.addRating(4))
console.log(historyOfEverything.addRating(5))
console.log(historyOfEverything.addRating(5))
console.log(historyOfEverything.getAverageRating())


let speed = new Movie('Jan de Bont', 'Speed', 116)

console.log(speed.toggleCheckOutStatus())
console.log(speed.isCheckedOut)
console.log(speed.addRating(1))
console.log(speed.addRating(1))
console.log(speed.addRating(5))
console.log(speed.getAverageRating())