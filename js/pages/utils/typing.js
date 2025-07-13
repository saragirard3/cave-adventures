// // set up text to print, each item in array is new line
// let aText = new Array(
//     "There are only 10 types of people in the world:",
//     "Those who understand binary, and those who don't"
// );
// let iSpeed = 100; // time delay of print out
// let iIndex = 0; // start printing array at this posision
// let iArrLength = aText[0].length; // the length of the text array
// let iScrollAt = 20; // start scrolling up at this many lines
//
// let iTextPos = 0; // initialise text position
// let sContents = ''; // initialise contents variable
// let iRow; // initialise current row
//
// function typewriter()
// {
//     sContents =  ' ';
//     iRow = Math.max(0, iIndex-iScrollAt);
//     var destination = document.getElementById("typedtext");
//
//     while ( iRow < iIndex ) {
//         sContents += aText[iRow++] + '<br />';
//     }
//     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
//     if ( iTextPos++ == iArrLength ) {
//         iTextPos = 0;
//         iIndex++;
//         if ( iIndex != aText.length ) {
//             iArrLength = aText[iIndex].length;
//             setTimeout("typewriter()", 500);
//         }
//     } else {
//         setTimeout("typewriter()", iSpeed);
//     }
// }
//
//
// typewriter();



// let i = 0;
// let string = "welcome to the dungeon!";

// function typing() {
//     let speed = 75; //Speed in milliseconds
//
//     if ( i < string.length ) {
//         document.getElementById("content").innerHTML += string.charAt(i);
//         i++;
//         setTimeout(typing, speed);
//     }
// }