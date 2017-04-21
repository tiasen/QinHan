/**
 * Created by 365969 on 2017/3/24.
 */
const webpack = require("webpack"),
      webpackDevMiddleware = require("webpack-dev-middleware"),
      webpackHotMiddleware = require("webpack-hot-middleware"),
      webpackDevConfig = require('./webpack.backstage.config');
const compiler = webpack(webpackDevConfig);
const express = require("express");
const path = require('path');
const app = express();
const consolidate = require('consolidate');
app.set('port',8801);
app.engine('html',consolidate.hogan);
app.set('view engine','html');
app.set('views',path.resolve(__dirname,'./backstage'))

app.use(webpackDevMiddleware(compiler,{
    publicPath : webpackDevConfig.output.publicPath,
    noInfo:true,
    hot:true,
    historyApiFallback:true,
    stats:{
        colors:true
    }
}));
app.use(webpackHotMiddleware(compiler));


app.get('/',(req,res) => {
    res.render('index');
    // res.redirect('/page')
});
// app.get('/page/*',(req,res) => {
//     res.render('index');
// });

app.use((req,res) =>{
    res.redirect('/');
})
app.listen(app.get('port'),() => {
    console.log(`Server Start at ${app.get('port')}`);
});