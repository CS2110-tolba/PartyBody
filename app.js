const button = document.getElementById('partyButton');
const colors = ['red', 'green', 'blue'];
let currentIndex = 0;
button.addEventListener('click', () => {
    const currentColor = _.nth(colors, currentIndex);
    document.body.style.backgroundColor = currentColor;
    currentIndex = (currentIndex + 1) % colors.length;
});


/////////---WITH OUT LODASH (More simple !)---
// var colors = ['#ff0000', '#00ff00', '#0000ff']; 
// var currentColorIndex = 0;
// var button = document.querySelector('.party-button');
// button.addEventListener('click',()=> {document.body.style.backgroundColor = colors[currentColorIndex];
//   currentColorIndex = (currentColorIndex + 1) % colors.length;
// });