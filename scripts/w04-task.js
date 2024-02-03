/* LESSON 3 - Programming Tasks */



/* Profile Object  */

let myProfile = {};


/* Populate Profile Object with placesLive objects */

myProfile = {
    name: "Sarah Imarhenakhue Ogiefa",
    photo: 'images/my pix.jpg',
    favoriteFoods: ["Rice", "Beans","Yam","Plantain","Pumpkin"],
    hobbies: ["Listening to inspiring music", "playing the keyboard", "reading"],
    placesLived:[]
};

myProfile.placesLived.push(
    {
        
        place: "Abuja Fct",
        lenght: "20 years",
        place1: "Benin City",
        lengthy: "6 years",
        place2: "Lagos",
        lengtho: "5 years"
    
    }
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").textContentL = myProfile.photo;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
    
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
}
);

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    //let dd = documment.createElement("dd");
    //dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    //document.querySelector("#places-lived").appendChild(dd);
}
);
/*
myProfile.placesLived.forEach(place => {
    //let dt = document.createElement("dt");
    //dt.textContent = place.place;
    let dd = documment.createElement("dd");
    dd.textContent = place.length;
    //document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
}
);

*/
for (const place of myProfile.placesLived) {
    const dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    const ddElement = document.createElement('dd');
    ddElement.textContent = place.lenght;

    const placesLivedElement = document.getElementById('places-lived');
    placesLivedElement.appendChild(ddElement);
}

for (const item of myProfile.placesLived) {
    const dtElememt = document.createElement('dt');
    dtElememt.textContent = item.place1;

    const ddElememt = document.createElement('dd');
        
       
    ddElememt.textContent = item.lengthy;

    const placesLivedElement = document.getElementById('places-lived');
    placesLivedElement.appendChild(dtElememt);
    placesLivedElement.appendChild(ddElememt);
}

for (const item of myProfile.placesLived) {
    const dtElememt = document.createElement('dt');
    dtElememt.textContent = item.place2;

    const ddElememt = document.createElement('dd');
        
       
    ddElememt.textContent = item.lengtho;

    const placesLivedElement = document.getElementById('places-lived');
    placesLivedElement.appendChild(dtElememt);
    placesLivedElement.appendChild(ddElememt);
}
