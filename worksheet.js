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

////////////////////////
// KEEP IN
//////////////////////////






let tripQuestions = ""

tripQuestions = prompt("Would you like to take a day trip? ");



    if (tripQuestions = "Yes") {
        let phrase = "Congratulations, let's plan your trip.";
        console.log(phrase);
    }
    else {
        console.log("Too bad, you are missing out.");





// !!!!!!!!!!!!!!!!!     NEED TO FIGURE OUT HOW TO END CODE HERE IF ELSE TRUE      !!!!!!!!!!!!
    }


//////////////////////////////////////////



    let destinationYes = "Yes"

    let askDestination = " ";
    
    while(askDestination != destinationYes){
        

const destination = ["Tampa, FL.", "Denver, CO.", "Anchorage, AK.", "Nashville, TN.", "New York City, NY."];
const random = Math.floor(Math.random() * destination.length);   
    console.log("You are taking a day trip to " + destination[random])


        askDestination = prompt("Will this destination work for you? If so type Yes, type No to try again:");
    
        if (askDestination === destinationYes) {
            console.log("Congratulations, wise choice!");
        
        }
        
        else {
            console.log("Okay, how do you feel about the next location?");
        }
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    let transportationYes = "Yes"

    let askTransportation = " ";
    
    while(askTransportation != transportationYes){


const transportation = ["bicycle", "private jet", "yacht", "lamborghini", "skateboard"];
const random2 = Math.floor(Math.random() * transportation.length);
    console.log("You will take a " + transportation[random2] + " for this trip.");
        

    askTransportation = prompt("Will this transportation work for you? If so type Yes, type No to try again:");
    
    if (askTransportation === transportationYes) {
        console.log("Congratulations, wise choice!");
    
    }
    
    else {
        console.log("Okay, how do you feel about this next type of transportation?");
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    let restarauntYes = "Yes"

    let askRestaraunt = " ";

    while(askRestaraunt != restarauntYes){


const restaraunt = ["Burger King", "Outback Steakhouse", "Ruth's Chris Steakhouse", "Long John Silvers", "Home Cooked Meal" ];
const random1 = Math.floor(Math.random() * restaraunt.length);
    console.log("You will be eating at " + restaraunt[random1]);


    askRestaraunt = prompt("Will this restaraunt work for you? If so type Yes, type No to try again:");
    
    if (askRestaraunt === restarauntYes) {
        console.log("Congratulations, wise choice!");
    
    }
    
    else {
        console.log("Okay, how do you feel about this next restaraunt?");
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    let entertainmentYes = "Yes"

    let askEntertainment = " ";

    while(askEntertainment != entertainmentYes){


const entertainment = ["go to the circus", "go to a play", "walk in the park", "go volunteering", "go sightseeing"];
const random3 = Math.floor(Math.random() * entertainment.length);
    console.log("After eating, you will " + entertainment[random3] + ".");


    askEntertainment = prompt("Does this sound fun to you? If so type Yes, type No to try again:");
    
    if (askEntertainment === entertainmentYes) {
        console.log("Congratulations, wise choice. Enjoy your trip!");
    
    }
    
    else {
        console.log("Okay, how do you feel about this next activity?");
    }
}




