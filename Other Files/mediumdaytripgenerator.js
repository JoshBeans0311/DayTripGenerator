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

let continueIteration = true
let destinationAnswer = "Yes"

while(destinationAnswer === false){
    if()
}

const destination = ["Tampa, FL.", "Denver, CO.", "Anchorage, AK.", "Nashville, TN.", "New York City, NY."];

const random = Math.floor(Math.random() * destination.length);

    console.log("You are taking a day trip to " + destination[random])



// // 
// Need to loop instead of prompt everytime, worked but no loop


// // let destinationPrompt1 = ""
// //     destinationPrompt1 = prompt("If you are happy with this destination type Yes, if you would like another destination type No.")

const transportation = ["bicycle", "private jet", "yacht", "lamborghini", "skateboard"];

const random2 = Math.floor(Math.random() * transportation.length);
    console.log("You will take a " + transportation[random2] + " for this trip.");



const restaraunt = ["Burger King.", "Outback Steakhouse.", "Ruth's Chris Steakhouse.", "Long John Silvers.", "Home Cooked Meal." ];

const random1 = Math.floor(Math.random() * restaraunt.length);
    console.log("You will be eating at " + restaraunt[random1]);



const entertainment = ["go to the circus", "go to a play", "walk in the park", "go volunteering", "go sightseeing"];

const random3 = Math.floor(Math.random() * entertainment.length);
console.log("After eating, you will " + entertainment[random3] + " to round out your trip. Hope you enjoy!");


































