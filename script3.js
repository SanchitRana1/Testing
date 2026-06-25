function printFullName(...args) {
  console.log(this.firstName, this.lastName, args[0], args[1])
}

let p1 = {
  firstName: 'Ak',
  lastName: 'vs Ak',
  location: 'Bangalore'
}
const p2 = {
  firstName: 'Pk',
  lastName: 'vs Pk'
}

// printFullName.apply(p1)

// Polyphill for Bind
Function.prototype.myBind = function (...cont) {

  const obj = this;
  const params = cont.slice(1)
  return function (...args) {
    obj.apply(cont[0], [...params, ...args])
  }
}

// const prt = printFullName.myBind(p2)
// prt("chamoli", "Dharali")

// const arr = ["p1","p2","p3"]
// const result = arr.some(item=>item==='p1')
// console.log(result)

// Array.prototype.mySome = function(cont){
//   const res  = this.find(cont)
//   return res ? true : false
// }
// const res = arr.mySome(item=>item==='p4c ')
// console.log(res)

// sum(1)(2)(3)(4)

const sum = (a) => {
  return function (b) {
    return b ? sum(a + b) : a
  }
}

// const sum = a=>b=>b ? sum(a+b): a

console.log(sum(1)(2)(3)(20)())


function onClick() {
  console.log("test")
}

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)

  }
}

const throttle = (fn, delay) => {
  let timer;
  return function (...args) {
    if (!timer) {
      fn.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    }
  }
}

const debFn = debounce(onClick, 2000)

setImmediate(() => console.log("immediate"));
setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => 
  console.log("promise")
)

process.nextTick(() => console.log("nextTick"));

console.log("sync");