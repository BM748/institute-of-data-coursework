//Question 1 makeCounter below is a decorator function which creates and returns a function that increments a counter. a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1 b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0) c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.//

function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
    return function() {
    currentCount += incrementBy
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    counter1(); 
    counter1();

    let counter2 = makeCounter(5,1);
    counter2(); 
    counter2();

    //Question 2 The following delayMsg function is intended to be used to delay printing a message until some time has passed. a) What order will the four tests below print in? Why? b) Rewrite delayMsg as an arrow function c) Add a fifth test which uses a large delay time (greater than 10 seconds) d) Use clearTimeout to prevent the fifth test from printing at all.//
    
    //delayMSg 4th will print out first beecause it is not delayed, setTimout(delaymsg,0) will come afterwards since it has a setTimeout even thought it is deylayed by 0ms. setTimeout(delayMsg,20,) will come afterwards since it is delayed by 20ms, and the last one will be setTimeout(delaymsg,100) since it is delayed by 100ms.//

    const delayMsg = (msg) => {
        console.log()
    }
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');
setTimeout(delayMsg,15);
const timeoutID = clearTimeout(setTimeout(delayMsg,15));
clearTimeout(timeoutID);


//Question 3'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,similar requests until there's a brief pause, then only executing the most recent of thoserequests. See https://www.techtarget.com/whatis/definition/debouncing It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server requests being initiated if a user clicks repeatedly on a button. Using the following code to test and start with: a) Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call to func should be executed and any others ignored. b) Extend the debounce decorator function to take a second argument ms, which defines the length of the period of inactivity instead of hardcoding to 1000ms c) Extend debounce to allow the original debounced function printMe to take an argument msg which is included in the console.log statement.//

function debounce (func) {
    let timeoutID;


return function (...args){
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() =>{
        func.apply(this, args);
    },100);
};
}

function debounce(func, ms){
    let timeoutID;
    
    return function(...args){
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() =>{
            func.apply (this, args);
        }, ms);
    };
}

function printMe(msg) {
    console.log(`Printing debounced message: ${msg}`);
  }
  
  printMe = debounce(printMe, 1000);
  
  setTimeout(printMe, 100, 'First call');
  setTimeout(printMe, 200, 'Second call');
  setTimeout(printMe, 300, 'Third call');
  

  //Question 4 The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2. e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc. a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second. b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.//
  function printFibonacci() {
    let a = 0;
    let b = 1;

    const intervalID = setInterval(() =>{
        console.log(b)

        const nextNumber = a+b;
        a=b;
        b = nextNumber;
    },1000);
  

  setTimeout(() => {
    clearTimeout(intervalID);
  }, 10000); 
}

printFibonacci();

function printFibonacciTimeouts() {
    let a = 0;
    let b = 1;
    let count = 0;

    function printNext() {
        console.log(b);

        const nextNumber = a + b;
        a = b;
        b = nextNumber;

        count++;
        if (count <10) {
            setTimeout(printNext, 1000);
        }
    }

    setTimeout(printNext, 1000);

}

printFibonacciTimeouts();


function printFibonacciTimeouts(limit) {
    let a = 0;
    let b = 1;
    let count = 0;
  
    function printNext() {
      console.log(b);
  
      const nextNumber = a + b;
      a = b;
      b = nextNumber;
  
      count++;
      if (count < limit) {
        setTimeout(printNext, 1000);
      }
    }
  
    setTimeout(printNext, 1000);
  }
  
  printFibonacciTimeouts(10);

  //Question 5 The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?  a) Fix the setTimeout call by wrapping the call to car.description() inside a  function b) Change the year for the car by creating a clone of the original and overriding it c) Does the delayed description() call use the original values or the new values from b)? Why? d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)//

  

  let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
    
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
    };

    setTimeout(() => {
        car.description();
    }, 200);
//c the delayed description call will use the orginal values because the setTimeout function execeutes the provided function using the global object//
    const updatedCar = {...car, year: 1999};

    setTimeout(car.description.bind(car), 200)

    const updatedCar2 = {...car, make:"Tesla"};


    car.description(); //works
    setTimeout(car.description, 200); //fails

    //Question 6  Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters b) Use apply to improve your solution so that delayed functions can take any number of parameters c) Modify multiply to take 4 parameters and multiply all of them, and test that yourdelay prototype function still works..//

