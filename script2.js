setImmediate(() => console.log('Hello immediately1'));
setTimeout(() => console.log('Hello timeout1'), 0);

const p1 = new Promise((res, rej) => {
  res('Hello from promise1');
});

process.nextTick(() => console.log('Hello from next tick1'));

p1.then(res => console.log(res));

// const obj = {
//   name: "Rana",
//   fn: function() {
//     console.log(this.name);
//   }
// };
// obj.fn(); // Rana

// import fs from 'fs';

// const data = fs.readFileSync('f1.txt', 'utf-8');
// console.log(data);

// import express from 'express';
// import fs from 'fs';
// import users from './MOCK_DATA.json' assert { type: 'json' };
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));


// app.get('/users',(req, res)=>{
//   const html = users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('');
//   res.send(`<ul>${html}</ul>`);
//   res.end();
// })
// .get('/users/:id',(req, res)=>{
//   const user = users.find(user => user.id === parseInt(req.params.id));
//   if(!user){
//     return res.status(404).json({message: 'User not found'})
//   }
//   const html = `<li>${user.first_name} ${user.last_name}</li>`;
//   res.send(`<ul>${html}</ul>`);
//   res.end();
// })
// .get('/api/users',(req, res)=>{
//   res.json(users)
// })
// .post ('/api/users',(req, res)=>{
//   // code to add user to database
//   const {body} = req;
//   console.log({body})
//   users.push({...body, id: users.length + 1});
//   fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//       return res.status(500).json({message: 'Internal Server Error'})
//     }
//     return res.json({message: 'User added successfully', status: 'create pending'})
//   });
// })


// app.route('/api/users/:id')
// .get((req, res)=>{
//   const user = users.find(user => user.id === parseInt(req.params.id));
//   if(!user){
//     return res.status(404).json({message: 'User not found'})
//   }
//   res.json(user)
// })
// .put((req, res)=>{
//   return res.json({message: 'User updated successfully', status: 'update pending'})
// })
// .delete((req, res)=>{
//   return res.json({message: 'User deleted successfully', status: 'delete pending'})
// })

// app.listen(4000, () => {
//     console.log('Server is running on port 4000');
// });