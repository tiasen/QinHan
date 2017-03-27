/**
 * Created by 365969 on 2017/3/24.
 */
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const consolidate = require('consolidate');
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.engine('html',consolidate.hogan);
app.set('view engine','html');
app.set('views',path.resolve(__dirname,'./dist'))
// app.use('/page',express.static(path.join('dist')));
// app.get('/',(req,res) => {
//     // res.set('Content-Type','text/html');
//     res.redirect('/page/');
// });
// app.get('/page/*',(req,res) => {
//     // res.set('Content-Type','text/html');
//     res.render('index');
//     // res.send('index');
// });
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

app.get('/api/menu',(req,res) =>{
    fs.readFile('./list.json','utf-8',(err,data) => {
        if(err) throw new Error(err);
        let json = JSON.parse(data);
        //console.log(json)
        setTimeout(function(){
            res.json(json);

        },1000)
    })

});


app.listen(8000, () => {
    console.log('server start at 8000')
})