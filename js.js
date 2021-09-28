
// Add  value to list item and have it display
// get value from input field
//create a list item element and add text
function addToList() {
    let value = document.getElementById('shop-item').value;
    let li = document.createElement("li");
    let textNode = document.createTextNode(value);

// Alert when the text box is empty
if (value === "") {
    alert("Please add an item");
    close.appendChild(closeNode) = "none";
}

// Append value to list item
li.appendChild(textNode);
document.getElementById('shop-container').appendChild(li);

// Add a Delete Button to each list item
var close = document.createElement("button");
var closeNode = document.createTextNode("Delete");
close.appendChild(closeNode);
li.appendChild(close);
close.className= "close";

// Have Delete Button remove list item on click
document.body.addEventListener("click", function(event) {
    if (event.target.className == "close")
      event.target.parentElement.style.display="none";
  });
}