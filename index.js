const returnFirstTwoDrivers = (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) =>
        { return drivers.slice(0,2); };

const returnLastTwoDrivers = (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) =>
        { return drivers.slice(2); };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
     return function (fareNum) {
        return fareNum * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier (3);

function selectDifferentDrivers (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
};



/* selectDifferentDrivers() — This function takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
 */