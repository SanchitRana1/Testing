// --> PALINDROME <--
// ***********************
// var isPalindrome = function (x) {
// return x<0 ? false: x === +x.toString().split('').reverse().join('')
// };
// console.log('isPalindrome', isPalindrome(101)) // true

// --> FIBONACCI <--
// ***********************
// const fib = (n)=>{
//    return  n<=1 ? n : fib(n-1) + fib(n-2)
// }

// console.log('fib', fib(6))

// --> ANAGRAM <--
// ***********************
// const isAnagram = (oS, nS) => {
//     if (oS.length !== nS.length) return false;
//     const count = {};
//     oS = oS.split('').sort().join('');
//     nS = nS.split('').sort().join('');
//     // for (let i = 0; i < oS.length; i++) {
//     //     if (oS[i] !== nS[i]) return false;
//     // }
//     return oS===nS;
// }

// const isAnagram = (oS, nS) => {
//     if (oS.length !== nS.length) return false;
//     const countOg = {};
//     const countCl = {};
//     for (let i = 0; i < oS.length; i++) {
//         countOg[oS[i]] = (countOg[oS[i]] || 0) + 1
//         countCl[nS[i]] = (countCl[nS[i]] || 0) + 1
//     }

//     for(const key in countOg){
//         if(countOg[key] !== countCl[key]) return false
//     }

//     return true;
// }


// console.log(isAnagram('anagraman1', 'nagaraman1'))

// --> TWO SUM <--
// ***********************
//  const twoSum = function (nums,t){
//     const map = new Map(); 
//     for (let i=0; i< nums.length; i++){
//         const complement = t - nums[i];
//         if(map.has(complement)){
//             console.log([map.get(complement), i]);
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);

//     }
// }

// twoSum([4, -1, -2, -4], -5); // Output: [2, 3]

// --> BEST TIME TO BUY AND SELL STOCKS <--
// **********************************************

