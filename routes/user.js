// import express from 'express';
// import { createUser, getAllUser } from '../controllers/usercontroller.js';

// const router = express.Router();

// router.get('/', getAllUser);
// router.post('/', createUser);

// export default router;
import express from 'express';
import { getAllUser, createUser } from '../controllers/usercontroller.js';

const router = express.Router();

router.get('/', getAllUser);
router.post('/', createUser);

export default router;
