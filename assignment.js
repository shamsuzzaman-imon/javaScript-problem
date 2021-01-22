



// All javaScript problem solution here


// 1 kilometerToMeter function start here  

function kilometerToMeter(kilometer) {
    let meter = 1000 * kilometer;
    return meter;
}

// 2 budget calculator function here 

function budgetCalculator(watch, phone, laptop) {
    let perWatch = watch;
    let perPhone = phone;
    let perLaptop = laptop;
    const totalBudget = perWatch + perPhone + perLaptop;

    return totalBudget;
}


// 3 hotel cost function here 


function hotelCost(days) {
    let cost = 0;
    if (days <= 10) {
        cost = days * 100;

    }
    else if (days <= 20) {
        let firstPart = 10 * 100;
        let remaining = days - 10;
        let secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        let firstPart = 10 * 100;
        let secondPart = 10 * 80;
        let remaining = days - 20;
        let thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}


// 4 mega friend function here 


function megaFriend(friendsName) {
    let max = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        let element = friendsName[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

// Complete this project 