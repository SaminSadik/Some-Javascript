//! Getting terminal output in JavaScript:
console.log("Hello World"); // ends with a linebreak by default


//! Basic operations in JavaScript:
var a1$_Z = "123"; // same naming principles as c/c++, except $ is also allowed

console.log(a1$_Z, typeof a1$_Z); // typeof returns the type of the variable

var num = 123, f = "55555.55555";
console.log(num + num);
console.log(num + f); // anything + string = string
console.log(parseInt(f) + num); // converting to int
console.log(parseFloat(f).toFixed(2)); // toFixed rounds to specified decimal places
console.log(f - num, f / num, num * f); // only '+' op doesn't autoconvert int from string


//! if-elseif-else conditional ladder in JavaScript:
if(num == 123) console.log("num is 123");
else if (num > 123)
{
    console.log("num is greater than 123");
}
else if (num >= 123) {
    console.log(num + " >= 123");
}
else {console.log("num is less than 123");}
// same prinicapls as c/c++
if (num == "123") console.log(num == "123"); // '==' comparison returns true/false


//! Loops in JavaScript:
for(var i=0; i<5; i++){
    console.log(i);
} // same prinicapls as c/c++
var i = 5;
while(i>0)
{
    console.log(i);
    i--;
}


//! Functions in JavaScript:
function sum(a, b=0) // initializing function
{ return a + b; }
console.log(sum(10,20)); // calling function

function sub()
{
    // calling another function inside a function:
    console.log(sum(100) - 10);
    // only parameters with ""=" values are optional
}
sub();
//! Arrow Function:
var aFun = (a,b) => a+b; // for single line code, no need for 'return'
console.log(aFun(10,20));
// Format: varType funcName = (parameters) => {code}; 
aFun = () => {
    console.log("Arrow");
    return "Function";
};
console.log(aFun());


//! Variable types:
function test() {
    if(true) {
        var x = "Hi"; // accessible in the declared function

        let y = "Hello"; // only accessible in the declared block
        const z = "Hey"; // only accessible in the declared block

        console.log(x, y, z);
        x = "Halo";
        y = "Hola";
        // z = "Heya"; // const value can't be updated like so
    }
    console.log(x); // var exceeds the block scope

    // var x = "Yo"; // var can't be reasigned in the same function
    // let & const variables can be reasigned outside previous scope
    let y = "Yo", z = "Sup"; 
    console.log(y, z); // not connected to previous block
}
test();


//! Template strings:
var line = `
    This is a multiline string with exact indentations
    and ${2-1}t's DYNAMIC for variable usage
`
console.log(`Template Strings: ${line}`);