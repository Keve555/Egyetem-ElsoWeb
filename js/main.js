
import { userList } from './db.js';
console.log("Hello JS");
console.log(userList[0].name);
//primitívek
const num = 5; //number
const userName = 'Gábor';
const isActive = false;
const nothing = null; //object
let test; //underfined

Number.prototype.isDivided = function (divider) {
    return this % divider === 0;
};
console.log(num.isDivided(5));

//collections
const mixed = [1, 2, 4, ["Hello", true], { id: 44 }, false];
console.log(mixed[4].id);
console.log(mixed.length);
mixed[5] = true;

console.log(userList[0].age);
userList[0].name = 'Little Mermaid';
console.log(userList);
const key = 'id';
console.log(userList[1][key]);

