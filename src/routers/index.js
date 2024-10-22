import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';

const router = Router();
router.use('/contacts', contactsRouter); // this way '/contacts' path removed from contactsRouter
router.use('/auth', authRouter);
export default router;
