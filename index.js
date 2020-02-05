const MIN = 1;
const MAX = 49;
const MAX_LENGTH = 6;

//Bubble sort
var bsortAsc = function(inpArr) {
  for(var i = MAX_LENGTH - 1; i >= 0; --i) {
    for(var j = 1; j <= i; ++j) {
      if (inpArr[j-1] > inpArr[j]) {
        var temp = inpArr[j-1];
        inpArr[j-1] = inpArr[j];
        inpArr[j] = temp;
      }
    }
  }
  return inpArr;
}

var range = (MAX + 1) - MIN;
var num = [];

for(var i = 0 ; i < MAX_LENGTH; i++) {
  num[i] = ((Math.random() * 1000) % range);
  num[i] = num[i] + MIN;
  num[i] = Math.floor(num[i]);
  for (var j = 0 ; j < i; ++j) {
    if(num[i] == num[j]) {
      --i;
      break;
    }
  }
}

//Sort ascending
bsortAsc(num);
console.log("Generated numbers: ");
var str = "";
for(var i = 0; i < MAX_LENGTH; ++i) {
  str = str + num[i] + " ";
}
console.log(str);
