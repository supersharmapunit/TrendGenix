import express from 'express';
import { chatAI } from '../../services/chatService';

const router = express.Router();

router.get('/', async (req, res) => {
    const response = await chatAI('learnt', 'typescript basics and how to setup it and use it');
    res.json(response);
});

export const V1Router = router;