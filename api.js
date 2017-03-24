/**
 * Created by 365969 on 2017/3/24.
 */
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/api/stayTime', (req, res) => {
    console.log(req.query);
    // fs.writeFile('./data/data.txt',function())
    var str = JSON.stringify(req.query);
    var date = new Date().toLocaleString();
    fs.appendFile('./data/data.txt', date, function (err) {
        if (err) throw err;
        fs.appendFile('./data/data.txt', str, function (err) {
            if (err) throw err;
        });
    });

    res.json(req.query);
});

app.get('/api/meal/list',(req,res) =>{
    fs.readFile('./mock/list.json','utf-8',(err,data) => {
        if(err) throw new Error(err);
        let json = JSON.parse(data);
        res.json(json);
    })

});


app.listen(8000, () => {
    console.log('server start at 8000')
})