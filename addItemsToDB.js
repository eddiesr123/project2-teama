const axios = require('axios');
var fs = require('fs');

// create user
const makeUser = async (body) => {
    await axios.post('http://localhost:8080/users/signup', body);
}
const body = { "email": "warehouse@evil.com", "password": "pass" };
makeUser(body);

/* add a few items to database */

// get a list of image files
var files = fs.readdirSync('./src/images/alphas');
console.log(files);

// for each image file, create an object with the data for that item
const make = async (files) => {
    for (let file of files) {
        if (!file.includes('.png')) continue;
        let myItem = {
            "name": "",
            "price": null,
            "imgPath": "./src/images/alphas/",
            "thumbnailPath":"./src/images/thumbnails/",
            "clothingType": null,
            "user": null
        }
        myItem.imgPath += file;
        myItem.thumbnailPath += file;
        myItem.name = (file.substring(0, file.length - 4)).split('-').join(' ');

        if (file.includes('suit')) {
            myItem.clothingType = 'suit'
            myItem.price = 80.00
        }
        if (file.includes('mask')) {
            myItem.clothingType = 'mask'
            myItem.price = 20.00
        }
        if (file.includes('gloves')) {
            myItem.clothingType = 'gloves'
            myItem.price = 300.00
        }
        console.log(myItem);
        await axios.post('http://localhost:8080/items/', myItem)
    }
}

make(files);
// send a post request to add that item to the database

// send a few get requests to make sure that the items were added