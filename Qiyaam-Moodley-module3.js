/*
    MELSOFT MODULE 3 CHECKPOINT

    Name: Qiyaam Moodley
    Email: qiyaam.moodley@gmail.com

    I used this file to practise the operators and expression topics
    from Module 3.
*/

// ======================================================
// CHALLENGE 1 - OPERATORS MASTERCLASS
// ======================================================

console.log("========== CHALLENGE 1 ==========");

// 1. Arithmetic
// I am working out a monthly salary after the main deductions.
let salary = 45000;
let taxAmount = salary * 0.25;
let uifAmount = salary * 0.01;
let salaryAfterDeductions = salary - taxAmount - uifAmount;
let finalSalary = salaryAfterDeductions - 2500;

console.log("Net salary: R" + finalSalary);
console.log("Salary remainder when split by 4:", salary % 4);

// 2. Assignment
// I start the cart at zero and add each product to it.
let shoppingTotal = 0;

shoppingTotal += 150;
shoppingTotal += 85;
shoppingTotal += 220;

shoppingTotal -= shoppingTotal * 0.10;
shoppingTotal *= 1.15;

console.log("Shopping cart total with VAT:", shoppingTotal.toFixed(2));

// 3. Comparison
// These are some basic checks that could happen on a signup form.
let personAge = 21;
let password = "football123";
let typedEmail = "thabo@gmail.com";
let secondEmail = "thabo@gmail.com";

console.log("Old enough:", personAge >= 18);
console.log("Password long enough:", password.length >= 8);
console.log("Emails match:", typedEmail === secondEmail);
console.log("Age is not 17:", personAge != 17);

// 4. Logical
// The user needs to be logged in and verified, unless they are an admin.
let loggedIn = true;
let verified = true;
let admin = false;

let premiumAccess = (loggedIn && verified) || admin;

console.log("Can use premium dashboard:", premiumAccess);

// 5. Unary
// The + changes the form value from text into a number.
let ageFromForm = "25";
let realAge = +ageFromForm;

let darkMode = false;
darkMode = !darkMode;

console.log("Age as a number:", realAge);
console.log("Dark mode:", darkMode);

// 6. Ternary
// This gives the user a membership label.
let membership = "trial";

let badge = membership === "premium"
    ? "Premium Member"
    : membership === "trial"
        ? "Trial Member"
        : "Free Member";

console.log("Membership badge:", badge);

// 7. String concatenation
let firstName = "Thabo";
let surname = "Nkosi";
let yearsOld = 28;

let oldStyleGreeting =
    "Welcome back " + firstName + " " + surname + ", you are " + yearsOld + " years old.";

let newerGreeting =
    `Welcome back ${firstName} ${surname}, you are ${yearsOld} years old.`;

console.log(oldStyleGreeting);
console.log(newerGreeting);

/*
CHALLENGE 1 INTERVIEW QUESTIONS

1. Prefix and postfix are both increment operators but they do not give the
same result when they are used inside another expression.

Example:
let numberOne = 5;
console.log(++numberOne); // 6

let numberTwo = 5;
console.log(numberTwo++); // 5

The prefix changes the value before giving the result. Postfix gives the old
value first.

2. Some real uses of modulo are:
- Checking if a number is even with number % 2.
- Running something every 5 items with count % 5.
- Finding the remaining minutes after full hours.

3. A nested ternary is okay for a very small amount of logic, but I would not
use one if it becomes hard to read. Too many conditions inside one line can
make the code confusing and harder to debug.
*/


// ======================================================
// CHALLENGE 2 - THE EQUALITY DEEP DIVE
// ======================================================

console.log("\n========== CHALLENGE 2 ==========");

// Part A
// I wrote what I expected in the comments before each result.

// 1. Prediction: true
// false is converted to 0.
console.log("1:", 0 == false);

// 2. Prediction: false
// Number and boolean are different types with ===.
console.log("2:", 0 === false);

// 3. Prediction: true
// The empty string becomes 0 with loose equality.
console.log('3:', "" == 0);

// 4. Prediction: false
console.log('4:', "" === 0);

// 5. Prediction: true
// The string "0" can be converted to the number 0.
console.log('5:', "0" == 0);

// 6. Prediction: false
console.log('6:', "0" === 0);

// 7. Prediction: true
// null and undefined are loosely equal.
console.log("7:", null == undefined);