// const maxProfit = function (prices) {
//     // let minPrice = 0;
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[i] < prices[j]) {
//                 maxProfit = Math.max(maxProfit, prices[j] - prices[i])
//             }
//         }
//     }
//     return maxProfit;
// }

// const maxProfit = function (prices) {
//     let minPrice = prices[0] || 0;
//     let maxProfit = 0;

//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < minPrice) {
//             minPrice = prices[i]
//         }
//         maxProfit = Math.max(maxProfit, prices[i] - minPrice)
//     }
//     return maxProfit
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
// console.log(maxProfit([7, 6, 4, 3, 1])) // 0
// console.log(maxProfit([2, 4, 1])) // 2


// --> FLATTEN ARRAY <--
// ***********************
// const arr = [1,2,[3,4,[5,6,[7,8,[9,[10]]]]]];

// const flatten = (arr) => {
//     const result = [];
//     if(!Array.isArray(arr)) return [arr];
//     for(const item of arr){
//         if(Array.isArray(item)){
//             result.push(...flatten(item))
//         } else {
//             result.push(item)
//         }
//     }
//     return result;
// }
// console.log("Flattened Array: ", flatten(arr)) // [1,2,3,4,5,6]

// --> SECOND LARGEST NUMBER <--
// ******************************
// const secondLargest = (arr) => {
//     // const uniqueArr = [...new Set(arr)];
//     // if(uniqueArr.length < 2) return -1;
//     // uniqueArr.sort((a,b) => b - a);
//     // return uniqueArr[1];
//     let ln = Number.NEGATIVE_INFINITY;
//     let snd = Number.NEGATIVE_INFINITY;
//     for(let i = 0 ; i < arr.length; i++){
//         if(arr[i] > ln){
//             snd = ln;
//             ln = arr[i];
//         }
//         else if (arr[i] !== ln && arr[i] > snd){
//             snd = arr[i];
//         }
//     }
//     return snd;
// }

// console.log(secondLargest([1, 2, 3, 4, 5, 5, 4, 3, 2, 1])) // 4
// console.log(secondLargest([10,10,5])) // 5
// console.log(secondLargest([-1, -2, -3, -4])) // -2

// --> Rotate Array by k steps <--
// ******************************
// const rotate = (arr, k) => {

//     let shiftedArr = []
//     if (k > 0){
//         if(k > arr.length) k = k % arr.length
//         shiftedArr = [...arr.slice(-k), ...arr.slice(0, arr.length - k)]
//     }
//   return shiftedArr;
// }


// const rotate = (arr, k) => {
// const reverse = (arr, start, end) => {
//     while (start < end) {
//         const temp = arr[start] 
//         arr[start++] = arr[end]
//         arr[end--] = temp
//     }
//     return arr;
// }
// if(k> 0){
//     k = k > arr.length ? k % arr.length : k
//     reverse(arr, 0, arr.length - 1)
//     reverse(arr, 0, k - 1)
//     reverse(arr, k, arr.length - 1)
//     return arr;
// }
// }



// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
// console.log(rotate([-1, -100, 3, 99], 1)); // [3,99,-1,-100]


// --> Remove duplicates from sorted array <--
// **************************************************

// const removeDuplicates = (arr) => {
//     let len = arr.length;
//     if(len === 0) return 0;
//     for(let i = 0; i < len - 1; i++){
//         if(arr[i] === arr[i+1]){
//             arr.splice(i+1, 1);
//             len--;
//             i--;
//         }
//     }
//     console.log(arr)
//     return arr.length;
// }

// const removeDuplicates = (arr) => { //without inbuilt methods
//   if(arr.length === 0) return 0;
//     let j = 0;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] !== arr[j]){
//             j++;
//             arr[j] = arr[i];
//         }
//     }
//     return j+1;
// }

// console.log(removeDuplicates([1, 1,2,2,2,2])) // 2
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5
// console.log(removeDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,4,555,555,666,666,666,666])) 

// const name = {
//     firstName: 'John',
//     lastName: 'Doe',

// }
// function getFullName(hometown, country) {
//     console.log(`${this.firstName} ${this.lastName}`);
//     // console.log(`Hometown: ${hometown}, Country: ${country}`);
// }

// const name2 = {
//     firstName: 'Jane',
//     lastName: 'Smith'
// }
// console.log(name.getFullName()) // John Doe


// function borrowing
// using call
// getFullName.call(name2, 'DehraDoon', 'India')// Jane Smith

// using apply
// getFullName.apply(name, ['DehraDoon', 'India'])// Jane Smith

// using bind
// const printDetails = getFullName.bind(name2, 'DehraDoon', 'India')// Jane Smith
// printDetails() // 

// const printname = getFullName.bind(name2)
// printname() // Jane Smith

// BIND PROTOTYPE
// Function.prototype.myBind=function(context,...args){
//     const obj = this;
//     return function(...newArgs){
//         console.log(obj.apply(context,[...args,...newArgs]) )
//     }
// }
// function getDetails(){
//     return `${this.firstName} ${this.lastName}`;
// }

// const myBi = getDetails.myBind(name2);
// myBi();

// FUNCTION CURRYING
// const multiply = function(a, b) {
//     return (a * b);
// }

// let multiplyby2 = multiply.bind(this,2);
// console.log(multiplyby2(4)) // 10

// DEBONCING
// const debounce = (fn, delay) => {
//     let timerId;
//     return function (...args) {
//         if (timerId) clearTimeout(timerId);
//         timerId = setTimeout(() =>
//             fn.apply(this, args)
//             , delay);
//     }
// }
// const onClick = debounce(() => {
//     console.log('Button clicked!');
// }, 1000);


// let sum = (a)=> (b) => b ? sum(a+b) : a;
// console.log(sum(1)(2)(3)(4)(10)()) // 20

// let throttle = function (func, del){
//     let timerId;
//     return function(...arguments){
//         if(!timerId){
//             func.apply(this, arguments);
//             timerId = setTimeout(() => {
//                 timerId = null;
//             }, del);
//         }
//     }
// }

// const onClick = throttle(() => {
//     console.log('Button clicked!');
// }, 1000);

// import express from 'express';
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(4000, () => {
//     console.log('Server is running on port 4000');
// });


// import fs from 'fs/promises';
// import EventEmitter from 'events';
// import { createServer } from 'http';
// async function readFile() {
//     try {
//         const data = await fs.readFile('f1.txt', 'utf8');
//         console.log('File contents:', data);
//     } catch (err) {
//         console.error('Error reading file:', err);
//     }
// }
// const emitter = new EventEmitter();
// emitter.on('greet', (data) => {
//     console.log('Greetings:', data);
// });
// emitter.emit('greet', 'Hello, World!');
// emitter.emit('greet', 'Rivi');

// // readFile();
// // fs.readFile('f1.txt', 'utf8').then(data => {
// //     console.log('File contents:', data);
// // }).catch(err => {
// //     console.error('Error reading file:', err);
// // })

// const app = createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, World!');
// });
// const onClick = debounce(() => {
//     console.log('Button clicked!');
// }, 1000);

// function throttle (fn, delay){
//     let timerId;
//     return function(...args){
//         if(!timerId){
//             fn.apply(this, args);
//             timerId=setTimeout(()=>{
//                 timerId = null;
//             }, delay)
//         }
//     }
// }
// function debounce(fn, delay){
//     let timerId;
//     return function(...args){
//         if(timerId) clearTimeout(timerId);
//         timerId = setTimeout(()=>{
//             fn.apply(this, args)
//         },delay)
//     }
// }

const target = {
  a: 4,
  b: {
    c: 5,
    d: [6, 7]
  },
  c: function () {
    console.log('printing a', this.a);
  }
};

const source = {
  a: 7,
  b: {
    f: 8,
    d: [1, 2]
  }
};

// function merge(target, source) {
//   const result = {};

//   const keys = new Set([
//     ...Object.keys(target),
//     ...Object.keys(source)
//   ]);

//   console.log({keys, trcKeys: Object.keys(target), srcKeys:Object.keys(source)})
//   for (const key of keys) {
//     const targetVal = target[key];
//     const sourceVal = source[key];

//     // property exists only in target
//     if (!(key in source)) {
//       result[key] = null;
//       continue;
//     }

//     // array => replace
//     if (Array.isArray(sourceVal)) {
//       result[key] = [...sourceVal];
//       continue;
//     }

//     // both are plain objects => recurse
//     if (
//       targetVal &&
//       sourceVal &&
//       typeof targetVal === 'object' &&
//       typeof sourceVal === 'object' &&
//       !Array.isArray(targetVal) &&
//       !Array.isArray(sourceVal)
//     ) {
//       result[key] = merge(targetVal, sourceVal);
//       continue;
//     }

//     // primitive/function => replace
//     result[key] = sourceVal;
//   }

//   return result;
// }

// MERGING OBJECTS
// function merge(trg,src){
//     const res = {}
//     const newSet = new Set([...Object.keys(src), ...Object.keys(trg)])

//     for(const key of newSet){
//         const srcVal = src[key]
//         const trgVal = trg[key]

//         if(!srcVal && trgVal){
//             res[key] = trgVal
//             continue;
//             // if(typeof trgVal === 'function'){
//             //     res[key] = null;
//             // }
//         }

//         if(Array.isArray(trgVal)){
//             res[key] = [...srcVal]
//             continue;
//         }
//         if(srcVal && trgVal 
//             && !Array.isArray(trgVal) && !Array.isArray(srcVal)
//         && typeof trgVal === 'object' && typeof srcVal==='object'){
//             res[key] = merge(trgVal, srcVal)
//             continue;
//         }
//         res[key] = srcVal;
//     }
//     return res;
// }

// const merged = merge(target, source);
// console.log(merged);


// POLYPHIL FOR MYBIND

Function.prototype.myBind = function (...args) {
  const cont = args[0];
  const fn = this;
  const params = args.slice(1)
  return function (...arg) {
    return fn.apply(cont, [...params, ...arg])
  }
}

const person = {
  name: "Rana"
};

function greet(city) {
  console.log(this.name, city);
}

const fn = greet.myBind(person);

// fn("Delhi");


// Promise.myAll = function(primises){
//   return new Promise((res,rej)=>{
//     const result = [];
//     let completed = 0;

//     if (primises.length ===0) {
//       res([])
//       return
//     }

//     primises.forEach((promise, index)=>{
//       Promise.resolve(promise)
//       .then(response=> {
//         result[index] = response;
//         completed++;
//         if(completed === primises.length){
//           res(result)
//         }
//       }).catch(rej)
//     })
//   })
// }
// const p1 = Promise.resolve("A");

// const p2 = new Promise(res => {
//   setTimeout(() => res("B"), 1000);
// });

// const p3 = Promise.resolve("C");

// Promise.myAll([p1, p2, p3])
//   .then(res=> console.log(res));

// Promise.myAllSettled = function(primises){
//   return new Promise((res,rej)=>{
//     const result = [];
//     let completed = 0;

//     if (primises.length ===0) {
//       res([])
//       return
//     }

//     primises.forEach((promise, index)=>{
//       Promise.resolve(promise)
//       .then(response=> {
//         result[index] = {
//           status:'fulfilled',
//           value: response
//         };

//       }).catch((err)=>{
//         result[index] = {
//           status:'rejected',
//           err
//         };
//       }).
//       finally(()=>{
//         completed++;
//         if(completed === primises.length){
//           res(result)
//         }
//       })
//     })
//   })
// }

// Promise.myRace = function(primises){
//   return new Promise((res,rej)=>{
//     const result = [];
//     let completed = 0;

//     if (primises.length ===0) {
//       res([])
//       return
//     }

//     primises.forEach((promise, index)=>{
//       Promise.resolve(promise)
//       .then(res).catch(rej)
//     })
//   })
// }

// Promise.myAny = function (primises) {
//   return new Promise((res, rej) => {
//     const result = [];
//     let rejected = 0;

//     if (primises.length === 0) {
//       rej(new AggregateError([]))
//       return
//     }

//     primises.forEach((promise, index) => {
//       Promise.resolve(promise)
//         .then(res).catch((err) => {
//           result[index] = err;
//           rejected++;
//           if (rejected === primises.length) {
//             rej(new AggregateError(err, "All Promises rejected"))
//           }
//         })
//     })
//   })
// }

// const p1 = Promise.reject("A");

// const p2 = new Promise((res, rej) => {
//   setTimeout(() => res("B"), 2000);
// });

// const p3 = Promise.reject("C");

// Promise.myAny([p1, p2, p3])
//   .then(res => console.log(res));

// // LEADING THROTTLE
// const throttle = function (fn, delay) {
//   let lastExecution = 0;
//   let timer;
//   return function (...args) {
//     const now = Date.now()
//     if (now - lastExecution >= delay) {
//       lastExecution = now;
//       fn.apply(this, args)
//     }

//   }
// }

// Trailing Throttle:
// const throttle = function(fn, delay){
//   let lastExecution = 0;
//   let timer;
//   let lastArgs;
//   let lastContext;
//     return function(...args){
//       const now = Date.now()
//        lastArgs = args;
//     lastContext = this;
    
//     const remaining =
//       delay - (now - lastExecution);
    
//       // if (now - lastExecution >= delay) {
//       //   lastExecution = now;
//       //   fn.apply(this,args)
//       // }

//       if (remaining <= 0){
//         if(timer){
//           clearTimeout(timer);
//           timer = null;
//         }
//         lastExecution = now;
//         fn.apply(this,args)
//       }else if(!timer){
//         timer = setTimerout(()=>{
//           lastExecution=Date.now();
//           timer=null;
//           fn.apply(lastContext,lastArgs)
//         },remaining)
//       }

//     }
//   }
//   console.log([].reduce((acc,curr)=>{
//     console.log()
//     return acc;
//   },[]))

// const obj1 = {
//   a:1,
//   b:{
//     c:[1,2,3],
//     d:function(){
//       console.log("old d")
//     }
//   },
//   e:function(){
//       console.log("old e")
//     }
// }

// const obj2 = {
//   a:2,
//   b:{
//     c:[4,5],
//   },
//   e:null,
//   f:function(){
//     console.log('new F')
//   }
// }

// function merge (trg,src){

//   const result = {}

//   const objKeys = new Set ([...Object.keys(src), ...Object.keys(trg)])
//   // console.log(key in objKeys)

//   for (const key of objKeys){
//     const srcVal = src[key]
//     const trgVal = trg[key]
    
//     if(!(key in src)){
//       result[key] = trgVal;
//       continue
//     }
//     if(Array.isArray(src[key])){
//       result[key] = srcVal;
//       continue;
//     }
//     if(srcVal && srcVal &&
//       typeof srcVal === 'object' && typeof trgVal === 'object' &&
//       !Array.isArray(srcVal) && !Array.isArray(trgVal)
//     ){
//       result[key] = merge(trgVal, srcVal)
//       continue
//     }
//     result[key] = srcVal
//   }

//   return result;
// }

// console.log(merge(obj1, obj2))

// function throttle (fn,delay){
//   let lastRun = 0;
//   let timer;
//   return function(...args){

//     const now = Date.now();
//     const remaining = delay - (now - lastRun);

//     if(remaining <=0){
//       timer=null;
//       lastRun = now;
//       fn.apply(this, args)
//     }
//     else if (!timer){
//       timer = setTimeout(()=>{

//         lastRun = Date.now();
//         timer = null;
//         fn.apply(this,args)
//       },remaining)
//     }
//   }
// }

// ???????????????????? DEEP CLONE ???????????????????? 

var obj = {
  a:1,
  b:{
    c:4, d:[1,2,3]
  },
  e:function(){
    console.log(this.a)
  }
}

obj.f = obj;

function deepClone (ob, map = new WeakMap()){
if(typeof ob !== 'object' || ob===null){
  return ob;
}

if(map.has(ob)){
  return map.get(ob)
}
const clone = Array.isArray(ob) ? [] : {}

map.set(ob, clone)
for(const key in ob){
  clone[key] = deepClone(ob[key], map)
}
return clone;
}

const obj2 = deepClone(obj)
console.log({obj,obj2})
// obj2.a=2
// obj2.b.d=2
// console.log({obj,obj2})