//! TarGetting elements:
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementById("H2"));
var ch = document.getElementsByClassName("hText");
console.log(ch, ch[0]);

//! Styling from JS:
ch[0].style.color = "red"; //* applying style from js
//ch.style.color = "red"; //? does't work on collections
ch[1].style.color = "red";
ch[1].style.removeProperty("color");

//! Getting and setting attributes:
console.log(ch[0].getAttribute("id"));
ch[0].setAttribute("id", "Heading1");
console.log(ch[0].getAttribute("id"));

//! Accessing Parent and Child Nodes:
console.log(ch[0].childNodes);
console.log(ch[0].childNodes[0]);
console.log(ch[0].parentNode);

//! Adding and removing classes:
ch[0].classList.add("TestHeading");
console.log(ch[0].classList);
ch[0].classList.remove("TestHeading");
console.log(ch[0].classList);

//! Getting element text/value/code from HTML
console.log(ch[0].innerText);
console.log(ch[0].innerHTML);
console.log(ch[0].outerHTML);
console.log(document.getElementById("input").value);

//! Adding elements to HTML:
var NewDiv = document.createElement("div");
NewDiv.innerHTML = `
    <p>--- --- --- ---</p>
    <p>--- --- ---</p>
    <p>--- --- --- --- ---</p>
    <p>--- ---</p>
`;
var container = document.getElementById("container");
container.appendChild(NewDiv);
//* Similarly adding elements though a function:
function addElement() {
    var NewDiv = document.createElement("div");
    NewDiv.innerHTML = "<p>--- --- --- ---</p>";
    container.appendChild(NewDiv);
}
for(var i=0; i<5; i++) {addElement();}

//! Adding event listeners on Javascript:
var submission = document.getElementById("submit");
submission.addEventListener("click", function(e){
    var value = document.getElementById("input").value;
    console.log("Submitted", value);
});
document.getElementById("input").addEventListener(
    "blur", function(e){
        console.log(e.target.value);
    }
);

//! Adding event listeners on HTML through JS functions:
function btnClicked(e) {
    console.log("Button Clicked");
};
function inputChanged() {
    console.log("input updated");
};