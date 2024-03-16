var object = {
    name: "san",
    age: 21
} // objects store key-value pairs (like dictionaries in python)
console.log(object);
object = {
    name: "san",
    age: 21,
    address: {
        presentAddress: "somewhere",
        permanentAddress: "nowhere",
        otherAddress: {
            countryside: "gram",
            abroad: "bidesh"
        }
    } // nested properties
}
console.log(object.address); // accessing inner-properties of an object
console.log(object.address.otherAddress.countryside,
            object.address.otherAddress["abroad"]);
console.log(Object.keys(object)); // getting only keys of an object
console.log(Object.values(object.address)); // getting only values of an object

var {name, age} = object; // destructuring an object
console.log(name, age);