Function.prototype.delay = function(ms) {
    const originalFunction = this;
    return function(...args) {
      setTimeout(() => originalFunction.apply(this, args), ms);
    };
  };
  
  function multiply(a, b) {
    console.log(a * b);
  }
  

  multiply.delay(500)(5, 5); 
  

  Function.prototype.delay = function(ms) {
    const originalFunction = this;
    return function(...args) {
      setTimeout(() => originalFunction.apply(this, args), ms);
    };
  };

  function addNumbers(...numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    console.log(sum);
  }
  
  addNumbers.delay(1000)(1, 2, 3, 4, 5); 
  
  Function.prototype.delay = function(ms) {
    const originalFunction = this;
    return function(...args) {
      setTimeout(() => originalFunction.apply(this, args), ms);
    };
  };

  function multiply(a, b, c, d) {
    console.log(a * b * c * d);
  }
  
  
  multiply.delay(1500)(2, 3, 4, 5); 

     //Question 7 In JavaScript, the toString method is used to convert an object to a string representation. By default, when an object is converted to a String, it returns a string that looks something like [object Object]. However, we can define our own toString methods for custom objects to provide a more meaningful string representation. a) Define a custom toString method for the Person object that will format and print their details b) Test your method by creating 2 different people using the below constructor function and printing them c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohortd) Add a custom toString for Student objects that formats and prints their details. Test with 2 students.//
    function Person (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    Person.prototype.toString = function() {
        return 'Name ${this.name}, Age ${this.age}, Gender ${this.gender}';
    };

    const person1 = new Person('Mary Jane', 26, 'female');
    const person2 = new Person ('Harrison Ford', 80, 'male');

    console.log(person1.toString());
    console.log(person2.toString());


    function Student(name, age, gender, cohort){
        Person.call(this, name, age, gender);
        this.cohort = cohort;
    }

    Student.prototype.toString = function() {
        return 'Name ${this.name}, Age ${this.age}, Gender ${this.gender}, Cohort ${this.cohort}';
    };

    const student1 = new Student('Adam Wrinkle', 53, 'male', '1973');
    const student2 = new Student ('Ashley Adams', 23, 'female', '2022');

    console.log(student1.toString());
    console.log(student2.toString());

    //Question 8 In JavaScript, the toString method is used to convert an object to a string representation. By default, when an object is converted to a String, it returns a string that looks something like [object Object]. However, we can define our own toString methods for custom objects to provide a more meaningful string representation. a) Define a custom toString method for the Person object that will format and print their details b) Test your method by creating 2 different people using the below constructor function and printing them c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohortd) Add a custom toString for Student objects that formats and prints their details. Test with 2 students.//

    class DigitalClock {
        constructor(prefix) {
        this.prefix = prefix;
        }
        display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
        date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
        }
        stop() {
        clearInterval(this.timer);
        }
        start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
        }
        }
        const myClock = new DigitalClock('my clock:')
        myClock.start()
       
        
        class PrecisionClock extends DigitalClock {
            constructor(prefix, precision = 1000) {
                super(prefix);
                this.precision = precision; 
            }
            
            start(){
                this.display();
                this.time = setInterval(() => this.display(), this.precision);
            }
        }

        const myPrecisionClock = new PrecisionClock('my precisision clock:', 500)
        myPrecisionClock.start();

        class AlarmClock extends DigitalClock {
            constructor(prefix, wakeupTime = '07:00') {
                super(prefix);
                this.wakeupTime = wakeupTime;
            }

            display() {
                const date = new Date();
                    const [hours, mins] = [date.getHours(), date.getMinutes()];
                    const currentTime = '${hours}: ${mins}';

                    if (currentTime === this.wakeupTime) {
                        console.log('Wake Up');
                        this.stop();
                    }else {
                        super.display();
                    }
            }
        }
        const myAlarmClock = new AlarmClock('my alarm clock:', '07:00');
        myAlarmClock.start();

//Question 9 We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay after which it should execute. a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) and returns a promise we can use via .then(), as in the starter code below b) If the random delay is even, consider this a successful delay and resolve the promise, and if the random number is odd, consider this a failure and reject it c) Update the testing code to catch rejected promises and print a different message d) Try to update the then and catch messages to include the random delay value//

function randomDelay(){
    const delay = Math.floor(Math.random() * 20000) + 1000;

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (delay % 2 === 0){
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
        });
    }

    randomDelay()
    .then((delay) => console.log ('There appears to have been a delay of ${delay} milliseconds.'))
    .catch((delay) => console.log ('There was an error. Delay was ${delay} milliseconds.'));

    //Question 10 10.Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response. The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful or an error if it failed. (To run this code in a node.js environment, follow the instructions in the comments before the function.) a) Write a new version of this function using async/await b) Test both functions with valid and invalid URLs c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.//

  
    import fetch from 'node-fetch';
    globalThis.fetch = fetch;

    async function fetchURLData(url) {
        try {
            const response = await fetch(url);
            if (response.status ===200) {
                return response.json();
            }else {
                throw new Error('Request failed with status ${response.status}');
            }
        }catch (error) {
            throw new Error('Error fetching data: ${error.messages}')
        }
    }

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then((data) => console.log (data))
.catch((error) => console.error(error.message));

fetchURLData('https://jsonplaceholder.typicode.com/invalid-url')
.then((data) => console.log(data))
.catch((error) => console.error(error.message));

async function fetchMultipleURLData(urls) {
    try {
        const promises = urls.map((url) => fetchURLData(url));
        const responses = await Promise.all(promises);
        return responses;
    }catch (error) {
        throw new Error()
    }
}

  

