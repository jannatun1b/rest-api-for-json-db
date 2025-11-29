// import express from 'express';
// import colors from 'colors';
// import dotenv from 'dotenv';
// import userRoute from './routes/user.js';

// dotenv.config();

// const PORT = process.env.PORT || 8080;

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Routes
// app.use('/api/v1/user', userRoute);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`.bgGreen.black);
// });
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import userRoute from './routes/user.js';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen.black);
});
