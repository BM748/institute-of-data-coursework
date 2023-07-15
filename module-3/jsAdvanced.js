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