/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Justina Eguare',
  
    photo: 'images/justina.JPG',

    favoriteFoods: ['Jollof Rice',
                'Sharwama',
                'Crispy chicken',
                'Noodles with beef Suya'],

    hobbies: ['Hiking', 
            'Playing Mobile Games', 
            'Watching Movies', 
            'Listening to music',
            'Singing'],

    placesLived: [],


};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'Benin City, Edo',
    length: '18 years'
});

myProfile.placesLived.push({
    place: 'Adikpo London, Benue',
    length: '1 year'   
});

myProfile.placesLived.push({
    place: 'Lekki, Lagos',
    length: '8 years'
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
  });

