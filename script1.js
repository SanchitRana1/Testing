import fs from 'fs'
import crypto from 'crypto'
setTimeout(() => console.log('Hello after Timer1'), 0);

setImmediate(() => console.log('Hello immediately'));

console.log('Top level code')
// // const data = fs.readFileSync('file.txt', 'utf-8');
// // console.log(data);
const p1 = new Promise((res, rej) => {
  res('Hello from promise');
});

process.nextTick(() => console.log('Hello from next tick'));

p1.then(res => console.log(res));
// process.env.UV_THREADPOOL_SIZE = 10;

const start = Date.now();
fs.readFile('file.txt', 'utf-8', (err, data) => {
  console.log('Polling')

  setTimeout(() => console.log('Hello after Timer2'), 0);
  // setTimeout(() => console.log('Hello after Timer3'), 5000);
  setImmediate(() => console.log('Hello immediately2'));

//   // CPU intensive task

  crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log(Date.now()-start,'Password encrypted');
  });
   crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log(Date.now()-start,'Password encrypted');
  });
   crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log(Date.now()-start,'Password encrypted');
  });
   crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log(Date.now()-start,'Password encrypted');
  });
    crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log(Date.now()-start,'Password encrypted');
  });
    crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log(Date.now()-start,'Password encrypted');
  });
    crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log(Date.now()-start,'Password encrypted');
  });
    crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log(Date.now()-start,'Password encrypted');
  });

});

// // class LRUCache {
// //   constructor(capacity) {
// //     this.capacity = capacity;
// //     this.length = 0;
// //     this.head = null;
// //     this.tail = null;
// //     this.map = new Map();
// //   }

// //   #removeNode(node) {
// //     if (!node) return;
// //     if (node.prev) {
// //       node.prev.next = node.next;
// //     }
// //     if (node.next) {
// //       node.next.prev = node.prev;
// //     }
// //     if (node === this.head) {
// //       this.head = node.next;
// //     }
// //     if (node === this.tail) {
// //       this.tail = node.prev;
// //     }
// //   }


// //   get(key) {
// //     if (!this.map.has(key)) {
// //       return null;
// //     }
// //     const node = this.map.get(key);
// //     this.#removeNode(node);
// //     node.next = this.head;
// //     node.prev = null;

// //     if (this.head) {
// //       this.head.prev = node;
// //     }
// //     this.head = node;

// //     if (this.tail === null) {
// //       this.tail = node;
// //     }
// //     // this.cache.set(key, value);
// //     // return value;
// //   }
// //   put(key, value) {
// //     if (this.length === this.capacity) {
// //       if (!this.map.has(key)) {
// //         this.#removeNode(this.tail);
// //         this.length -= 1;
// //       }
// //     }

// //     if (this.map.has(key)) {
// //       this.#removeNode(this.map.get(key));
// //     }

// //     const node = {
// //       next: this.head,
// //       prev: null,
// //       key,
// //       value
// //     };

// //     if (this.head) {
// //       this.head.prev = node;
// //     }

// //     this.map.set(key, node);
// //     this.head = node;

// //     if (this.tail === null) {
// //       this.tail = node;
// //     }

// //     this.length += 1;
// //   }

// //   debug() {
// //     let current = this.head;
// //     const arr = []
// //     while (current !== null) {
// //       arr.push(current)
// //       current = current.next;
// //     }
// //     // console.log({ arr })
// //     return arr.reduce((acc, cur) => acc.concat(`[[${cur.key}]: [${cur.value}]]-->`), '')
// //   }
// // }

// // const cache = new LRUCache(3);
// // cache.put(1, 1);
// // cache.put(2, 2);
// // cache.put(3, 3);
// // cache.put(4, 4);
// // cache.put(5, 5);
// // cache.put(6, 6);
// // cache.get(4);
// // cache.get(5);

// // cache.get(10);
// // console.log(cache.debug());

// import fs from 'fs';
// import crypto from 'crypto'
// import os from 'os';
// import cluster from 'cluster';
// import express from 'express';

// const cpus = os.cpus().length;
// if(cluster.isPrimary){
//   console.log(`Primary ${process.pid} is running`);
//   for(let i = 0; i < cpus; i++){
//     cluster.fork();
//   }
// }else{
//   const app = express();
//   const PORT = 3000;
//   app.get('/', (req, res) => {
//     res.send(`Hello from worker ${process.pid}`);
//   });
//   app.listen(PORT, () => {
//     console.log(`Worker ${process.pid} started on port ${PORT}`);
//   });
// }