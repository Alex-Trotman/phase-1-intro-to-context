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

    return employeeRecord;
}

function createEmployeeRecords(employeeDataArray){
    const employeeRecords = [];

    for (let i = 0; i < employeeDataArray.length; i++){
        const employeeData = employeeDataArray[i];
        const employeeRecord = createEmployeeRecord(employeeData);
        employeeRecords.push(employeeRecord);
    }

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

    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, ){

}