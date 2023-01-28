/**
 * -----------------------
 * ARRAY
 * -----------------------
 * 1. What is the purpose of array?
 * 2. How does to declare an array in JS?
 * 3. Number of elements in an Array
 * 4. What is index?
 * 5. Find the value of an elements by index
 * 6. Change an element by index
 * 7. get the index of an element by the value
 * 8. What does it mean when you get undefined while getting the of an element by index
 * 9. How can you add an element to an array at the last position
 * 10. How can you remove the last element from array
 * 11.Ad an element at the first position of an array
 * 12.Remove the first element of an array
 */

/**-------------------Answer: 01--------------------- */
var purposeOfArray = " The purpose of an array is to store multiple pieces of data of the same type together.";
// Example:
var language = ["C", 'C++', "Java", "JavaScript", "Python"];
console.log(language);

/**-------------------Answer: 02--------------------- */
var array_name = ["item1", "item2", "item3"];
console.log(array_name);

/**-------------------Answer: 03--------------------- */
var fruits = ['Strawberries', 'Watermelons', 'Banana', 'Apple'];
var fruitsElement = fruits.length;
console.log(fruitsElement);

/**-------------------Answer: 04--------------------- */
var indexMeaning = "To access elements of an array using index in JavaScript, mention the index after the array variable in square brackets. the first element of an array is at index 0"

/**-------------------Answer: 05--------------------- */
var fruitsPrice = [30, 60, 45, 150, 70];
var fruitsPrice_Position_2_Value = fruitsPrice[2];
console.log(fruitsPrice_Position_2_Value);

/**-------------------Answer: 06--------------------- */
var subject = ['Physics', 'Chemistry', 'Biology', 'Botany', 'Zoology', 'Math'];
subject[3] = 'CSE';
console.log(subject);

/**-------------------Answer: 07--------------------- */
var subject = ['Physics', 'Chemistry', 'Biology', 'Botany', 'Zoology', 'Math'];
var BiologyIndex = subject.indexOf("Biology");
console.log(BiologyIndex);

/**-------------------Answer: 08--------------------- */
var meaningOfUndefined = "The undefined property indicates that a variable has not been assigned a value, or not declared at all."
// Example:
let x;
if (typeof x === "undefined") {
  console.log("x is undefined");
} else {
  console.log("x is defined");
}

/**-------------------Answer: 09--------------------- */
var fruits = ['Strawberries', 'Watermelons', 'Banana', 'Apple'];
fruits.push("Orange");
console.log(fruits);

/**-------------------Answer: 10--------------------- */
var vegetables = ['Carrot', 'Cabbage', 'Cauliflower', 'Tomato', 'Eggplant'];
vegetables.pop();
console.log(vegetables);


/**-------------------Answer: 11--------------------- */
var myLearn = ['CSS', 'Bootstrap', 'Tailwind', 'JavaScript'];
myLearn.unshift('HTML');
console.log(myLearn);

/**-------------------Answer: 12--------------------- */
var players = ['CR7', 'Benzama', 'Vinicius', 'Rodrygo', 'Kroos', 'Kamavinga'];
players.shift();
console.log(players);