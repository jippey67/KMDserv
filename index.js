const express = require('express')
const app = express()
const port = 3000

const { exec } = require('child_process');

app.get('/:command', (req, res) => {
  let comm = req.params.command;
  exec(('~/komodo/src/komodo-cli '+comm), (err, stdout, stderr) => {
    if(err) {
      return;
    }
    //console.log(`stdout: ${stdout}`);
    res.send(`answer: ${stdout}`);
  });
  //res.send(answ);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
