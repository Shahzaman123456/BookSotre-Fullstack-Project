import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from '../Backend/route/book.route.js'
import cors from 'cors'
import userRouter from '../Backend/route/user.route.js'

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use(cros({
  origin: ['http://localhost:3000' ,"https://booksotre-fullstack.netlify.app"]
}));

 
const  PORT = process.env.PORT || 4000;

// connect to MongoDB
const url = process.env.MONGODB_URL;  // check .env spelling
try {
  await mongoose.connect(url);
  console.log("✅ Connected to MongoDB");
} catch (error) {
  console.error("❌ Database connection error:", error);
}

// // default route
app.get("/", (req, res) => {
  res.send({
    activestatus: true,
    error: false,
  });
});
 
// defining route..
app.use('/book',bookRoute)
app.use("/users",userRouter)


// start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

