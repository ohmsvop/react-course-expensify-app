// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Taipei',
//         temp: 30
//     }
// };

// const { name = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}.`);
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// Array destructuring

const address = ['Road', 'Taipei', 'Taiwan', '111'];

const [street, city, country, zip] = address;

console.log(`You are in ${address[1]}, ${address[2]}.`)
console.log(`You are in ${city}, ${country}.`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice,] = item;
console.log(`A medium ${itemName} cost ${mediumPrice}.`)