// 8. Prediction: false
console.log("8:", null === undefined);

// 9. Prediction: false
console.log("9:", null == 0);

// 10. Prediction: true
// In a numeric comparison null becomes 0.
console.log("10:", null >= 0);

// 11. Prediction: false
// 0 is not greater than 0.
console.log("11:", null > 0);

// 12. Prediction: false
// NaN is not equal to itself.
console.log("12:", NaN == NaN);

// 13. Prediction: false
console.log("13:", NaN === NaN);

// 14. Prediction: true
console.log("14:", Object.is(NaN, NaN));

// 15. Prediction: true
console.log("15:", +0 === -0);

// 16. Prediction: false
console.log("16:", Object.is(+0, -0));

// 17. Prediction: true
// The array gets converted into "1,2,3".
console.log("17:", [1, 2, 3] == "1,2,3");

// 18. Prediction: true
console.log("18:", [] == false);

// 19. Prediction: true
console.log("19:", [] == 0);

// 20. Prediction: true
console.log("20:", [0] == false);


// Part B - Password reset validator

console.log("\nPassword reset test 1");

let newPassword = "StrongPassword1";
let confirmedPassword = "StrongPassword1";
let currentEmail = "thabo@gmail.com";
let confirmedEmail = "thabo@gmail.com";

console.log("Passwords match:", newPassword === confirmedPassword);
console.log("Emails match:", currentEmail === confirmedEmail);
console.log("Password is not email:", newPassword !== currentEmail);
console.log("Password is 8+ characters:", newPassword.length >= 8);

console.log("\nPassword reset test 2");

newPassword = "short";
confirmedPassword = "different";
currentEmail = "thabo@gmail.com";
confirmedEmail = "other@gmail.com";

console.log("Passwords match:", newPassword === confirmedPassword);
console.log("Emails match:", currentEmail === confirmedEmail);
console.log("Password is not email:", newPassword !== currentEmail);
console.log("Password is 8+ characters:", newPassword.length >= 8);

/*
I used === because password validation should be exact. I do not want
JavaScript changing a value's type and saying two values are equal when
they are actually different types.
*/


// ======================================================
// CHALLENGE 3 - OPERATOR PRECEDENCE
// ======================================================

console.log("\n========== CHALLENGE 3 ==========");

// 1. Prediction: 13
// Multiplication happens before addition and subtraction.
console.log("1:", 2 + 3 * 4 - 1);

// 2. Prediction: 15
// Parentheses happen first.
console.log("2:", (2 + 3) * (4 - 1));

// 3. Prediction: 4
// (10 - 4) - 2
console.log("3:", 10 - 4 - 2);

// 4. Prediction: 512
// Exponentiation works from right to left here.
console.log("4:", 2 ** 3 ** 2);

// 5. Prediction: 3
// 10 % 3 is 1, then 1 * 2 is 2, then + 1 is 3.
console.log("5:", 10 % 3 * 2 + 1);

// 6. Prediction: 5
// (100 / 4) / 5
console.log("6:", 100 / 4 / 5);

// 7. Prediction: true
console.log("7:", 5 + 2 > 6 && 3 < 4);

// 8. Prediction: true
// The && parts happen before the ||.
console.log("8:", true && false || true && true);

// 9. Prediction: false
console.log("9:", !false && !!0);

// 10. Prediction: true
console.log("10:", 5 > 3 && 10 < 20 || !(2 === "2"));

// 11. Prediction: 1035
console.log("11:", 1000 * 1.15 * 0.9);

// 12. Prediction: "number1"
// typeof gives a string, then + joins it with 1.
console.log("12:", typeof 5 + 1);

// 13. Prediction: "number"
console.log("13:", typeof (5 + 1));

// 14. Prediction: "56"
console.log("14:", "5" + 3 * 2);

// 15. Prediction: 4
// "5" - 3 becomes 2 and then 2 + 2 is 4.
console.log("15:", "5" - 3 + 2);

/*
I would add parentheses when an expression starts becoming difficult to read,
especially when money or important business rules are involved. Even if
JavaScript knows the precedence, another developer should be able to quickly
see what I intended.
*/


// ======================================================
// CHALLENGE 4 - TERNARY AND SHORT-CIRCUIT PATTERNS
// ======================================================

console.log("\n========== CHALLENGE 4 ==========");

// Part A - Grade conversion

