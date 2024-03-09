import { SERVER_PORT } from './config/serverConfig';
import express from 'express';
import { chatAI } from './services/chatService';

const app = express();
const PORT = SERVER_PORT || 3001;

app.get('/', async (req, res) => {
    const response = await chatAI();
    res.json(response);
});

function setupAndStartServer() : void {
    app.listen(PORT, () : void => {
        return console.log(`Express is listening at http://localhost:${PORT}`);
});
}

setupAndStartServer();