"use strict";

$(document).ready( () => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    document.getElementById("form-contact").addEventListener("submit", function (event){
        //Validate the user entries
        let formIsValid = true;

        //Validate the name field
        const customerName = document.getElementById("username");
        const username = customerName.value.trim();
        if(username === ""){
            formIsValid = false;
            displayError(customerName, "Please enter your name");
        } else {
            removeError(customerName);
        }

        //Validate the Phone number
        const customerNumber = document.getElementById("phone");
        const phone = customerNumber.value.trim();
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

        if(!phonePattern.test(phone)){
            formIsValid = false;
            displayError(customerNumber,"This field is required. (format: 999-999-9999)");
        }else{
            removeError(customerNumber);
        }

        //Validate the email field
        const customerEmail = document.getElementById("email");
        const email = customerEmai.value.trim();
        if(email === "" || !emailPattern.test(email)) {
            formIsValid = false;
            displayError(customerEmail, "Please enter a valid email address");
        } else {
            removeError(customerEmail);
        }

        //validate the message field
        const customerMessage = document.getElementById("message");
        const message = customerMessage.value.trim();
        if (message === "") {
            formIsValid = false;
            displayError(customerMessage, "Please enter your message");
        }else{
            removeError(customerMessage);
        }


        //If the form is valid, submit it
        if(formIsValid){
            this.onsubmit();
        }//Prevent the form from being submitted.
        event.preventDefault();
    });

// Display an error message for the specified input field
    function displayError(input,message){
        const errorSpan = input.nextElementSibling;
        errorSpan.innerHTML = message;
        errorSpan.style.display = "inline";
        input.classList.add("error");
    }

// Remove the error message for the specified input field
    function removeError(input){
        const errorSpan = input.nextElementSibling;
        errorSpan.innerHTML = "";
        errorSpan.style.display = "none";
        input.classList.remove("error");
    }

});
