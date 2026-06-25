import cluster from 'cluster';
import os from 'os';
import express from 'express';

const numCPUs = os.cpus().length; 
if(cluster.isPrimary){
  // console.log(`Primary ${process.pid} is running`);
  for(let i = 0; i < numCPUs; i++){
    cluster.fork(); // creating worker processes
  }
}else{
  const app = express();
  const PORT = 3000;
  app.get('/', (req, res) => {
    res.send(`Hello from worker ${process.pid}`);
  });
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started on port ${PORT}`);
  });
}
