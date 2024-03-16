//! Synchronous API Fetching:
fetch("https://fakestoreapi.com/products/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

//! Asynchronous API Fetching:
const loadData = async () => {
    try {
        let response = await fetch("https://fakestoreapi.com/products"); // can be dynamic using template string
        let data = await response.json(); // for async both awaits are needed
        exampleUsage(data);
    } catch {
        (error) => console.log(error);
    }
};

//? Example of using the fetched data:
const exampleUsage = (data) => {
    //console.log(data);
    console.log(data[0].title);
    data.forEach((element) => {
        console.log(element.title);
    });
};

loadData();
