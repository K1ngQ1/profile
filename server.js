const express = require("express");
const next = require("next");

//const functions and items for later use 
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        //const the express server
        const server = express();
        //constructs actualPage and queryParams for use in api fetch
        server.get('/page/:id', (req, res) => {
            const actualPage = '/page'
            const queryParams = {id: req.params.id}
            app.render(req, res, actualPage, queryParams)
        })
        //default handler on all links
        app.get('*', (req, res) => {
            return handle(req,res)
        })
        //listen for the port that server has to look at
        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('ready on http://localhost:3000');
        });
    })
    //error catch
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
