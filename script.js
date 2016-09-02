var html = '';
var rgbColor;

// Create a randum number generator that will only go up to 256 for color codes
function randomRGB () {
 return Math.floor(Math.random() * 256 );
}

//Using randomRGB this will create the 3 numbers necessary for a color
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

//this prints the whole thing... somehow
function print(message) {randomColor
  document.write(message);
}

//this will create the color orbs on the page 96 times
for ( var co = 0 ; co < 96;  co += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);