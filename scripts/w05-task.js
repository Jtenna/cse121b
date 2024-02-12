/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const article = document.createElement('article');
      const h3 = document.createElement('h3');
      h3.textContent = temple.templeName;
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.location;
      article.appendChild(h3);
      article.appendChild(img);
      templesElement.appendChild(article);
      // Add article to the DOM or do something else with it
    });
  };
/* async getTemples Function using fetch()*/


/* reset Function */


/* filterTemples Function */


getTemples();

/* Event Listener */