let marks = [95, 82, 73, 65, 54, 42, 0, 100];

for (let mark of marks) {
    let grade =
        mark >= 90 ? "A" :
        mark >= 80 ? "B" :
        mark >= 70 ? "C" :
        mark >= 60 ? "D" :
        mark >= 50 ? "E" : "F";

    console.log(mark + "% =", grade);
}

// Part B - User profile defaults

let missingProfile = {
    displayName: null,
    theme: undefined,
    maxResults: "",
    lastLogin: null,
    notificationCount: undefined
};

let zeroProfile = {
    displayName: "Thabo",
    theme: "",
    maxResults: 20,
    lastLogin: null,
    notificationCount: 0
};

console.log("\nMissing profile:");

let nameOne = missingProfile.displayName || "Guest User";
let themeOne = missingProfile.theme || "light";
let resultsOne = missingProfile.maxResults || 10;
let loginOne = missingProfile.lastLogin ?? "Never";
let notificationsOne = missingProfile.notificationCount ?? 0;

console.log(nameOne, themeOne, resultsOne, loginOne, notificationsOne);

console.log("\nProfile with zero:");

let nameTwo = zeroProfile.displayName || "Guest User";
let themeTwo = zeroProfile.theme || "light";
let resultsTwo = zeroProfile.maxResults || 10;
let loginTwo = zeroProfile.lastLogin ?? "Never";
let notificationsTwo = zeroProfile.notificationCount ?? 0;

console.log(nameTwo, themeTwo, resultsTwo, loginTwo, notificationsTwo);

/*
|| treats things such as 0 and "" as false/falsy, so it will use the default.
?? only checks for null or undefined. That is why notificationCount can stay 0
when I use ??.
*/

// Part C - Three ways of checking the city

let personWithAddress = {
    address: {
        city: "Johannesburg"
    }
};

let personNoAddress = {
    name: "Benny Mccarthy"
};

let noPerson = null;

console.log("\nFull user:");
console.log(personWithAddress && personWithAddress.address && personWithAddress.address.city);
console.log(personWithAddress?.address?.city);
console.log(personWithAddress?.address?.city ?? "Unknown city");

console.log("\nMissing address:");
console.log(personNoAddress && personNoAddress.address && personNoAddress.address.city);
console.log(personNoAddress?.address?.city);
console.log(personNoAddress?.address?.city ?? "Unknown city");

console.log("\nNull user:");
console.log(noPerson && noPerson.address && noPerson.address.city);
console.log(noPerson?.address?.city);
console.log(noPerson?.address?.city ?? "Unknown city");

// Part D

// 1. Prediction: "finally", string
console.log("1:", null || undefined || 0 || "" || "finally");

// 2. Prediction: 0, number
console.log("2:", null ?? undefined ?? 0 ?? "" ?? "finally");

// 3. Prediction: "first truthy", string
console.log("3:", 0 || "first truthy");

// 4. Prediction: 0, number
console.log("4:", 0 ?? "first non-nullish");

// 5. Prediction: false, boolean
console.log("5:", true && false && "never reached");

// 6. Prediction: "third", string
console.log("6:", "first" && "second" && "third");

// 7. Prediction: "yes", string
console.log("7:", false || (true && "yes"));

// 8. Prediction: "yes", string
console.log("8:", (false || true) && "yes");

// 9. Prediction: 3, number
console.log("9:", 1 && 2 && 3);

// 10. Prediction: undefined
console.log("10:", null?.foo?.bar?.baz);


// ======================================================
// CHALLENGE 5 - typeof, instanceof, delete
// ======================================================

console.log("\n========== CHALLENGE 5 ==========");

// Part A

console.log("typeof 42:", typeof 42);
console.log('typeof "hello":', typeof "hello");
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof function:", typeof function () {});
console.log("typeof NaN:", typeof NaN);
console.log("typeof undeclaredVariable:", typeof undeclaredVariable);

// This is the better way to tell an array from a normal object.
console.log("Is [] an array?", Array.isArray([]));

/*
typeof null returning object is one of JavaScript's famous old problems.
typeof is still useful for primitive values. For arrays, Array.isArray is better.
*/

// Part B

