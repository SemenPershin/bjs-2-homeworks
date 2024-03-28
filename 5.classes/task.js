/*ЗАДАНИ 1*/

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state (newState) {
        if (newState <= 0) {
            this.newState = 0;
        } else if (newState >= 100) {
            this.newState = 100;
        } else {
            this.newState = newState;
        }
    }

    get state() {
        return this.newState;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

/*ЗАДАНИ 2*/

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book in this.books) {
            if (this.books[book][type] == value) {
                return this.books[book];
            }
         }
         return null;
     }

     giveBookByName(bookName) {
        for (let book in this.books) {
            if (this.books[book].name == bookName) {
                let deleteBook = this.books[book];
                this.books.splice(book - 1, 1);
                return deleteBook;
            }
        }
        return null;
     }
    }

 /* ЗАДАНИЕ 3 */

 class Student {
    constructor (name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (!this.marks.hasOwnProperty(subject)) {
                this.marks = {...this.marks, [subject]: []};
            }
            this.marks[subject].push(mark);
        } else {
            return;
        }
    }

    getAverageBySubject (subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        }

        let sum = this.marks[subject].reduce( (acc, item) => acc + item, 0);
        return sum / this.marks[subject].length;
    }

    getAverage () {
        let numberOfSubject = Object.keys(this.marks).length;
        if (numberOfSubject == 0) {
            return 0;
        }

        let sumOfAverage = 0;
        for (let subject in this.marks) {
            sumOfAverage += this.getAverageBySubject(subject);
        }

        return sumOfAverage / numberOfSubject;
    }
 }

