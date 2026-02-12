document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Stop form submission

    let isValid = true;

    // Department validation
    let department = document.getElementById("department");
    let deptError = document.getElementById("deptError");

    if (department.value === "") {
        deptError.style.display = "block";
        department.classList.add("error-border");
        isValid = false;
    } else {
        deptError.style.display = "none";
        department.classList.remove("error-border");
    }

    // Rating validation using loop
    let ratings = document.getElementsByName("rating");
    let ratingSelected = false;

    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i].checked) {
            ratingSelected = true;
            break;
        }
    }

    if (!ratingSelected) {
        document.getElementById("ratingError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("ratingError").style.display = "none";
    }

    // Facilities validation using loop
    let facilities = document.getElementsByName("facility");
    let facilitySelected = false;

    for (let i = 0; i < facilities.length; i++) {
        if (facilities[i].checked) {
            facilitySelected = true;
            break;
        }
    }

    if (!facilitySelected) {
        document.getElementById("facilityError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("facilityError").style.display = "none";
    }

    // Comments validation
    let comments = document.getElementById("comments");

    if (comments.value.trim() === "") {
        document.getElementById("commentError").style.display = "block";
        comments.classList.add("error-border");
        isValid = false;
    } else {
        document.getElementById("commentError").style.display = "none";
        comments.classList.remove("error-border");
    }

    // Final check
    if (isValid) {
        alert("Feedback submitted successfully!");
        document.getElementById("feedbackForm").reset();
    }

});