console.log("[] instanceof Array:", [] instanceof Array);
console.log("[] instanceof Object:", [] instanceof Object);
console.log("{} instanceof Object:", {} instanceof Object);
console.log('"hello" instanceof String:', "hello" instanceof String);
console.log('new String("hello") instanceof String:', new String("hello") instanceof String);
console.log("42 instanceof Number:", 42 instanceof Number);
console.log("new Date() instanceof Date:", new Date() instanceof Date);
console.log("/abc/ instanceof RegExp:", /abc/ instanceof RegExp);

/*
typeof is useful when checking primitive types. instanceof is more useful for
checking objects made from constructors such as Date or RegExp.
*/

// Part C

let student = {
    name: "Benny Mccarthy",
    age: 25,
    role: "student"
};

console.log("Before deleting role:", student);
delete student.role;
console.log("After deleting role:", student);

let x = 5;
console.log("Trying to delete x:", delete x);

let numbers = [1, 2, 3, 4];
delete numbers[1];

console.log("Array after delete:", numbers);
console.log("Array length:", numbers.length);
console.log("Position 1:", numbers[1]);

/*
delete does not close the gap in an array. It leaves an empty slot and the
length stays the same, so it is not a good way to remove an array item.

Math.PI is a built-in property and is non-configurable, so:
delete Math.PI;
does not remove it.

If I need to remove an array item, I would use splice or filter instead.
*/


// ======================================================
// CHALLENGE 6 - BITWISE PERMISSIONS
// ======================================================

console.log("\n========== CHALLENGE 6 ==========");

const READ = 1;      // 0001
const WRITE = 2;     // 0010
const DELETE = 4;    // 0100
const ADMIN = 8;     // 1000

// 1. READ + WRITE
let userPermissions = READ | WRITE;
console.log("User permissions:", userPermissions);

// 2. All permissions
let allPermissions = READ | WRITE | DELETE | ADMIN;
console.log("Admin permissions:", allPermissions);

// 3. Check READ
console.log(
    "Has READ:",
    (userPermissions & READ) === READ ? "Yes" : "No"
);

// 4. Check DELETE
console.log(
    "Has DELETE:",
    (userPermissions & DELETE) === DELETE ? "Yes" : "No"
);

// 5. Grant DELETE
userPermissions |= DELETE;
console.log("After giving DELETE:", userPermissions);

// 6. Remove WRITE
userPermissions &= ~WRITE;
console.log("After removing WRITE:", userPermissions);

// 7. Toggle ADMIN twice
userPermissions ^= ADMIN;
console.log("Admin switched on:", userPermissions);

userPermissions ^= ADMIN;
console.log("Admin switched off:", userPermissions);

// 8. Create the next permission using left shift
const SUPER_ADMIN = ADMIN << 1;
console.log("SUPER_ADMIN:", SUPER_ADMIN);

/*
1. Bitwise permissions can store several permissions in one number, and checks
can be very quick.

2. The downside is that the numbers can become difficult to understand. If a
system has lots of complicated permissions, a normal array or another system
could be easier for developers to maintain.

3. & and | work with bits. && and || work with logical conditions. For example,
using | instead of || can give me a number instead of the true/false result I
was expecting.
*/


// ======================================================
// CHALLENGE 7 - REAL-WORLD BANKING CALCULATOR
// ======================================================

console.log("\n========== CHALLENGE 7 ==========");

// Scenario 1 - Savings account

let startingMoney = 25000;
let interestRate = 0.075;
let monthly = 12;
let savingYears = 3;

let balanceAfterThreeYears =
    startingMoney *
    (1 + interestRate / monthly) **
    (monthly * savingYears);

let interestMade = balanceAfterThreeYears - startingMoney;

let actualYearlyGrowth =
    ((balanceAfterThreeYears / startingMoney) ** (1 / savingYears) - 1) * 100;

console.log(
    "Final balance: R" +
    balanceAfterThreeYears.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);

console.log(
    "Interest earned: R" +
    interestMade.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);

console.log("Effective annual rate:", actualYearlyGrowth.toFixed(2) + "%");

// Scenario 2 - Account fees
// I used one ternary expression for each test balance as requested.

let balanceA = 500;
let feeA =
    balanceA >= 25000 ? 0 :
    balanceA >= 5000 ? 75 :
    balanceA >= 1000 ? 50 : 25;

let balanceB = 1500;
let feeB =
    balanceB >= 25000 ? 0 :
    balanceB >= 5000 ? 75 :
    balanceB >= 1000 ? 50 : 25;

