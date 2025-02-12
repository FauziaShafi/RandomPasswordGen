console.log("JS is working");
let passwordBox = document.getElementById("password");

let lowercase ="abcdefghijklmnopqrstuvwxyz";
let uppercase = lowercase.toUpperCase();
let special = "/[!@#$%^&*()_+\-=\[\]{};:";
let number = "0123456789";

let allChar = lowercase + uppercase + special + number;
let length = 10;

function generatePassword() {
    let password = "";
     password += lowercase[Math.floor(Math.random() * lowercase.length)];
     password += uppercase[Math.floor(Math.random() * uppercase.length)];
     password += number[Math.floor(Math.random() * number.length)];
     password += special[Math.floor(Math.random() * special.length)];
     console.log(password);

     while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];   
     }

     passwordBox.value = password;
}

function copyPassword(){
   passwordBox.select();
   document.execCommand("copy");
}