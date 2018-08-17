'use strict';
// for header function


// array to hold all store locations
var allLocations = [];

// allows access to the table in the DOM
var cookieTable = document.getElementById('cookie');

// constructor to make location object

function Storelocation(name, minCustomers, maxCustomers, avgCookieSales) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSales = avgCookieSales;
  this.collectedNumCustomers = [];
  this.collectedCookiesPerHour = [];
  this.totalCookies = 0;

  allLocations.push(this);

}

// create Storelocation instance
new Storelocation('First And Pike', 23, 65, 6.3);
new Storelocation('SeaTac AirPort', 3, 24, 1.2);
new Storelocation('Seattle Center', 11, 38, 3.7);
new Storelocation('Capital Hill', 20, 38, 2.3);
new Storelocation('Alki', 2, 16, 4.6);

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

Storelocation.prototype.dailyCustomersPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var numCustumers = Math.floor(Math.random() * this.maxCustomers) + this.minCustomers;
    this.collectedNumCustomers.push(numCustumers);
  }

};

// Making functons that caclulate the total cookies

Storelocation.prototype.dailyCookiesSoldperHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var numCookies = Math.round(this.collectedNumCustomers[i] * this.avgCookieSales); // rounding to whole number
    this.collectedCookiesPerHour.push(numCookies);
  }

};


Storelocation.prototype.collectedTotalCookies = function () {
  for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
    this.totalCookies += this.collectedCookiesPerHour[i];

  }
};



//calling all functions to generate and fill the collectedCookiesPerHour array and also the totalCookies per store variable inside the constructor

function callAllfunctions() {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].dailyCustomersPerHour();
    allLocations[i].dailyCookiesSoldperHour();
    allLocations[i].collectedTotalCookies();
  }
}


callAllfunctions();


//creating header function
//creating the blank block to allighned the outputs such that 6am would be above the values for 6am.

function makeHeaderRow() {
  //creating blank cell and calling it store location or giving it textcontent
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = ' Store Locations ';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
  console.log(thEl);

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
}
makeHeaderRow();

//creating the rows for the different store locations and the data to go along with it

Storelocation.prototype.render = function () {
  // create tr
  var trEl = document.createElement('tr');

  // create td
  var tdEl = document.createElement('td');
  // give td content (Name for an individual store location)
  tdEl.textContent = this.name;
  // append the td to the tr
  trEl.appendChild(tdEl);
  for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
    //create td
    tdEl = document.createElement('td');
    //give content
    tdEl.textContent = this.collectedCookiesPerHour[i];
    //append
    trEl.appendChild(tdEl);
  }
  // create td
  tdEl = document.createElement('td');
  // give td content (Total cookies for an individual store)
  tdEl.textContent = this.totalCookies;
  // append the td to the tr
  trEl.appendChild(tdEl);
  // append the tr to the table
  cookieTable.appendChild(trEl);
};

// connecting footer calculation values to DOM?
function footerTotals() {
  //creating footer information
  var dailyLocationTotal = 0;
  var totalCell = [];
  for (var i = 0; i < hours.length; i++) {
    var initial = 0;
    for (var j = 0; j < allLocations.length; j++) {
      initial += allLocations[j].collectedCookiesPerHour[i];

    }
    dailyLocationTotal += initial;
    console.log(dailyLocationTotal);
    totalCell.push(initial);
  }
  totalCell.push(dailyLocationTotal);

  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'footer'); // locking the footer to the bottom of the table?
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl); //try putting at bottom
  console.log(thEl);

  for (var k = 0; k < totalCell.length; k++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = totalCell[k];
    trEl.appendChild(tdEl);
    cookieTable.appendChild(trEl); //added this to keep the re-render removing everything.
  }
}

// creating a function that takes the array that was fed information from the constructor and renders it for every index. this requires a loop because...?

function renderAll() {
  //cookieTable.innerHTML = '';
  for (var i = 0; i < allLocations.length; i++) {

    allLocations[i].render();
  }

}
renderAll();
footerTotals();


// NOW CREATING A SUBMISSION FORM

// Global variables for DOM access
var newStoreLocation = document.getElementById('new-store-location');
//var locationList = document.getElementById('location-list');
//var clearNewLocationList = document.getElementById('clear-new-location-list');



// Event listner for new locations submission form
newStoreLocation.addEventListener('submit', handleCommentSubmit);

function handleCommentSubmit(event) {

  event.preventDefault(); //gotta have it for this purpose. prevents page reload on a 'submit' event

  // Validation to prevent empty form fields

  if (!event.target.storeLocation.value || !event.target.minCustomer.value || !event.target.maxCustomer.value || !event.target.avgCookieSales.value) {
    return alert('Fields cannot be empty!');
  }

  var store = event.target.storeLocation.value;
  var minCus = event.target.minCustomer.value;
  var maxCus = event.target.maxCustomer.value;
  var averagecookie = event.target.avgCookieSales.value;

  var newLocation = new Storelocation(store, minCus, maxCus, averagecookie);

  //This empties the form fields after the data has been grabbed
  event.target.storeLocation.value = null;
  event.target.minCustomer.value = null;
  event.target.maxCustomer.value = null;
  event.target.avgCookieSales.value = null;

  //allLocations.unshift(newLocation); //this add to the end
  cookieTable.innerHTML = '';
  makeHeaderRow();
  newLocation.dailyCustomersPerHour();
  newLocation.dailyCookiesSoldperHour();
  newLocation.collectedTotalCookies();
  //callAllfunctions();
  renderAll();

  //newLocation.render();
  footerTotals(); //calling footer again for new locations

}
// event listner to comment submission form
newStoreLocation.addEventListener('submit', handleCommentSubmit);

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Event listener for the 'Clear all new store location' button
// clearNewLocationList.addEventListener('click', function () {
//locationList.innerHTML = '';
//   console.log('You just cleared the location list!');

// });

//cookieTable.innerHTML = ''; //this clears the whole table and re-renders the new value.