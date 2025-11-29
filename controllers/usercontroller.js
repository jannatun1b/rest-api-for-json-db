// import { readFileSync, writeFileSync } from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Convert import.meta.url → __dirname (ESM fix)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export const getAllUser = (req, res) => {
//   // Correct path join
//   const filePath = path.join(__dirname, '../db/users.json');

//   // Read file
//   const users = readFileSync(filePath, 'utf-8');

//   res.send(users);
// };
// export const createUser = (req, res) => {
//   console.log('POST HIT:', req.body);

//   res.json({
//     message: 'POST working',
//     data: req.body,
//   });
// };
// //validation
// if (!name || !skill) {
//   res.status(400).json({
//     message: 'Name & skill is required',
//   });
// } else {
//   user.push(req.body);
//   writeFileSync(path.json(__dirname, '../db/user.json'), JSON.stringify(users));
//   res.status(201).json({
//     message: 'user created successful',
//   });
// }
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url → __dirname (ESM fix)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===================== GET ALL USERS =====================
export const getAllUser = (req, res) => {
  const filePath = path.join(__dirname, '../db/users.json');

  const users = readFileSync(filePath, 'utf-8');

  res.send(JSON.parse(users));
};

// ===================== CREATE USER =====================
export const createUser = (req, res) => {
  console.log('POST HIT:', req.body);

  const { name, skill } = req.body;

  // Validation
  if (!name || !skill) {
    return res.status(400).json({
      message: 'Name & skill is required',
    });
  }

  const filePath = path.join(__dirname, '../db/users.json');

  // Load old users
  const users = JSON.parse(readFileSync(filePath, 'utf-8'));

  // Add new user
  users.push(req.body);

  // Save file
  writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.status(201).json({
    message: 'User created successfully',
    data: req.body,
  });
};
