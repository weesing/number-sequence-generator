const MAX_LENGTH = 6;
var num = [];
for(var i = 0 ; i < MAX_LENGTH; i++) {
  num[i] = ((Math.random() * 1000000) % 50) + 1
  num[i] = Math.floor(num[i]);
  for (var j = 0 ; j < i; ++j) {
    if(num[i] == num[j]) {
      --i;
      break;
    }
  }
}

//Bubble sort
for(var i = MAX_LENGTH - 1; i >= 0; --i) {
  for(var j = 1; j <= i; ++j) {
    if (num[j-1] > num[j]) {
      var temp = num[j-1];
      num[j-1] = num[j];
      num[j] = temp;
    }
  }
}

var str = "";
for(var i = 0; i < MAX_LENGTH; ++i) {
  str = str + num[i] + " ";
}
console.log(str);
