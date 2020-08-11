"use strict"


///Prompt about day trip if/else yes/no
///Randomly generate Destination
    ///Offer to re-generate
///Randomly generate Restaraunt
    ///Offer to re-generate
///Randomly generate Transportation
    ///Offer to re-generate
///Randomly generate Entertainment
    ///Offer to re-generate
///Display Trip in Console

// tripQuestions = prompt("Would you like to take a day trip? ");

//     if (tripQuestions = "Yes") {
//         let phrase = "Congratulations, let's plan your trip.";
//         console.log(phrase);
//     }
//     else {
//         console.log("Too bad, you are missing out.");
//     }



const destination = ["Tampa, FL", "Denver, CO", "Anchorage, AK", "Nashville, TN", "New York City, NY"];

const random = Math.floor(Math.random() * destination.length);
console.log(random, destination[random]);









