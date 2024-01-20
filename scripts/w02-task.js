/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName =  "Sarah Imarhenakhue Ogiefa";

let currentYear = 2024;

let profilePicture = "images/my pix.jpg"; 
/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");

let imageElement = document.getElementById("profilePicture");





/* Step 4 - Adding Content */
nameElement.innerHTML = fullName; 

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', fullName);



/* Step 5 - Array */


let favoriteFood = new Array("Rice", "Beans", "Banana");

foodElement.innerHTML = favoriteFood;

foodElement.setAttribute('food',favoriteFood);