let balanceC = 10000;
let feeC =
    balanceC >= 25000 ? 0 :
    balanceC >= 5000 ? 75 :
    balanceC >= 1000 ? 50 : 25;

let balanceD = 50000;
let feeD =
    balanceD >= 25000 ? 0 :
    balanceD >= 5000 ? 75 :
    balanceD >= 1000 ? 50 : 25;

console.log("R500 fee:", feeA, "Annual:", feeA * 12);
console.log("R1500 fee:", feeB, "Annual:", feeB * 12);
console.log("R10000 fee:", feeC, "Annual:", feeC * 12);
console.log("R50000 fee:", feeD, "Annual:", feeD * 12);

// Scenario 3 - Transfer to USD

let moneyToSend = 15750.33;
let dollarsRate = 18.42;
let bankCommission = 0.025;

let commission = moneyToSend * bankCommission;
let moneyLeft = moneyToSend - commission;
let dollarsReceived = moneyLeft / dollarsRate;

console.log(
    "Commission: R" +
    commission.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);

console.log(
    "After commission: R" +
    moneyLeft.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);

console.log(
    "USD received: $" +
    dollarsReceived.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);

/*
Floating point can be a problem with money because numbers such as 0.1 cannot
always be stored exactly in binary. For this exercise I used toFixed(2) when
displaying the amounts. A real banking system should normally use integer
cents or a decimal/money library instead of relying on normal floating point.
*/


// ======================================================
// CHALLENGE 9 - BUG HUNT
// ======================================================

console.log("\n========== CHALLENGE 9 ==========");

/*
Here is what I found wrong with the junior developer's code.

1. item1Price is a string instead of a number.
2. item2Price is also a string.
3. quantity is a string.
4. item1Price + item2Price causes string concatenation.
5. The subtotal expression therefore does not calculate the intended total.
6. == is used for the discount code instead of ===.
7. isLoggedIn is the string "true", not the boolean true.
8. A non-empty string is truthy, so isLoggedIn can make the condition look valid.
9. customerAge is null and has not been properly checked before comparisons.
10. The senior discount uses null when there is no discount.
11. Subtracting null happens to turn it into 0, which can hide a missing value.
12. There is no clear check that customerAge is actually a valid number.
*/

// Corrected version

let productOne = 199.99;
let productTwo = 49.50;
let productThree = 125;
let itemQuantity = 2;

let code = "SAVE10";
let customerLoggedIn = true;
let customerAgeNumber = 65;

let subtotal =
    productOne + productTwo + (productThree * itemQuantity);

console.log("Subtotal:", subtotal.toFixed(2));

let discount =
    code === "SAVE10" ? 0.10 : 0;

let discountValue = subtotal * discount;
let discountedTotal = subtotal - discountValue;

let vatValue = discountedTotal * 0.15;
let totalPrice = discountedTotal + vatValue;

let ageIsValid =
    typeof customerAgeNumber === "number" &&
    !Number.isNaN(customerAgeNumber) &&
    customerAgeNumber >= 18;

let checkoutAllowed =
    customerLoggedIn === true && ageIsValid;

console.log("Can checkout?", checkoutAllowed);

let olderCustomerDiscount =
    customerAgeNumber >= 60 ? totalPrice * 0.05 : 0;

let amountToPay = totalPrice - olderCustomerDiscount;

console.log("Final total: R" + amountToPay.toFixed(2));


// ======================================================
// CHALLENGE 10 - SELF REFLECTION
// ======================================================

/*
1. & and | are bitwise operators. They work with the actual bits in numbers.
&& and || are logical operators and are normally used when working with
conditions. If I accidentally used & instead of && for a login check, I could
get a number instead of the true/false result I wanted.

2. I would use ?? when 0, false or "" are valid values. For example, if a user
has 0 notifications, I want to keep 0. Using 0 || 10 would give me 10 instead,
while 0 ?? 10 keeps the 0.

3. typeof null returns "object" because of an old JavaScript design mistake
that was kept for compatibility. To check specifically for null I can do:
value === null

4. 0.1 + 0.2 has a small floating point error because JavaScript stores normal
numbers in binary floating point and some decimal values cannot be represented
exactly. For production money calculations I would use integer cents or a
decimal library.

5. The hardest part for me was probably remembering the difference between ||
and ??. The examples with 0 and empty strings made more sense to me because I
could actually see how the result changed.
*/
