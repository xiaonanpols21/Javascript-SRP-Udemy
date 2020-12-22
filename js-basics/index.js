// -- Deel 1: Getting started
// console.log('Hello world'); 

// -- Start: Deel 2, Variables
// let name = 'Mosh';
// console.log(name);

// let firstName;
// let FirstName;

// let firstName = 'Xiao Nan';
// let FirstName = 'Pols';

// Camel notation
// End: Deel 2, Variables

// --- Start Deel 2, Consistend
// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);
// End Deel 2, Consistend

// --- Start Deel 2, primitive types
// let name = 'Mosh'; // String literal
// let age = 30; // Number literal
// let isApproved = true; // Boolean literal
// let = firstName = undefined;
// let selectedColor = null;
// End Deel 2, primitive types

// --- Start Deel 2, Objects
// let name = 'Mosh';
// let age = '30';

// let person = { // Object litteral
//     name: 'Mosh',
//     age: 30
// };

// Dot notation
// person.name = 'John';

// Bracket notation
// let selection = 'name';
// person[selection] = 'Mary';

// console.log(person.name);
// End Deel 2, Objects

// --- Start Deel 2, Arrays
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log (selectedColors.length);
// End Deel 2, Arrays

// --- Start Deel 2, Functions
// Performing a task
// function greet (name, lastName) {
//     console.log ('Hello ' + name + '' + lastName);
// }

// Calculating a value
// function square(number) {
//     return number * number;
// }

// greet('John', 'Smith');

// console.log(square (2));
// End Deel 2, Functions

// --- Start Deel 3, Asignment
// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)
// console.log(x++);
// console.log(x);

// Decrement (--)
// console.log (--x);
// End Deel 3, Asignment

// --- Start Deel 3, Comparison
// let x = 10;

// x = x + 5;
// x += 5;
// x = x * 3;
// x *= 3;

// Relational
// let x = 1;
// console.log (x > 0);
// console.log (x >= 1);
// console.log (x < 1);
// console.log (x <= 1);

// Equality
// console.log (x === 1);
// console.log (x !== 1);
// End Deel 3, Comparison

// --- Start Deel 3, Equality
// Strict equality (Type + value)
// console.log(1 === 1);
// console.log('1' === 1);

// Lose equality (Value)
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);
// End Deel 3, Equality

// --- Start Deel 3, Ternary
// let points = 110;
// let type = points > 100 ? 'gold' : 'silder';

// console.log(type);
// End Deel 3, Ternary

// --- Start Deel 3, Logical
// Logical and (&&)
// Returns true if both perands are true

// console.log(false && true);

// Logical or (||)
// Returns true if one of the perands is true
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible', eligibleForLoan);

//Not (!)
// let applicationRefused = !eligibleForLoan;
// console.log ('Application Refused', applicationRefused)

// Falsy (false)
// Anything that isn't falsy, is truthy

// let userColor = undefined;
// let defautlColor = 'blue';
// let currentColor = userColor || defautlColor;

// console.log(currentColor);
// Start Deel 3, Logical

// --- Start Deel 3, Precedence
// let x = (2 + 3) * 4;

// console.log(x)
// End Deel 3, Precedence

// --- Start Deel 3, Swap
// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);
// End Deel 3, Swap

// --- Start Deel 4, If else
// Hour
// 6am - 12pm = condition. Good morning = statement
// let hour = 13;
// if (hour >= 6 && hour < 12) 
//     console.log('Good morning');

// else if (hour >= 12 && hour < 18) 
//     console.log('Good afternoon');


// else if (hour >= 18 && hour < 24) {
//     console.log('Good evening');
// }

// else 
//     console.log('Good evening')
// End Deel 4, If else

// --- Start Deel 4, Switch
// let role = 'guest';

// switch (role ) {
//     case 'guest':
//         console.log('Guest user');
//         break;
    
//     case 'moderator':
//         console.log('Moderator user');
//         break;
    
//     default: 
//         console.log('Unknown user');
// }

// if (role === 'guest') console.log('Guest ');
// else if (role === 'moderator') console.log('Moderator');
// else console.log('Unknown User');
// End Deel 4, Switch

// --- Start Deel 4, Loops
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');

// for (let i = 5; i >= 1; i--) {
//     console.log('Hello world', i);
//     if (i % 2 !== 0) console.log(i);
// }

// let i = 0;
// while (i <== 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// do while
//  let i = 9;
//  do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
//  } while (i <= 5);
// End Deel 4, Looops

// --- Start Deel 4, How to crash your pc
// let i = 0;
// while (i <5) {
//     console.log(i);
// i++;
// }

// while (true) {

// }

// let x = 0;

// do {
// xx++;
// } while (x < 5);

// for (let i = 0; i < 10;)
// End Deel 4, How to crash your pc

// --- Start Deel 4, Loops
// for in loop
// const person = {
//     name: 'Mosh',
//     age: 30
// };

// for (let key in person)
//     console.log(key, person[key]);

// dot notation
// person.name

