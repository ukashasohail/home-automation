var express = require('express');
const app = express();
const path = require('path');

var gpio = require('rpi-gpio');
var gpiop = gpio.promise;

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

app.get('/lighton',(req,res)=>{
    gpiop.setup(7,gpio.DIR_OUT)
    .then(()=>{
        return gpiop.write(7, true);
    });
    res.send('light on');
});

app.get('/lightoff',(req,res)=>{
    gpiop.setup(7,gpio.DIR_OUT)
    .then(()=>{
        return gpiop.write(7, false);
    });
    res.send('light on');
});

app.listen(3000, ()=>{
    console.log('server on 3000');
});