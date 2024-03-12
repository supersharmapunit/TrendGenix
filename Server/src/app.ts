import { SERVER_PORT } from './config/serverConfig';
import express from 'express';
import { ApiRouter } from './router';

const app = express();
const PORT = SERVER_PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', ApiRouter);

function setupAndStartServer() : void {
    app.listen(PORT, () : void => {
        return console.log(`Express is listening at http://localhost:${PORT}`);
});
}

setupAndStartServer();