// bracket notation
// person['name']
// for (let index in colors)
//     console.log(index, colors[index]);

// for of
// const colors = ['red', 'green', 'blue'];
// for (let color of colors)
//     console.log(color);

// let i = 0;
// while (i <= 10) {
// if (i === 5) break;
//     if (i % 2 === 0) {
//         i++;
//         continue; 
//     }

//     console.log(i);
//     i++;
// }
// End Deel 4, Loops

//-- up, // check

// --- Start Deel 4, Exercise max of 2 numbers
// let number =max(5,10 );
// console.log(number);
// function max(a, b) {
// if (a > b) return a;
// return b;

//     return (a > b) ? a : b;
// }
// End Deel 4, Exercise max of 2 numbers

// --- Start Deel 4, Exercise landscape
    // console.log(isLandscape(300, 600));

    // function isLandscape(width, height) {
    //     // if (width > height) return true;
    //     // return false;

    //     return (width > height); 
    // }
// End Deel 4, Exercise landscape

// --- Start Deel 4, buzz
// Deze exercise werkt als hem maak in speciaal fizzbuzz js doc.
// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//     return NaN;

//     if ((input % 3 === 0 && (input % 5 === 0))
//     return 'FizzBuzz';

//     if (input % 3 === 0)
//     return 'Fizz';

//     if (inout % 5 === 0 )
//     return 'Buzz';

//     return input;
// }
// End Deel 4, Exercise buzz

// --- Start Deel 4, Exercise speed
// Deze code kan niet gemaakt worden omdat hij niet in de gedownloadde bronnen staat.

// --- Start Deel 4, Exercise numbers
// showNumbers(10);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   }

//     for (let i = 0; i <= limit; i ++) {
//         // if (i % 2 === 0) console.log(i, 'EVEN');
//         // else console.log()(i, 'ODD');

//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//         console.log(i, message); 
//     }
// }
// End Deel 4, Exercise numbers

// --- Start Deel 4, Exercise Count truthy
// const isActive = true;
// const name = 'Mosh';
// if (name) console.log('Hello'); //Truthy value (true)
// const array = [1, 2, 3];
// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0; 
//   for (let value of array) 
//     if (value)
//       count++;
//   return count; 
// }
// End Deel 4, Exercise Count truthy

// --- Start Deel 4, Exercise String properties
// const movie = { 
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
//   };
  
//   showProperties(movie);
  
//   function showProperties(obj) {
//     for (let key in obj) {
//     // console.log(key);
//     if (typeof obj[key] === 'string')
//     console.log(key, obj[key]);
//     }
//   }
// End Deel 4, Exercise String properties

// --- Start Deel 4, Exercise Multiples
// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//       sum += i;

//   return sum; 
// }
// End Deel 4, Exercise Multiples

// --- Start Deel 4, Exercise Grade
// const marks = [80, 80, 50]

// console.log(calculateGrade(marks));

// function calculateGrade(marks) { 
//     const average = calculateAverage(marks);

//     if (average <60) return 'F';
//     if (average <70) return 'D';
//     if (average <80) return 'C';
//     if (average <90) return 'B';
//     return 'A';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array)
//         sum += value;
//     return sum / array.length;
// }
// End 4, Exercise Grade

// --- Start Deel 4, Exercise Stars
// showStars(5);

// function showStars(rows) { 
//   for (let row = 1; row <= rows; row++) {
//     let pattern = ''; 
//     for (let i = 0; i < row; i++)
//       pattern += '*';
//     console.log(pattern);
//   }
// }
// End Deel 4, Exercise Stars

// --- Start Deel 4, Prime numbers
// showPrimes(20);

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number ++) 
//         if (isPrime(number)) console.log(number);
// }
  
// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++)
//       if (number % factor === 0)
//         return false; 
    
//     return true; 
// }
// End Deel 4, Prime numbers

// --- Start Deel 5, Circles
// let radius = 1;
// let x = 1;
// let y = 1;

// const circle2 = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() { 
//         console.log('draw');
//     }
// }; 

// function: draw() {}
// function: move () {}

// circle.draw();

// function createCircle(radius) {
//     return  {
//         radius,
//          draw: function (){
//             console.log('draw');
//          }
//     }; 
// }

// const circle1 = createCircle (1);

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const Circle1 = new Function ('radius', `
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// `);

// const circle = new Circle1(1);

// const another = new Circle(1);

// contst myCircle = createCircle(1);

// const circle = {
//     radius: 1
// };

// circle.color = 'yellow';
// circle.draw = function () {}

// delete circle.color;
// delete circle.draw;
  
// console.log(circle);

// let x = {};

// let x = { value: 10};
// let y = x;

// x.value = 20;

// let obj = { value:10};
// function increase(obj) {
//      obj.value++;
// }

// increase(obj);
// console.log(obj);

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// const another = {};

// for (let key in circle)
//     another [key] = circle[key];

// another['radius'] = circle['radius'];

// const another = Object.assign({}, circle);
// const another = { ...circle};

