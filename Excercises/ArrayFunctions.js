/*Together practice*/
let namesArray = ['Terry', 'John', 'Sandra', 'Lex'];

//task 1. forEach. Print every name

//task 2a. .filter().  Find and print every name that contains 'e' character

//task 2b. .find().  Find and print FIRST that contains 'e' character

let numbersArray = [1, 2, 3, 4, 5, 6];
//task 3. .map().  create a new array with squared numbers

/*SELF-PRACTICE. <10 Minutes */
/*task 1. Return and print a new array that only includes those that are 5 characters or more in length.
 *Hint: use .length method to check the word length
 */
let challengeArray = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping'];
//['family', 'eaten', 'camping'];

/*task 2. Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
 *Hint: (element => element.name or element.age)
 */
let filmVisitors = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 },
];
/*[
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Bob Ziroll', age: 100 }
];
*/

/*task 2b. modify the age of each of the participant who is <18 y.o. to 18 y.o, so they could to the matrix film
 *Hint: (element => element.name or element.age)
 */

/**
 * task 3. Capitalize each of an array of names and return a new array
 */
let namesToBeCapitalized = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

//task 4. Make an array of strings of the names
filmVisitors = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 },
];
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//task 4b. Make an array of strings of the names of the visitors who are > 18
filmVisitors = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 },
];
// ["Angelina Jolie", "Bob Ziroll"]

const mister = { name: 'James', surname: 'Brown' };
mister.name = 'Kate'; //+++
mister = { name: 'Kate', surname: 'Brown' }; //error
