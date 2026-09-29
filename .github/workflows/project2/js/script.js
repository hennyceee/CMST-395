// Get the registration form.
const registrationForm = document.getElementById("registrationForm");

// Get the first and last name fields.
const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");

// Remove the default First Name text when the user selects the field.
firstNameField.addEventListener("focus", function () {
    if (firstNameField.value === "First Name") {
        firstNameField.value = "";
    }
});

// Remove the default Last Name text when the user selects the field.
lastNameField.addEventListener("focus", function () {
    if (lastNameField.value === "Last Name") {
        lastNameField.value = "";
    }
});

// Validate the form when Submit is clicked.
registrationForm.addEventListener("submit", function (event) {

    // Stop submission while the form is checked.
    event.preventDefault();

    // Store all error messages.
    let errors = [];

    // Get the values entered by the user.
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value.trim();

    let areaCode = document.getElementById("areaCode").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();

    let email = document.getElementById("email").value.trim();
    let confirmEmail = document.getElementById("confirmEmail").value.trim();

    let meal = document.querySelector('input[name="meal"]:checked');

    let contactMethods =
        document.querySelectorAll('input[name="contact"]:checked');

    // Validation patterns.
    let namePattern = /^[A-Za-z]+$/;

    // Allows letters AND spaces, so cities such as Fort Worth work.
    let cityPattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

    // Allows letters, numbers, spaces, periods, commas, apostrophes and hyphens.
    let addressPattern = /^[A-Za-z0-9\s.,'-]+$/;

    // ZIP code must be exactly five numbers.
    let zipPattern = /^\d{5}$/;

    // Area code must be exactly three numbers.
    let areaCodePattern = /^\d{3}$/;

    // Phone number must be exactly seven numbers.
    let phonePattern = /^\d{7}$/;

    // Basic e-mail validation.
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate first name.
    if (
        firstName === "" ||
        firstName === "First Name" ||
        !namePattern.test(firstName)
    ) {
        errors.push(
            "Please enter a valid first name using letters only."
        );
    }

    // Validate last name.
    if (
        lastName === "" ||
        lastName === "Last Name" ||
        !namePattern.test(lastName)
    ) {
        errors.push(
            "Please enter a valid last name using letters only."
        );
    }

    // Validate street address.
    if (
        address === "" ||
        !addressPattern.test(address)
    ) {
        errors.push(
            "Please enter a valid street address."
        );
    }

    // Validate city.
    // This accepts cities containing spaces, such as Fort Worth.
    if (
        city === "" ||
        !cityPattern.test(city)
    ) {
        errors.push(
            "Please enter a valid city using letters only."
        );
    }

    // Make sure a state is selected.
    if (state === "") {
        errors.push(
            "Please select a state."
        );
    }

    // Validate ZIP code.
    if (!zipPattern.test(zip)) {
        errors.push(
            "Zip code must contain exactly 5 numbers."
        );
    }

    // Validate area code.
    if (!areaCodePattern.test(areaCode)) {
        errors.push(
            "Area code must contain exactly 3 numbers."
        );
    }

    // Validate phone number.
    if (!phonePattern.test(phoneNumber)) {
        errors.push(
            "Phone number must contain exactly 7 numbers."
        );
    }

    // Validate e-mail.
    if (!emailPattern.test(email)) {
        errors.push(
            "You have entered an invalid e-mail address."
        );
    }

    // Make sure both e-mail addresses match.
    if (email !== confirmEmail) {
        errors.push(
            "The e-mail addresses do not match."
        );
    }

    // Make sure a meal preference was selected.
    if (!meal) {
        errors.push(
            "Please select a meal preference."
        );
    }

    // The assignment requires at least two contact methods.
    if (contactMethods.length < 2) {
        errors.push(
            "Please select at least two contact methods."
        );
    }

    // Find the error display area.
    let errorArea = document.getElementById("errors");

    // Display all errors.
    if (errors.length > 0) {

        errorArea.innerHTML = errors.join("<br>");

    } else {

        // Clear previous errors.
        errorArea.innerHTML = "";

        // Let the user know validation passed.
        alert(
            "Your registration form has been completed successfully."
        );

        // Submit the form after validation passes.
        registrationForm.submit();
    }
});

// Make the Reset button clear the form completely.
registrationForm.addEventListener("reset", function () {

    setTimeout(function () {

        firstNameField.value = "";
        lastNameField.value = "";

        document.getElementById("errors").innerHTML = "";

    }, 0);

});