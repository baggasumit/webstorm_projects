/**
 * Created by sumit_bagga on 8/17/17.
 */

var obj = {
  abc: "objbbc",
  forEa: function(arr, callback, thisArg) {
    for (var i = 0; i < arr.length; i++) {
      callback.call(thisArg, arr[i], i);
    }
  },

  filter: function(arr, callback, thisArg) {
    var filteredArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback.call(thisArg, arr[i], i)) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  },

  map: function(arr, callback, thisArg) {
    var mappedArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        mappedArray.push(callback.call(thisArg, arr[i], i));
      }
    }
    return mappedArray;
  }
}

var secObj = {
  abc: "secBBC"
}
var arr = [1, 2, 3, 4, 5, 6];
this.abc = "bbc"
obj.forEa(arr, function(num, idx) {
  //console.log(idx, Math.pow(num, 3));
  //console.log("this: ", this.abc);
}, secObj)

var fArr = obj.filter(arr, function(num) {
  return num % 2 == 0;
});

var mArr = obj.map(arr, function(num) {
  return Math.pow(num, 3);
});

//console.log(fArr, mArr);
console.log("-------------------------------------");

function reduce(arr, callback, initValue) {
  var i = 0;
  var acc = initValue;

  if (arguments.length < 3) {
    if (Object.keys(arr).length === 0) {
    //if (arr.length === 0) {
        throw new TypeError('TError');

    }
    acc = arr[Object.keys(arr)[0]];
    i = 1;
  }
  for (; i < Object.keys(arr).length; i++) {
    acc = callback(acc, arr[Object.keys(arr)[i]], i);
  }



  return acc;
}

function adder(acc, value, idx) {
  console.log("adder ", idx);
  return acc + value;
}

function mult(acc, value, idx) {
  console.log("mult ", idx);
  return acc * value;
}

function flatten(acc, value, idx) {
  console.log("flatten ", idx);
  return acc.concat(value);
}
try {
  var totalOur = reduce([,,,5], mult);
} catch(e) {
  console.log(e.toString());
}

var totalNative = [,,,5,4,3].reduce(adder);

console.log("totalOur: ", totalOur);
console.log("totalNative: ", totalNative);

