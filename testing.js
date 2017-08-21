var a = require('./index');

a.getDetailsDailyTimeSeries('aapl').then(function(res){
    console.log(res)
})
