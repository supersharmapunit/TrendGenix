import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

function setupAndStartServer() : void {
    app.listen(PORT, () : void => {
        return console.log(`Express is listening at http://localhost:${PORT}`);
    });
}

setupAndStartServer();