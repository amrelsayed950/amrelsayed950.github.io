const calc = require('../controller/calculate');
const router = require('express').Router();

router.post('/', calc.numberOperation);

router.get('/results', (req, res) => {

    console.log(req.query);
  //  res.send('The result is: ' + req.query.results);



    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
    <html>
    <head><meta charset=\"utf-8\"/>
    <title>Calculator Web Site</title>
    </head>
    <body>
    <p>The result is: ${String(req.query.results)}</p>

    <input type="button" value="Back to front page!" onclick="history.back()">
   
    </body>
    </html> ` );
});

module.exports = router;