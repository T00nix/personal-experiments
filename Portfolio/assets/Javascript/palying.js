//declaration (who they are) and initialising (give them a value) the Variables 
let alertText = "Hi! What's up";
let confirmText = "This is neat!";

// 
function helloThere() {
    alert(alertText);
}

function AreYouOK() {
    window.confirm(confirmText);

}

function Whatiswrong() {
    let promptText = prompt("Tell me more about you", "");

    if (promptText == "" || promptText == null)
        alert("Please enter your Name!")
    else
        alert("Hallo, " + promptText + " Wie geht es so?")
}

console.log("I'm just messing around")
