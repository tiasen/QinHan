/**
 * Created by 365969 on 2017/3/24.
 */
const express = require("express");
const app = express();

app.set('port',3333);
app.use(express.static('dist'));

app.get('/',(req,res) => {
    app.sendFile('./dist/index.html');
});
app.listen(app.get('port'),() => {
    console.log(`Server Start at ${app.get('port')}`);
});