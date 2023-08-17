
function loadMoment(callback) {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js';
  script.integrity = 'sha512-CryKbMe7sjSCDPl18jtJI5DR5jtkUWxPXWaLCst6QjH8wxDexfRJic2WRmRXmstr2Y8SxDDWuBO6CQC6IE4KTA==';
  script.crossOrigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';
  script.onload = callback;

  document.head.appendChild(script);
}
// 1. Calculate the number of days between your birthdate and the current date
loadMoment(() => {
  const birthdate = moment('2000-01-08');
  const currentDate = moment();
  const daysDifference = currentDate.diff(birthdate, 'days');
  console.log('Number of days between birthdate and current date:', daysDifference);


// 2. Display the number of years, months, and days between your birthdate and current date
const birthdate2 = moment('2000-01-08');
const currentDate2 = moment();
const duration = moment.duration(currentDate.diff(birthdate));

const years = duration.years();
const months = duration.months();
const days = duration.days();

console.log(`${years} years, ${months} months, and ${days} days`);

// 3. Given two dates, display the date closest to the current date
const date1 = moment('2023-07-10');
const date2 = moment('2023-06-25');

const closestDate = moment.min(date1, date2);
console.log('Closest date to the current date:', closestDate.format('YYYY-MM-DD'));

// 4. Given two dates, display whether the first date is before or after the second date
const date3 = moment('2023-07-15');
const date4 = moment('2023-07-25');

if (date3.isBefore(date4)) {
  console.log('Date 3 is before Date 4.');
} else if (date3.isAfter(date4)) {
  console.log('Date 3 is after Date 4.');
} else {
  console.log('Both dates are the same.');
}

// 5. Display the current time in London
const londonTime = moment().tz('Europe/London').format('HH:mm:ss');
console.log('Current time in London:', londonTime);
});