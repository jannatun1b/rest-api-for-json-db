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
// import { readFileSync, writeFileSync } from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Convert import.meta.url → __dirname (ESM fix)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ===================== GET ALL USERS =====================
// export const getAllUser = (req, res) => {
//   const filePath = path.join(__dirname, '../db/users.json');

//   const users = readFileSync(filePath, 'utf-8');

//   res.send(JSON.parse(users));
// };

// // ===================== CREATE USER =====================
// export const createUser = (req, res) => {
//   console.log('POST HIT:', req.body);

//   const { name, skill } = req.body;

//   // Validation
//   if (!name || !skill) {
//     return res.status(400).json({
//       message: 'Name & skill is required',
//     });
//   }

//   const filePath = path.join(__dirname, '../db/users.json');

//   // Load old users
//   const users = JSON.parse(readFileSync(filePath, 'utf-8'));

//   // Add new user
//   users.push(req.body);

//   // Save file
//   writeFileSync(filePath, JSON.stringify(users, null, 2));

//   res.status(201).json({
//     message: 'User created successfully',
//     data: req.body,
//   });
// };

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

  const { name, skill, id } = req.body;

  // Validation
  if (!name || !skill || !id) {
    return res.status(400).json({
      message: 'ID, Name & Skill are required',
    });
  }

  const filePath = path.join(__dirname, '../db/users.json');
  const users = JSON.parse(readFileSync(filePath, 'utf-8'));

  users.push({ id, name, skill });

  writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.status(201).json({
    message: 'User created successfully',
    data: { id, name, skill },
  });
};

// ===================== GET SINGLE USER =====================
export const getSingleUser = (req, res) => {
  const filePath = path.join(__dirname, '../db/users.json');
  const users = JSON.parse(readFileSync(filePath, 'utf-8'));

  const { id } = req.params;
  const user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
};

// ===================== UPDATE USER =====================
export const updateUser = (req, res) => {
  const filePath = path.join(__dirname, '../db/users.json');
  const users = JSON.parse(readFileSync(filePath, 'utf-8'));

  const { id } = req.params;
  const { name, skill } = req.body;

  const userIndex = users.findIndex((u) => u.id == id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    skill: skill || users[userIndex].skill,
  };

  writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.json({
    message: 'User updated successfully',
    data: users[userIndex],
  });
};

// ===================== DELETE USER =====================
export const deleteUser = (req, res) => {
  const filePath = path.join(__dirname, '../db/users.json');
  const users = JSON.parse(readFileSync(filePath, 'utf-8'));

  const { id } = req.params;

  const newUsers = users.filter((u) => u.id != id);

  if (newUsers.length === users.length) {
    return res.status(404).json({ message: 'User not found' });
  }

  writeFileSync(filePath, JSON.stringify(newUsers, null, 2));

  res.json({ message: 'User deleted successfully' });
};
