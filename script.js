document.addEventListener("keyup", function(event) {
    let message = event.target.innerHTML; 
    let id = event.target.id;
    let spanId =  id + "-message";
    let targetSpan = document.getElementById(spanId);
    
    function errorMessage(){
        if(id=="first-name" || message.innerHTML==""){
            targetSpan.innerHTML = "* Please submit a valid alphabetical first name";
        }
        if(id=="email"|| message.innerHTML==""){
            targetSpan.innerHTML = "* Please submit a valid email: youremail@website";
        }
        if(id=="password"|| message.innerHTML==""){
            targetSpan.innerHTML = "* Please submit a valid password between 8-16 characters";
        }
        if(id=="last-name"|| message.innerHTML==""){
            targetSpan.innerHTML = "* Please submit a valid alphabetical last name";
        }
        if(id=="phone-number"|| message.innerHTML==""){
            targetSpan.innerHTML = "* Please sumbit a valid phone number 1234567890 no dashes or spaces";
        }
        if(id=="confirm-password"|| message.innerHTML==""){
            targetSpan.innerHTML = "* Passwords do not match";
        }
        
 }


    if(event.target.checkValidity()){
        targetSpan.innerHTML = "";
    }

    else {
        errorMessage();

    }


})