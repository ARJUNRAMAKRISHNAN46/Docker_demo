const express = require("express");

const app = express();

app.use(express.json());

app.get('/',(req, res) => {
    res.send('hello');
})

const server = app.listen(3000, () => {
  console.log(`server started on port ${3000}`);
});