// console.log(another);

// for (let key in circle)
//     console.log(key, circle[key]);

// for (let key of Object.keys(circle))
//     console.log(key);

//  for (let entry of Object.entries(circle))
//     console.log(entry);

// function Object() {}
// const x = {value: 1}; 
// const x new Object (); 

// if ('color' in circle) console.log('yes');

// let circle = {};
// console.log(circle);
// End Deel 5, Circles

// --- Start Deel 5, Messages
// const message = 
// 'This is my\n' +  
// '\' first\' message';

// const another = new String('hi');

// const name = 'John';
// const message = 'hi' + name + ',\n';

// const another = 
// `Hi ${name},
// 'first' message`; 
// End Deel 5, Messages

// --- Start Deel 5, Date
// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const datr2 = new Date (2018, 4, 11, 9);

// now.setFullYear(2017);
// End Deel 5, Date

// --- Start Deel 5, Exercise address
// let address1 = new Address ('a', 'b', 'c');
// let address2 = new Address ('a', 'b', 'c');
// let address3 = address1;

// console.log( areEqual(address1, address2));
// console.log( areSame(address1, address2));
// console.log( areSame(address1, address3));

// console.log(address);

// function createAddress(street, city, zipCode) {
//     return {
//         street, 
//         city,
//         zipCode
//     };
// }

// function showAddress(address) {
//     for (let key in address )
//         console.log(key, address[key]);
// }

// showAddress(address);

// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// Ik heb hier een fout gemaakt, maar ik kan niet zien wat er fout is
// funtion areEqual(address1, addres2) {
//     return address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode;
// }

// funtion areSame(address1, address2) {
//     terugn address1 === address2;
// }
// End Deel 5, Exercise address

// --- Start Deel 5, Exercise views
// let post = new Post('a', 'b', 'c');

// console.log(post);

// console.log(post);

// function Post (title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }

// End Deel 5, Exercise views

// --- Start Deel 5, Exercise price
// let priceRanges = [
//     {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10}
//     {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20}
//     {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
// ];

// let restaurants = [
//     {averagePerPerson: 5 }
// ] 
// End Deel 5, Exercise price

// --- Start Deel 6, Adding elements
// Hier kreeg ik niet dezelfde resultaten als Mosh. Ook al kreeg ik geen error.
// const numbers = [3, 4];
// numbers.push(5, 6);

// numbers.unshift(1, 2);
// numbers.slice(2, 0, 'a', 'b');
// console.log(numbers);
// End Deel 6, Adding elements

// --- Start Deel 6, Finding elements
// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf(1, 2)); 
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1)!== -1)
// console.log(numbers.includes(1));
// End Deel 6, Finding elements

// --- Start Deel 6, Arrow function
// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'},
// ];

// console.log( courses.includes({ id: 1, name: 'a'}));

// const course = courses.findIndex(course => course.name === 'a';);

// console.log(course);
// End Deel 6, Arrow function

// --- Start Deel 6, removing, empthy
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);
// const first = numbers.shift();
// console.log(first);
// numbers.splice(2, 2);
// console.log(numbers);

// let numbers = [1, 2, 3, 4]; 
// let another = numbers;
// numbers = [];
// numbers.length = 0;
// numbers.splice(0, numbers.length);
// while (numbers.length > 0)
//     numbers.pop();
// console.log(numbers);
// console.log(another);
// End Deel 6, removing, empthy

// --- Start Deel 6, array
// const first = [1, 2, 3];
// const second = [4, 5, 6 ];

// const combined = first.concat (second);
// const combined = [...first, 'a', ...second, 'b'];
// const copy = combined.slice(2 );

// cosnt copy = [...combined];

// for (let number of numbers)
//     console.log(number);

// numbers.forEach((number, index) => console.log(index, number));

// const joined = numbers.join(',');
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split('');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

// numbers.sort();
// console.log(numbers);
// numbers.reverse ();
// console.log(numbers); 

// const courses = [
//      {id: 1, name: 'Node.js'}, 
//      {id: 2, name: 'JavaScript'},
// ];

// courses.sort (function (a, b) {
//     const nameA = a.name.toLowerCase  ();
//     const nameB = b.name.toLowerCase ();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0; 
// }); 
// console.log (courses);

// const atLeasteOnePosotive = numbers.some(function (value) {
//     return value >= 0;
// });

// console.log(atLeasteOnePosotive);
// const numbers = [1, -1,  2, 3];

// const items  = numbers
// .filter (n => n >= 0)
// .map(n => ({ value: n}))
// .filter(obj => obj.value > 1)
// .map(obj => obj.value); 

// const items = filtered.map(n => ({ value: n}));
// const html = '<ul>' + items.join('') + '</ul>';

// console.log(items);

// const numbers = [1, -1,  2, 3];
// const sum = numbers.reduce (
//     (accumulator, currentValue) => accumulator + currentValue
// );

// let sum = 0;
// for (let n of numbers)
//     sum += n;

// console.log(sum);
// End Deel 6, array