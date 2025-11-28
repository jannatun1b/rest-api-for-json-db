import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url → __dirname (ESM fix)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllUser = (req, res) => {
  // Correct path join
  const filePath = path.join(__dirname, '../db/users.json');

  // Read file
  const users = readFileSync(filePath, 'utf-8');

  res.send(users);
};

export const createUser = (req, res) => {
  console.log('POST HIT:', req.body);
  res.send('POST working');
};
