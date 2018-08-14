'use strict';
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var firstAndPike = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookieSales: 6.3,
    totalCookies: 0,
    collectedCookiesPerHour: [],
    collectedNumCustomers: [],
    dailyCustomersPerHour:
        function () {
            for (var i = 0; i < hoursOfOperation.length; i++) {
                var numCustumers = Math.floor(Math.random() * 65) + 23; // returns a random integer from 23 to 65    
                this.collectedNumCustomers.push(numCustumers);
            }

        },
    dailyCookiesSoldperHour:
        function () {
            this.dailyCustomersPerHour();
            for (var i = 0; i < hoursOfOperation.length; i++) {
                var numCookies =Math.round(this.collectedNumCustomers[i] * this.avgCookieSales); // rounding to whole number
                this.collectedCookiesPerHour.push(numCookies);
            }

        },
    collectedTotalCookies:
        function () {
            this.dailyCookiesSoldperHour();
        
            for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
                console.log(this.totalCookies);
                this.totalCookies += this.collectedCookiesPerHour[i];

            }
            return this.totalCookies;
        }
}
firstAndPike.collectedTotalCookies();
console.log(firstAndPike);

// NOW RENDERING OBJECT:

firstAndPike.render = function () {
    // access the <ul> in the dom where we will put data
    var pikeUlEl = document.getElementById('pike')
    //console.log(goldenUlEl);
    //for each value in the array: 
    for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
        //console.log(this.collectedTotalCookies[i]);
        //create the <li> element
        var liEl = document.createElement('li');
        //give the <li> element content
        liEl.textContent = hoursOfOperation[i] +': ' +  this.collectedCookiesPerHour[i] + ' Cookies';
        //append the <li> element to the <ul>
        pikeUlEl.appendChild(liEl);
    }
   
    liEl.textContent = 'Total ' + this.totalCookies + ' Cookies';
    pikeUlEl.appendChild(liEl);
}

firstAndPike.render();



//Starting Second Object Here:


var seaTacAirPort = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCookieSales: 1.2,
    totalCookies: 0,
    collectedCookiesPerHour: [],
    collectedNumCustomers: [],
    dailyCustomersPerHour:
        function () {
            for (var i = 0; i < hoursOfOperation.length; i++) {
                var numCustumers = Math.floor(Math.random() * 24) + 3; // returns a random integer from 3 to 24    
                this.collectedNumCustomers.push(numCustumers);
            }

        },
    dailyCookiesSoldperHour:
        function () {
            this.dailyCustomersPerHour();
            for (var i = 0; i < hoursOfOperation.length; i++) {
                var numCookies =Math.round(this.collectedNumCustomers[i] * this.avgCookieSales); // rounding to whole number
                this.collectedCookiesPerHour.push(numCookies);
            }

        },
    collectedTotalCookies:
        function () {
            this.dailyCookiesSoldperHour();
        
            for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
                console.log(this.totalCookies);
                this.totalCookies += this.collectedCookiesPerHour[i];

            }
            return this.totalCookies;
        }
}
seaTacAirPort.collectedTotalCookies();
console.log(seaTacAirPort);

// NOW RENDERING  TWO OBJECT:

seaTacAirPort.render = function () {
    // access the <ul> in the dom where we will put data
    var airPortUlEl = document.getElementById('airport')
    //console.log(goldenUlEl);
    //for each value in the array: 
    for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
        //console.log(this.collectedTotalCookies[i]);
        //create the <li> element
        var liEl = document.createElement('li');
        //give the <li> element content
        liEl.textContent = hoursOfOperation[i] +': ' +  this.collectedCookiesPerHour[i] + ' Cookies';
        //append the <li> element to the <ul>
        airPortUlEl.appendChild(liEl);
    }
   
    liEl.textContent = 'Total ' + this.totalCookies + ' Cookies';
    airPortUlEl.appendChild(liEl);
}
seaTacAirPort.render();
console.log(seaTacAirPort);




//STARTING OBJECT THREE HERE

var seattleCenter = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookieSales: 3.7,
    totalCookies: 0,
    collectedCookiesPerHour: [],
    collectedNumCustomers: [],
    dailyCustomersPerHour:
        function () {
            for (var i = 0; i < hoursOfOperation.length; i++) {
                var numCustumers = Math.floor(Math.random() * 38) + 11; // returns a random integer from 11 to 38    
                this.collectedNumCustomers.push(numCustumers);
            }

        },
    dailyCookiesSoldperHour:
        function () {
            this.dailyCustomersPerHour();
            for (var i = 0; i < hoursOfOperation.length; i++) {
                var numCookies =Math.round(this.collectedNumCustomers[i] * this.avgCookieSales); // rounding to whole number
                this.collectedCookiesPerHour.push(numCookies);
            }

        },
    collectedTotalCookies:
        function () {
            this.dailyCookiesSoldperHour();
        
            for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
                console.log(this.totalCookies);
                this.totalCookies += this.collectedCookiesPerHour[i];

            }
            return this.totalCookies;
        }
}
seattleCenter.collectedTotalCookies();
console.log(seattleCenter);

