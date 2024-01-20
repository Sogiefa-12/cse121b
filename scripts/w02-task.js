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
nameElement.innerHTML = `<strong>${fullName}</strong>`;




/* Step 5 - Array */


let favoriteFood = ["Fried Rice and Chicken", "VegetableSoup and Eba"];

foodElement.innerHTML = favoriteFood;




//adding the value stored to the favorite food array
/*
favoriteFood.forEach((item) => {
let li =
    document.createElement("li");
    li.innerText = item;
    foodElement.appendChild(li);
    addfav = "Beans and Plantain";
    favoriteFood.push(addfav);``

});

// creating another variable to hold a single favorite food item
*/
var addFavorite = "Beans Plantain";
favoriteFood.push(addFavorite);
foodElement.innerHTML += `<br>${favoriteFood}`;
// removing the first element using the shift method;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
// removing the last element using the pop method;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`; 