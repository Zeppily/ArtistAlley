import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('hello from profile end point'));

export default router;
