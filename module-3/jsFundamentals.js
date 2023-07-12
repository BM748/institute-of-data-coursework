//Question 1: What are the results of these expressions? (answer first, then use console.log() to check)//
"" + 1 + 0
"" - 1 + 0
true + false
!true
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
" -9 " + 5
null + 1
undefined + 1
undefined == null
undefined === null
" \t \n" - 2
//(2)"" + 1 + 0= 10//
//(3)"" - 1 + 0= -1//
//(4)true + false= 1//
//(5)!true= false//
//(6)6 / "3" = 2//
//(7)"2"*"3"= 6//
//(8)4 + 5 +"px"= 9px
//(9) "$" + 4 + 5 = $45
//(10) "4" - 2 = 4 
//(11)4px - 2 = NaN// 
//(12)"-9" + 5 = -14//
//(13) null + 1 = 1//
//(14)underfined + 1 = Nan//
//(15)underfined == null = true//
//(16) underfined === null//
//(17) "/t /n" - 2 = -2//

// Question 2:Which of the below are not giving the right answer? Why are they not correct? How can we fix them?//
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four
// most of them won't work because the numbers are strings, not numbers. They need to take off the parenthis of the numbers in order to convert the strings to numbers. the wrong answear would be "let lessThan2 = thirty < four" because thrity is greater then four.

// Question 3:Which of the following console.log messages will print? Why?//
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')
// line 51 will print because "0" is string and not  number so it will print. line 53 and 54 are both will print because they both have non zero numbers//

// Question 4: Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = 5, b = 12;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;
console.log(result)
//the "+=" is used to link strings or add numbers and assign the results to the left//

//Question 5:Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.//
const getGreeting = (name) => {
    return 'Hello ' + name + '!';
  };  
  console.log(getGreeting('Joey'));

  //Question 6:a) Complete the inigo object by adding a lastName property and including it in thegreeting. b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.c) Update getCatchPhrase to use arrow function syntax and a conditional operator.//
const westley = {
name: 'Westley',
numFingers: 5
}
const rugen = {
name: 'Count Rugen',
numFingers: 6
}
const inigo = {
firstName: 'Inigo',
greeting(person) {
let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
console.log(greeting + this.getCatchPhrase(person));
},
getCatchPhrase: (person) => {
    return (person.numFingers === 6) ? 
"I do not mean to pry, but you don't by any chance happen to have six fingers on your right hand?":
'Nice to meet you'
} 
};

inigo.greeting(westley);
inigo.greeting(rugen);

//Question 7 The following object represents a basketball game and keeps track of the score as the game progresses. a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works b) Add a new method to print the full time final score c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages d) Test your object by chaining all the method calls together in different combinations.//

const basketballGame = {
    score: 0,
    freeThrow() {
      this.score++;
      return this;
    },
    basket() {
      this.score += 2;
      return this;
    },
    threePointer() {
      this.score += 3;
      return this;
    },
    halfTime() {
      console.log('Halftime score is ' + this.score);
      return this;
    },
    fullTime() {
      console.log('Full-Time score is ' + this.score);
      return this;
    },
    foul() {
      this.fouls++;
      return this;
    }
  };
  
  basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().foul().fullTime();
  //Question 8:The object below represents a single city. a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.b) Create a new object for a different city with different properties and call your function again with the new object.//

  function printObjectProperties(obj) {
    for (let prop in obj) {
      console.log(`${prop}: ${obj[prop]}`);
    }
  }
  
  const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
  };
  
  const london = {
    name: 'London',
    population: 9_304_016,
    country: 'United Kingdom',
    founded: '43 AD',
    timezone: 'GMT'
  };
  
  printObjectProperties(london);
  printObjectProperties(sydney);

  //Question 9 Use the following variables to understand how JavaScript stores objects by reference. a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift) b) Create a new dog2 variable equal to dog1 and give it a new value c) Create a new cat2 variable equal to cat1 and change its name property d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why? e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent//

  let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
  let dog1 = 'Bingo';
  let cat1 = { name: 'Fluffy', breed: 'Siberian' };
  
  let moreSports = teamSports.slice()
  moreSports.push('Basketball')
  moreSports.unshift('Tennis')
  let dog2 = dog1;
  dog2 = 'Max';
  let cat2={...cat1};
  cat2.name = 'Whiskers';

  console.log(teamSports);
  console.log(dog1);
  console.log(cat1);