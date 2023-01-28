/**
 * --------------------
 * LOOP
 * --------------------
 * 1. Display "Ajke amar mon valo nei" for 39 times
 * 2. Display numbers between 58 to 98
 * 3. Show all even numbers from 412 to 456
 * 4. Show all odd numbers 581 to 623
 * 5. Difference between while loop and for loop
 * 6. Declare an array for all the topics that you have learned last few days display then as output
 * 7. Create an array for all the mobile phones. Display all the elements of the array by using a while loop
 * 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
 * 9. Write the price of the books that you have. Display the prices is lower than 200
 */

/**         Answer: 01               */
for(var i = 1; i <= 39; i++){
    console.log(i, "Ajke amar mon valo nei");
}

/**         Answer: 02               */
for(var i = 58; i <= 98; i++){
    console.log(i);
}

/**         Answer: 03               */
for(var i = 412; i <= 456; i += 2){
    console.log(i);
}

/**         Answer: 04               */
for(var i = 581; i <= 623; i += 2){
    console.log(i);
}

/**         Answer: 05               */
var differenceWhileAndForLoop = "The while loop through a block of code as long as the specified condition evaluates to true. As soon as the condition fails, the loop is stopped. The for loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times.";
console.log(differenceWhileAndForLoop);

/**            Answer: 06               */
var myLearnAll = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript'];
for(var i = 0; i < myLearnAll.length; i++){
    var myLearn = myLearnAll[i];
    console.log(myLearn);
}

/**            Answer: 07               */
var myUsedAllPhone = ['NokiaAsa200','WaltonPrimoF4', 'LavaIris21', 'SamsungGalaxyJ5', 'SamsungA20s'];
var i = 0;
while(i < myUsedAllPhone.length){
    var myUsedPhone = myUsedAllPhone[i];
    i++;
    console.log(myUsedPhone);
}

/**            Answer: 08               */
for(var i = 30; i <= 86; i++){
    if(i > 44){
        break;
    }
    console.log(i);
}

/**            Answer: 09               */
var bookPrices = [60, 90, 150, 210, 50, 250,70, 300, 100];
for(var i = 0; i < bookPrices.length; i++){
    var bookPrice = bookPrices[i];
    if(bookPrice > 200){
        continue;
    }
    console.log(bookPrice);
}