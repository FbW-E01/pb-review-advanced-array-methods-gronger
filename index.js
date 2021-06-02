// 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property.

const shops = [
    { name: "Elizabeth Arden", URL: "www.ea.com", number: 24 },
    { name: "Bulk Powders", URL: "www.bp.com", number: 55 },
    { name: "H&M", URL: "http.www.hm.com", number: 99 },
    { name: "Alyssa's Fish Pies", URL: "www.fishpies.com", number: 69 },
    { name: "JBL", URL: "www.jbl.com", number: 67 },
    {name: "Amazon", URL: "http.www.amazon.com", number: 14 },
    {name: "summat nice", URL: "www.fff.com", number: 44 },
    {name: "summat else", URL: "http.www.seee.com", number: 60 },
    {name: "ALDI", URL: "http.www.aldi.com", number: 21 },
    {name: "LIDL", URL: "www.lidl.com", number: 45 },
]

console.log("-----------------------------------------------------------");

// 2. Then based on the array, create a new array that contains just the names.

const shopNames = shops.map(function(shop) {
    return shop.name;
});

console.log(shopNames);

console.log("-----------------------------------------------------------");


// 3. Go through the array and check each individual URL property - if the URL starts with "http", print the URL. Otherwise, print "Invalid URL for" and the value of the name property.

const onlyProperUrl = shops.forEach(function(shop) {
    if (shop.URL.startsWith("http")) {
        console.log(shop.URL) ;
    } else {
        console.log("Invalid URL for " + shop.name);
    }
}
);

//   shop => console.log(shop.URL.startsWith("http"))S

console.log(onlyProperUrl);

// had to use console logs in the .forEach, as with return didnt work...... why ?? :(())


console.log("-----------------------------------------------------------");

// 4. Sort the array based on the "number" property to a random order.

const randomOrder = shops.sort(function(shop) {
    let randomNumber = Math.round(Math.random() * 100);

    return randomNumber;

    // if (shop.number > randomNumber) {
    //     return shop;
    // } else {
    //     return shop;
    // }   
}
);  

console.log("random order.....???", randomOrder);  

const randomOrderTwo = shops.sort((a, b) => a.number - Math.round(Math.random() * 100) - b.number);

console.log("kinda random order???", randomOrderTwo);



console.log("-----------------------------------------------------------");

// 5. Sort the array based on the "number" property, with the lowest number first.


const smallestFirst = shops.sort(function(a, b) { 
    // return a.number - b.number -- this works, but is so short its kinda abstracted
    if (a.number > b.number) {
        return 1;
    } else if (a.number < b.number) {
        return -1;
    } else {
        return 0;
    }
}
);

// above takes 2 at a time ... this is how sort works. then compares them all with a and b (numerous times probs)

// function(shop) {
//     if (shop.number > 0) {
//         return shop;
//     }
// }

console.log("smallest first.:::::..........", smallestFirst);

console.log("-----------------------------------------------------------");

// 6. Sort the array based on the "number" property, with the highest number first.

const largestFirst = shops.sort(function(a, b) {
    if (a.number < b.number) {
        return 1;
    } else if (a.number > b.number) {
        return -1;
    } else {
        return 0;
    }
});
    

    // (a, b) => b.number - a.number
    // );

console.log("largest first.:::::..........", largestFirst);


console.log("-----------------------------------------------------------");

// 7. Based on the array, create a string with all of the names of the people in the array separated by a comma and then replace the last comma with the string `" and "`.


const namesOfShops = shops.map(shop => shop.name).join(", ").replace(", Amazon", " and Amazon");
console.log(namesOfShops);


