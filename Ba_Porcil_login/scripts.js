function login(){
    var user = document.querySelector("#username");
    var pass = document.querySelector("#password");
    var no = document.querySelector("#failed");
    var logerror = "Log-in Error";
    var logsuccess = "Successful Log-In";
    if (user.value.length == 0 && pass.value.length != 0){ 
        no.innerHTML = "Please enter your username."; 
        console.log(logerror);
    } 
    if (user.value.length != 0 && pass.value.length == 0){ 
        no.innerHTML = "Please enter your password.";
        console.log(logerror);
    }if (user.value.length == 0 && pass.value.length == 0){ 
        no.innerHTML = "Please enter your username and password.";
        console.log(logerror);
    }if (user.value.length != 0 && pass.value.length != 0){ 
        no.innerHTML = ""; 	
        window.location.href = "actual website/index.html";
        console.log(logsuccess);
    }
}