// NOW RENDERING  THREE OBJECT:

seattleCenter.render = function () {
    // access the <ul> in the dom where we will put data
    var centerUlEl = document.getElementById('center')
    //console.log(goldenUlEl);
    //for each value in the array: 
    for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
        //console.log(this.collectedTotalCookies[i]);
        //create the <li> element
        var liEl = document.createElement('li');
        //give the <li> element content
        liEl.textContent = hoursOfOperation[i] +': ' +  this.collectedCookiesPerHour[i] + ' Cookies';
        //append the <li> element to the <ul>
        centerUlEl.appendChild(liEl);
    }
   
    liEl.textContent = 'Total ' + this.totalCookies + ' Cookies';
    centerUlEl.appendChild(liEl);
}
seattleCenter.render();
console.log(seattleCenter);


//NOW STARTING OBJECT FOUR

var capitalHill = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCookieSales: 2.3,
    totalCookies: 0,
    collectedCookiesPerHour: [],
    collectedNumCustomers: [],
    dailyCustomersPerHour:
        function () {
            for (var i = 0; i < hoursOfOperation.length; i++) {
                var numCustumers = Math.floor(Math.random() * 38) + 20; // returns a random integer from 20 to 38    
                this.collectedNumCustomers.push(numCustumers);
            }

        },
    dailyCookiesSoldperHour:
        function () {
            this.dailyCustomersPerHour();
            for (var i = 0; i < hoursOfOperation.length; i++) {
                var numCookies =Math.round(this.collectedNumCustomers[i] * this.avgCookieSales); // rounding to whole number
                this.collectedCookiesPerHour.push(numCookies);
            }

        },
    collectedTotalCookies:
        function () {
            this.dailyCookiesSoldperHour();
        
            for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
                console.log(this.totalCookies);
                this.totalCookies += this.collectedCookiesPerHour[i];

            }
            return this.totalCookies;
        }
}
capitalHill.collectedTotalCookies();
console.log(capitalHill);

// NOW RENDERING  FOUR OBJECT:

capitalHill.render = function () {
    // access the <ul> in the dom where we will put data
    var hillUlEl = document.getElementById('hill')
    //console.log(goldenUlEl);
    //for each value in the array: 
    for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
        //console.log(this.collectedTotalCookies[i]);
        //create the <li> element
        var liEl = document.createElement('li');
        //give the <li> element content
        liEl.textContent = hoursOfOperation[i] +': ' +  this.collectedCookiesPerHour[i] + ' Cookies';
        //append the <li> element to the <ul>
        hillUlEl.appendChild(liEl);
    }
   
    liEl.textContent = 'Total ' + this.totalCookies + ' Cookies';
    hillUlEl.appendChild(liEl);
}
capitalHill.render();
console.log(capitalHill);





//STARTING OBJECT FIVE HERE

var alki = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookieSales: 4.6,
    totalCookies: 0,
    collectedCookiesPerHour: [],
    collectedNumCustomers: [],
    dailyCustomersPerHour:
        function () {
            for (var i = 0; i < hoursOfOperation.length; i++) {
                var numCustumers = Math.floor(Math.random() * 38) + 20; // returns a random integer from 2 to 16    
                this.collectedNumCustomers.push(numCustumers);
            }

        },
    dailyCookiesSoldperHour:
        function () {
            this.dailyCustomersPerHour();
            for (var i = 0; i < hoursOfOperation.length; i++) {
                var numCookies =Math.round(this.collectedNumCustomers[i] * this.avgCookieSales); // rounding to whole number
                this.collectedCookiesPerHour.push(numCookies);
            }

        },
    collectedTotalCookies:
        function () {
            this.dailyCookiesSoldperHour();
        
            for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
                console.log(this.totalCookies);
                this.totalCookies += this.collectedCookiesPerHour[i];

            }
            return this.totalCookies;
        }
}
alki.collectedTotalCookies();
console.log(alki);

// NOW RENDERING  FIVE OBJECT:

alki.render = function () {
    // access the <ul> in the dom where we will put data
    var beachUlEl = document.getElementById('beach')
    //console.log(goldenUlEl);
    //for each value in the array: 
    for (var i = 0; i < this.collectedCookiesPerHour.length; i++) {
        //console.log(this.collectedTotalCookies[i]);
        //create the <li> element
        var liEl = document.createElement('li');
        //give the <li> element content
        liEl.textContent = hoursOfOperation[i] +': ' +  this.collectedCookiesPerHour[i] + ' Cookies';
        //append the <li> element to the <ul>
        beachUlEl.appendChild(liEl);
    }
   
    liEl.textContent = 'Total ' + this.totalCookies + ' Cookies';
    beachUlEl.appendChild(liEl);
}
alki.render();
console.log(alki);