/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
// Declaring Fullname 
let fullName = 'Justina Eguare';
// Declaring current year
let currentYear = new Date().getFullYear();
// Declaring the filepath
const profilePicture = 'images/justina.JPG';


/* Step 3 - Element Variables */
// 'name' Id element
const nameElement = document.getElementById('name');
// 'food' Id element
const foodElement = document.getElementById('food');
// 'year' Id selector 
const yearElement = document.querySelector('#year');
// 'image' id element 
const imageElement = document.querySelector('picture')


/* Step 4 - Adding Content */
// Name content
nameElement.innerHTML = `<strong>${fullName}</strong>`;
// Current Year Content
yearElement.textContent = currentYear;





/* Step 5 - Array */






