import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect';
import postRoutes from './routes/postRoutes';
import dalleRoutes from './routes/dalleRoutes';

dotenv.config();


const app: Express = express();
const port = process.env.PORT;
const mongoConnection = process.env.MONGODB_URL;
app.use((cors()));
app.use(express.json({limit : '50mb'}));
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from DALL-EE');
});

const startServer = async() => {
  try {
    connectDB(mongoConnection!);
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error)
  }
}

startServer();