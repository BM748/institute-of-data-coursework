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


//Question 3//

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
  

  //Question 4//
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

  //Question 5//

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

    const updatedCar = {...car, year: 1999};

    setTimeout(car.description.bind(car), 200)

    const updatedCar2 = {...car, make:"Tesla"};


    car.description(); //works
    setTimeout(car.description, 200); //fails


    //Question 6//

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

    //Question 7//

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

//Question 9//

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

    //Question 10//

    //a//
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

//b//

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then((data) => console.log (data))
.catch((error) => console.error(error.message));

fetchURLData('https://jsonplaceholder.typicode.com/invalid-url')
.then((data) => console.log(data))
.catch((error) => console.error(error.message));

//c//
async function fetchMultipleURLData(urls) {
    try {
        const promises = urls.map((url) => fetchURLData(url));
        const responses = await Promise.all(promises);
        return responses;
    }catch (error) {
        throw new Error()
    }
}

  

