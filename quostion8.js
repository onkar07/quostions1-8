var obj = {
    "id" : 4, "name" : "abc",
    "id" : 10, "name" : "ab2",
    "id" : 5, "name" : "abc3",
    "id" : 6, "name" : "abc5"
   };

var sortedObj = [];

for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
  }


// the object should be array of object, i try my best but every function shows only last 2 values.


