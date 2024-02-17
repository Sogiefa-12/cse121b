/* W05: Programming Tasks */
/* Declare and initialize global variables */
let templeList;
const templesElement = document.getElementById('temples');

/* Async getTemples Function using fetch() */
const getTemples = async (
) => {
    const templeDataUrl = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';

    try {
        const response = await fetch(templeDataUrl);
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};

/* Async displayTemples function */
async function displayTemples(temples) {
    templesElement.innerHTML = '';

    temples.forEach(temple => {
        const articleElement = document.createElement('article');
        const headingElement = document.createElement('h3');
        const imageElement = document.createElement('img');

        headingElement.textContent = temple.templeName;
        imageElement.setAttribute('src', temple.imageUrl);
        imageElement.setAttribute('alt', temple.location);

        articleElement.appendChild(headingElement);
        articleElement.appendChild(imageElement);
        templesElement.appendChild(articleElement);
    });
};

/* reset Function */
function reset(
) {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
function filterTemples(temples) {
    reset();

    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
            break;

        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
            break;

        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case 'all':
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => {
    filterTemples(templeList);
});
