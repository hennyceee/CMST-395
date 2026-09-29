/*
        Your Name: C'Meya Williams
        Last Modified Date: 09/29/2026
        File: event_registration.js
        File Description: This file contains the JavaScript used to validate the event registration form, calculate ticket costs, manage the countdown timer, and complete the ticket purchase.
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/
// Set the amount of time available to complete the purchase to 10 minutes.
var timeLeft = 600;

// Create the countdown timer.
var timer = setInterval(function () {

    // Calculate the number of minutes remaining.
    var minutes = Math.floor(timeLeft / 60);

    // Calculate the number of seconds remaining.
    var seconds = timeLeft % 60;

    // Add a zero before seconds that are less than 10.
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Display the time remaining on the webpage.
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;

    // Decrease the remaining time by one second.
    timeLeft--;

    // Check whether the timer has expired.
    if (timeLeft < 0) {

        // Stop the countdown timer.
        clearInterval(timer);

        // Alert the user that the transaction has expired.
        alert("Your transaction has expired. Please try again.");

        // Reload the current page.
        location.href = location.href;
    }

}, 1000);


// This function calculates the ticket total and validates the number of tickets.
function calculateTotal() {

    // Get the number of tickets entered by the user.
    var numTickets = document.getElementById("numTickets").value;

    // Get the ticket error message area.
    var msgTickets = document.getElementById("msgTickets");

    // Get the ticket input field.
    var ticketField = document.getElementById("numTickets");

    // Get the contact information section.
    var contactInformation = document.getElementById("contactInformation");

    // Check whether the ticket amount is invalid.
    if (
        numTickets === "" ||
        isNaN(numTickets) ||
        numTickets < minTickets ||
        numTickets > maxTickets
    ) {

        // Display an error message.
        msgTickets.innerHTML = "Please enter a number between 1 and 3.";

        // Change the background color to show an error.
        ticketField.style.backgroundColor = "#ffcccc";

        // Reset the total cost.
        document.getElementById("totalCost").value = "$0.00";

        // Hide the contact information section.
        contactInformation.style.display = "none";

    } else {

        // Remove the ticket error message.
        msgTickets.innerHTML = "";

        // Return the ticket field to the normal background color.
        ticketField.style.backgroundColor = "#efefef";

        // Calculate the cost of the tickets.
        var total =
            Number(numTickets) * (costPerTicket + ticketSurcharge);

        // Display the total using a dollar sign and two decimal places.
        document.getElementById("totalCost").value =
            "$" + total.toFixed(2);

        // Show the contact information section.
        contactInformation.style.display = "block";
    }
}


// This function validates the customer information and completes the purchase.
function completePurchase() {

    // Get the name entered by the user.
    var customerName = document.getElementById("name").value.trim();

    // Get the email entered by the user.
    var customerEmail = document.getElementById("email").value.trim();

    // Get the name and email input fields.
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");

    // Get the areas where error messages will be displayed.
    var msgName = document.getElementById("msgname");
    var msgEmail = document.getElementById("msgemail");

    // Create a variable to track whether there are errors.
    var hasErrors = false;

    // Validate the name field.
    if (customerName === "") {

        // Display a name error message.
        msgName.innerHTML = "Please enter your name.";

        // Change the background color to show an error.
        nameField.style.backgroundColor = "#ffcccc";

        // Mark that an error occurred.
        hasErrors = true;

    } else {

        // Remove the name error message.
        msgName.innerHTML = "";

        // Return the field to its normal background color.
        nameField.style.backgroundColor = "#efefef";
    }

    // Validate the email field.
    if (customerEmail === "") {

        // Display an email error message.
        msgEmail.innerHTML = "Please enter your email address.";

        // Change the background color to show an error.
        emailField.style.backgroundColor = "#ffcccc";

        // Mark that an error occurred.
        hasErrors = true;

    } else {

        // Remove the email error message.
        msgEmail.innerHTML = "";

        // Return the field to its normal background color.
        emailField.style.backgroundColor = "#efefef";
    }

    // Complete the purchase only when there are no errors.
    if (hasErrors === false) {

        // Stop the countdown timer.
        clearInterval(timer);

        // Get the total amount of the purchase.
        var totalCost = document.getElementById("totalCost").value;

        // Thank the user and display the purchase total.
        alert(
            "Thank you for your purchase! Your total is " + totalCost + "."
        );
    }
}