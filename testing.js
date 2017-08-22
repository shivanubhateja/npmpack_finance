var a = require('./index');

a.getDetailsDailyTimeSeries('aapl').then(function(res){
    console.log(res)
})


a.getSimpleMovingAdjustedValues('aapl', 5, 60, "close").then(function(res){
    console.log(res)
})