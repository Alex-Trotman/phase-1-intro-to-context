// Your code here
function createEmployeeRecord(array){
    const employeeRecord = {};

    // Assign values to the fields
    employeeRecord.firstName = array[0];
    employeeRecord.familyName = array[1];
    employeeRecord.title = array[2];
    employeeRecord.payPerHour = array[3];

    // Initialize timeInEvents and timeOutEvents as empty arrays
    employeeRecord.timeInEvents = [];
    employeeRecord.timeOutEvents = [];

    // console.log("createEmployeeRecord Function:", employeeRecord)
    return employeeRecord;
}

function createEmployeeRecords(employeeDataArray){
    const employeeRecords = [];

    for (let i = 0; i < employeeDataArray.length; i++){
        const employeeData = employeeDataArray[i];
        const employeeRecord = createEmployeeRecord(employeeData);
        employeeRecords.push(employeeRecord);
    }

    // console.log("createEmployeeRecords Function:", employeeRecords)
    return employeeRecords;
}

function createTimeInEvent(employeeRecord, dateTimeString){
    const timeInEvent = {};

    // Sets the type to "TimeIn"
    timeInEvent.type = "TimeIn";

    // Extract the date from the dateTimeString
    const [date, time] = dateTimeString.split(' ');
    timeInEvent.date = date;

    // Extract the hour from the time
    const hour = parseInt(time, 10);
    timeInEvent.hour = hour;

    // Add the time in event to the employee's timeInEvents
    employeeRecord.timeInEvents.push(timeInEvent);

    // console.log("createTimeInEvent Function:", employeeRecord)
    return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateTimeString){
    const timeOutEvent = {};

    timeOutEvent.type = "TimeOut";

    const [date, time] = dateTimeString.split(' ');
    timeOutEvent.date = date;

    const hour = parseInt(time, 10);
    timeOutEvent.hour = hour;

    employeeRecord.timeOutEvents.push(timeOutEvent);

    // console.log("createTimeOutEvent Function:", employeeRecord)
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date){
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);

  if (timeInEvent && timeOutEvent) {
    const hoursWorked = timeOutEvent.hour - timeInEvent.hour;
    return hoursWorked / 100;
  } else {
    return 0; 
  }
}

function wagesEarnedOnDate(employeeRecord, date){
  const hoursWorked = hoursWorkedOnDate(employeeRecord, date)
  return (hoursWorked * employeeRecord.payPerHour)
}

function allWagesFor(employeeRecord){
  const dates = employeeRecord.timeInEvents.map(eventObj => eventObj.date)
  
  let totalPay = 0;

  dates.forEach(date => {
    const pay = wagesEarnedOnDate(employeeRecord, date)
    totalPay += pay;
    
  });
  return totalPay;
}

function calculatePayroll(employeeRecords){
  let totalPay = 0;
  employeeRecords.forEach(employeeRecord => {
    const sum = allWagesFor(employeeRecord)
    totalPay += sum;
  })
  return totalPay
}