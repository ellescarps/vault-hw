// Initial Intructiuons
// 1. I will create a string for the user, this will be the display message
// 2. this will be given a variable to be coded into with the message inside

// 3. I will write out three variables; each variable will be able to output its own number to display each part of the lock code combination
// 4. each variable will be able to have a displayed number in the browser by writing the artihmetic operators for numbers to formula to their displayed corresponding numbers
// 5. I will then string the variables together into an alert so that the display becomes a pop up dialog box in the browser; the whole lock combo will appear

// create the variable let, assign its name, and add the text for the pop up message to read
let message =
  "You have received this messsage because you have been chosen to open an important vault. Here is the secret combination:";

// create 3 variables let, label their numbers in order, assign their designated lock combo number with arthmetic formula in order to display their final answers
let num1 = 11 - 1;
let num2 = 20 * 2;
let num3 = 40 - 1;
alert(`${message}${num1}-${num2}-${num3}`);

// 1. creeate the dialog box for the browser by writing out the alert below the assigned variable'd numbers above
// 2. each variable name ex: (num1,num2,num3) will be stringed together inside the alert's parantheses; use ${num#} in order to call back their combo formulas; the results will appear in the browser
// 3. surround the string variables with single backslash ticks to activate what's written inside of the parathenses
// 4. add the message into the alert so it appears after "here is the secret combination:"
