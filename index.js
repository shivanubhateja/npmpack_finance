var Promise = require("promise");
var request = require("request");
exports.getDetailsIntradayTimeSeries = function (symbol, interval) {
    return new Promise(function (resolve, reject) {
        request('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + symbol + '&interval=' + interval + 'min&apikey=W77LD4FPC2I3Z1X7', function (error, response, body) {
            if (error) {
                reject({ error: error, statusCode: response.statusCode });
            } else {
                resolve({ body: body, statusCode: response.statusCode });
            }
        })
    });
};
exports.getDetailsDailyTimeSeries = function (symbol) {
    return new Promise(function (resolve, reject) {
        request('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=W77LD4FPC2I3Z1X7', function (error, response, body) {
            if (error) {
                reject({ error: error, statusCode: response.statusCode });
            } else {
                resolve({ body: body, statusCode: response.statusCode });
            }
        })
    });
};

exports.getSimpleMovingAdjustedValues = function(symbol, interval, time_period, series_type){
    return new Promise(function(resolve, reject){
        request('https://www.alphavantage.co/query?function=SMA&symbol=' + symbol + '&interval=' + interval + 'min&time_period='+time_period+ '&series_type='+series_type+ '&apikey=W77LD4FPC2I3Z1X7', function(error, response, body){
            if (error) {
                reject({ error: error, statusCode: response.statusCode });
            } else {
                resolve({ body: body, statusCode: response.statusCode });
            }
        })
    })
}