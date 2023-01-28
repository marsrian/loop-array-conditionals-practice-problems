/**
 * ----------------------
 * CONDITIONALS
 * ----------------------
 * 1. meaning of: >, <, >=, <=, ==, !=, ===, !==
 * 2. Meaning of &&
 * 3. Meaning of ||
 * 4. Let's say you have x amount of money. if you have more than 80,000 then you will buy a mac.
 * if more than 60,000 then you will buy gaming Laptop
 * if you more than 40,000 then you will buy lenovo yoga
 * if you more than 20,000 then you will buy an used laptop
 * otherwise, you will use you will buy mobile phone
 */

/**-------------------Answer: 01--------------------- */
/**
 * 1. > means  : Greater than
 * 2. < means  : Less than
 * 3. >= means : Equal or greater than
 * 4. <= means : equal or less than
 * 5. == means : The == operator is an equality operator. It checks whether its two operands are the    same or not by changing
 * 6. === means: Strict equality === checks that two values are the same or not.
 */

/**-------------------Answer: 02--------------------- */
var meaningANDOperator = "if first argument false, it wont test second whether it is true or false. In && case both are true then true otherwise false."
var govtJob = true;
var earn = 50000;
if(govtJob == true && salary > 200000){
    console.log('Khela hove ✔');
}
else{
    console.log("TK earn koro , tarpor khelte parba ❌");
}

/**-------------------Answer: 03--------------------- */
var meaningOROperator = "In the logical OR ( || ) operator, if one or both of the conditions are true, then the code inside the if statement will execute"
var govtJob = true;
var salary = 20000;
if(govtJob == true || salary > 30000){
    console.log("Khela hobe ✔");
}
else{
    console.log("Tumar dara khela somvob na ❌");
}

/**-------------------Answer: 04--------------------- */
var myBudget = 65000;
if(myBudget > 80000){
    console.log("I will buy a Mac");
}
else if(myBudget > 60000){
    console.log("I will buy Gaming Laptop");
}
else if(myBudget > 40000){
    console.log("I will buy Lenovo Yoga");
}
else if(myBudget > 20000){
    console.log("I will buy an used Laptop");
}
else {
    console.log("I will work my phone");
}