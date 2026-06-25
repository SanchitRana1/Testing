// Array.prototype.myMap = function (fn) {

//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(fn(this[i], i, this))
//   }
//   return result;
// }

// console.log([1,2,3,4,5].myMap(item=> item*2 ))


Array.prototype.myFilter = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result;
}

// console.log([1,2,3,4,5].myFilter(item=> item%2===0 ))

// Array.prototype.myReduce = function (fn, initVal) {
//   let acc = initVal;
//   let startIndex = 0;

//   if (acc === undefined) {
//     acc = this[0];
//     startIndex = 1;
//   }

//   for (let i = startIndex; i < this.length; i++) {
//     acc = fn(acc, this[i], i, this)
//   }
//   return acc;
// }

// const result = [1, 2, 3].myReduce(
//   (acc, curr) => acc + curr,
//   0
// );
// const result = [].reduce((a,b)=>a+b)
// console.log(result)

// ????????????????? CALL ????????????????????
// const user = {
//   name:'Rana',
//   age:26
// }
// function printName(){
//   console.log(this.name, ' || Call || ', this.age)
// }
// // printName.call(user)

// Function.prototype.myCall = function(context,...args){
//   context.fn = this;
//   const result = context.fn(...args)
//   delete context.fn;
//   return result
// }

// printName.myCall(user)

// ????????????????? APPLY ????????????????????
// const user = {
//   name:'Rana',
//   age:26
// }
// function printName(city, country){
//   console.log(this.name, ' || Call || ', this.age, city, country)
// }
// // printName.call(user)

// Function.prototype.myApply = function(context,args){
//   context.fn = this;
//   const result = context.fn(...args)
//   delete context.fn;
//   return result
// }

// printName.myApply(user, ['Delhi', 'Brazil'])

// ????????????????? BIND ????????????????????
// const user = {
//   name:'Rana',
//   age:26
// }
// function printName(city, country, seher){
//   console.log(this.name, ' || Call || ', this.age, city, country, seher)
// }
// // printName.call(user)

// Function.prototype.myBind = function(context,...args){
//  const that = this;
//   return function(...args1){
//     that.apply(context,[...args, ...args1])
// }
// }

// printName.myBind(user, 'Delhi', 'Brazil', 'Goregoan')()

// ????????????????? SOME ????????????????????
// const user = [1, 2, 3, 4, 5]

// Array.prototype.mySome = function (fn) {
//   let success = 0;
//   for(let i=0; i <this.length;i++){
//     if(fn(this[i],i,this)){
//       success+=1;
//     }
//   }  
//   return success>0
// }

// // const result = user.some(i=>i>5)
// const result = user.mySome(i=>i>4)
// console.log(result)

// ????????????????? EVERY ????????????????????
// const user = [1, 2, 3, 4, 5]

// Array.prototype.myEvery = function (fn) {
//   let success = 0;
//   for(let i=0; i <this.length;i++){
//     if(fn(this[i],i,this)){
//       success+=1;
//     }
//   }  
//   return success==this.length
// }

// // const result = user.some(i=>i>5)
// const result = user.myEvery(i=>i>=1)
// console.log(result)

// // ????????????????? PROMISE.ALL() ????????????????????
// const p1 = Promise.resolve('v1')
// const p2 = Promise.resolve('v2')
// const p3 = Promise.reject('v3')

// Promise.myAll = function (promises){
//   return new Promise((res,rej)=>{
//     let completed = 0;
//     const result = [];

//     if(promises.length===0){
//       res([])
//     }

//     promises.forEach((pr, idx)=>{
//       Promise.resolve(pr)
//       .then(resPr=>{
//         result[idx] = resPr;
//         completed +=1;

//         if(completed === promises.length){
//           res(result)
//         }
//       })
//       .catch(rej)
//     })

//   })
// }

// ????????????????? PROMISE.ALLSETTLED() ????????????????????
// const p1 = Promise.resolve('v1')
// const p2 = Promise.resolve('v2')
// const p3 = Promise.resolve('v3')

// Promise.myAllSettled = function (promises) {
//   return new Promise((res, rej) => {
//     let completed = 0;
//     const result = [];

//     if (promises.length === 0) {
//       res([])
//     }
//     promises.forEach((pr, idx) => {
//       Promise.resolve(pr)
//         .then(resPr => {
//           result[idx] = {
//             status: 'fulfilled',
//             value: resPr
//           };
//         })
//         .catch(err => {
//           result[idx] = {
//             status: 'rejected',
//             err
//           };
//         })
//         .finally(() => {
//           completed++;
//           console.log(completed)
//           if (completed === promises.length) {
//             res(result)
//           }
//         })
//     })
//   })
// }

// ????????????????? PROMISE.RACE() ????????????????????
// const p1 = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res('v1')
//   },2500)
// })
// const p2 = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res('v2')
//   },5000)
// })
// const p3 = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res('v3')
//   },2000)
// })

// Promise.myRace = function (promises) {
//   return new Promise((res, rej) => {
//     let completed = 0;
//     const result = [];

//     if (promises.length === 0) {
//       res([])
//     }
//     promises.forEach((pr, idx) => {
//       Promise.resolve(pr)
//         .then(res)
//         .catch(rej)
//     })
//   })
// }


// ????????????????? PROMISE.ANY() ????????????????????
// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('v1')
//   }, 2500)
// })
// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('v2')
//   }, 3000)
// })
// const p3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('v3')
//   }, 2000)
// })

// Promise.myAny = function (promises) {
//   return new Promise((res, rej) => {
//     let rejected = 0;
//     const result = [];

//     if (promises.length === 0) {
//       res([])
//     }
//     promises.forEach((pr, idx) => {
//       Promise.resolve(pr)
//         .then(res)
//         .catch(err => {
//           result[idx] = err
//           rejected += 1
//           if (rejected === promises.length) {
//             rej(new AggregateError(result,'All promises Rejected'))
//           }
//         })

//     })
//   })
// }
// Promise.myAny([p1, p2, p3]).then(res => console.log(res))



