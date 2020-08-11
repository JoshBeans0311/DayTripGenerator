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




let tripQuestions = ""

tripQuestions = prompt("Would you like to take a day trip? ");



    if (tripQuestions = "Yes") {
        let phrase = "Congratulations, let's plan your trip.";
        console.log(phrase);
    }
    else {
        console.log("Too bad, you are missing out.");
    }



const destination = ["Tampa, FL", "Denver, CO", "Anchorage, AK", "Nashville, TN", "New York City, NY"];

const random = Math.floor(Math.random() * destination.length);
console.log(random, destination[random]);


// let destinationPrompt = ""
// destinationPrompt = prompt("Are you happy with this selection? Type Yes if you are satisfied or No if you would like a different random selection.);



const restaraunt = ["Burger King", "Outback Steakhouse", "Ruth's Chris Steakhouse", "Long John Silvers", "Home Cooked Meal" ];

const random1 = Math.floor(Math.random() * restaraunt.length);
console.log(random1, restaraunt[random1]);


const transportation = ["Bicycle", "Private Jet", "Yacht", "Lamborghini", "Walking"];

const random2 = Math.floor(Math.random() * transportation.length);
console.log(random2, transportation[random2]);



const entertainment = ["Go to the Circus", "Go to a Play", "Walk in the Park", "Go Volunteering", "Go Sightseeing"];

const random3 = Math.floor(Math.random() * entertainment.length);
console.log(random3, entertainment[random3]);


































