/**
 * Created by sumit_bagga on 12/22/17.
 */

let faker = require('faker');

for ( let i = 0; i < 10; i++) {
  var randomName = faker.commerce.productName(); // Rowan Nikolaus
  var randomPrice = '$' + faker.commerce.price(); // Kassandra.Haley@erich.biz
  // var randomCard = faker.helpers.createCard(); // random contact card containing many properties
  console.log(randomName, '-', randomPrice);
}

