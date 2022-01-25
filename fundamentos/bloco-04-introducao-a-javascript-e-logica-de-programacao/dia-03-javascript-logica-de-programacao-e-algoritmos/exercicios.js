// parte 1

let n = 5;
let aster = '*';
let inputLine = '';

for (let index = 0; index < n; index += 1) {
  // inputLine = inputLine + aster;
};
for (let index = 0; index < n; index += 1) {
  // console.log(inputLine)
}

// parte 2
let a = 5
for (let index = 0; index <= a; index+= 1) {
  // console.log(inputLine);
  // inputLine = inputLine + aster;  
};

// parte 3

let newPosition= n;

for (i = 0; i <= n; i += 1) {
  for (let newColun = 0; newColun < n; newColun++){
    if (newColun < newPosition){
      // inputLine = inputLine + ' ';
    }else {
      // inputLine = inputLine + aster;
    }
  } 
  // console.log(inputLine);
  inputLine = '';
  newPosition -= 1;
};

// parte 4

let midle = (n + 1) / 2;
let controlLeft = midle;
let controlRight = midle;

for (let lineIndex = 0; lineIndex <= midle; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + aster;
    }else{
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};