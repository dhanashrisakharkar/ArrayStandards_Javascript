//declare Array
let array = ["dhan" , "rucha" , "abhi" , "raj" , "sam"];
console.log(array);

//Push element in array
let arrayPush = array.push("ankita");
console.log(array); 

//delete element from array
let arrayPop = array.pop("raj");
console.log(array);

//sort the array
let arraySort = array.sort();
console.log(array);

//Creates a new array with all of the elements of this array for which the provided filtering function returns true
function Filter(){
    let newArray = [
        { name: 'dhanashri', age: 23 },
        { name: 'rajeshwari', age: 25 }
    ]
    let arrayFilter = newArray.filter(function (e) {
        return e.age > 23;
    });
    console.log(arrayFilter);
}
Filter();

//Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found
let arrayIndex = array.indexOf("sam",0);
console.log(arrayIndex);

//Joins all elements of an array into a string.
let arrayJoin = array.join();
console.log(arrayJoin);

//Creates a new array with the results of calling a provided function on every element in this array
for (let i = 0; i < array.length; i++) {;
    console.log(i+"--->"+array[i]);
}
//console.log(arrayMap);

//Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
function reduce(){
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result);
}
reduce();

//Extracts a section of an array and returns a new array
let arraySlice = array.slice(1,3)
console.log(arraySlice);
// let arrayReduce = (array.reduce("abhi","sam",0,String)=0>String);
// console.log(arrayReduce);

//Adds and/or removes elements from an array.
let arraySplice = array.splice(2 , 0 , "vijay","vibha");
console.log(array);

//Removes the first element from an array and returns that element.
let arrayShift = array.shift();
console.log(arrayShift+"\n"+array);

//Show the lenghth of Array
let arrayLenght = array.length;
console.log(arrayLenght);


