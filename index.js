let ctx = document.getElementById("ctx").getContext("2d");
ctx.font = "30px Arial";

let screenWidth = 500;
let screenHeight = 500;

let notes = [];

let noteSpeed = 50;
let loop = 0;

let giveId = 0;


window.onkeydown = (event) => {
    console.log(event.keyCode);
    if (event.keyCode == 73) startNotes(300);
    if (event.keyCode == 79) stopNotes();
}