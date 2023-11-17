/*
var arr = ['a', 'b', 'c'];

console.log(arr[0])

console.log(arr.length)


//map
const arr = [1,2,3,4,5,6];
const mapped = arr.map(element => element +30);
console.log(mapped)


//filter
const arr=[1,2,3,4,5,6]
const filtered = arr.filter(element => element ===2 || element ===4);
console.log(filtered)


//sort
const arr = [1,2,3,4,5,6];
const alphabet = ['f', 'a', 'c', 'v', 'z'];

descend = arr.sort((a,b) => a>b ? -1 : 1)
console.log(descend)

ascend = alphabet.sort((a,b) => a>b ?1: -1)
console.log(ascend)


//forEach
const arr = [1,2,3];
arr.forEach(element => {
    console.log(element)
});


//concat()
const arr1 = ['a','b','c'];
const arr2 = ['d','e','f'];

console.log(arr1.concat(arr2));


//every()
const arr = [1,2,3,4,5,6,7];

//all elements are greater than 5
const greater = arr.every(num => num > 5);
console.log(greater);

//all elements are less than 9
const less = arr.every(num => num< 9);
console.log(less);


//some()
const arr = [1,2,3,4,5,6,7];

//at least one element is greater than 5?
const great = arr.some(num => num> 5);
console.log(great);

//at least one element is less than or equal to 0?
const lessNum = arr.some(num => num<= 0);
console.log(lessNum);


//includes()
const arr = [1,2,3,4,5,6];
console.log(arr.includes(2));
console.log(arr.includes(7));


//join()
const arr = ['m','a','n','d','e','e','p'];
console.log(arr.join(''));


//reduce()
const arr = [1,2,3,4,5,6];
const reduced = arr.reduce((total, current)=>total +current);
console.log(reduced)


//find()
const arr = [1,2,3,4,5,6,7,8,9,,10];
const found = arr.find(element => element>5)
console.log(found)


//findindex()
const arr = ['disney', 'mandeep', 'john', 'ruby'];
const indexFinder = arr.findIndex('mandeep');
console.log(indexFinder);


//indexof()
const arr = ['disney', 'mandeep', 'john', 'ruby'];
const indexFinder = arr.indexOf('mandeep');
console.log(indexFinder);


//fill()
const arr = new Array(3);
console.log(arr);
console.log(arr.fill(10));


//slice()
const arr =['a','b','c','d','e']
const sliced = arr.slice(2,4);
console.log(sliced);
console.log(arr);


//reverse()
const arr = [1,2,3];
arr.reverse();
console.log(arr)


//push()
const fruits = ['apple', 'peach']
console.log(fruits.push('banana'));
console.log(fruits);


//pop()
const fruits = ['apple', 'peach']
console.log(fruits.pop());
console.log(fruits);


//shift()
const fruits = ['apple', 'peach']
console.log(fruits.shift());
console.log(fruits);


//unshift()
const fruits = ['apple', 'peach']
console.log(fruits.unshift('banana'));
console.log(fruits);



const nums = [1, 2, 3, 4, 5]
const squares = nums.map(element => element *element
    // Your code here
    //console.log(nums)
)
console.log(squares) // --> [1, 4, 9, 16, 25]
*/

const names = ["stacy", "bart", "charles", "denise"] 
const friends = names.map(element => element[0].toUpperCase() + element.slice(1))
console.log(friends) // --> ["Stacy", "Bart", "Charles", "Denise"] 


/*
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const htmladded = pokemon.map(element => 
    // Your code here
    '<p>'+element+'</p>'

)
console.log(htmladded) // --> ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/