# stock-directory

>**Installation**
```
npm install stock-directory
```
>**functions available**

>#1
>```
>getDetailsIntradayTimeSeries(stocksymbol: String, intervalInMinutes: Integer)
>```
>
> **returns** 
> Intraday time series (timestamp, open, high, low, close, volume) of the equity specified, updated realtime.
>
> **output**  
> returns a `promise`. 
>    If data is successfully fetched, promise gets resolved with data in format - 
>```	
>{ body: body, statusCode: response.statusCode  }
>```
>where `body` contains required data.
>
>`Else if` there is some error in fetching data a rejected promise is returned in format - 
>```
>{ error: error, statusCode: response.statusCode },
>```
>where `error` contains the cause of error.
>
>**usage**
>```
>var stock-directory = require('stock-directory');
>stock-directory.getDetailsIntradayTimeSeries('aapl', 10).then(function(res){
>   ...
>})
>```
>

>#2
>```
>getDetailsDailyTimeSeries(stocksymbol: String)
>```
>
>**returns**
> Daily time series (date, daily open, daily high, daily low, daily close, daily volume) of the equity specified.
> The most recent data point is the cumulative prices and volume information of the current trading day, updated realtime.
>
> **output**  
> return a `promise`. 
>    If data is successfully fetched, promise gets resolved with data in format - 
>```	
>{ body: body, statusCode: response.statusCode  }
>```
>where `body` contains required data.
>
>`Else if` there is some error in fetching data a rejected promise is returned in format - 
>```
>{ error: error, statusCode: response.statusCode },
>```
>where `error` contains the cause of error.
>
>**usage**
>```
>var stock-directory = require('stock-directory');
>stock-directory.getDetailsDailyTimeSeries('aapl').then(function(res){
>   ...
>})
>```
>

>#3
>```
>getSimpleMovingAdjustedValues(stocksymbol:String, intervalInMinutes:number, NoOfDataPointsUsed:Number, series_type:String)
>```
>**NOTE**
>`NoOfDataPointsUsed` represents Number of data points used to calculate each moving average value.
>Positive integers are accepted (e.g. NoOfDataPointsUsed=60, NoOfDataPointsUsed=200)
>
>`series_type` represents
>The desired price type in the time series. Four types are supported: `close`, `open`, `high`, `low`
>
>
>**returns**
> This API returns the simple moving average (SMA) values.
>Technical indicator values like SMA are updated realtime: the latest data point is derived from the current trading day of a given equity.
>
> **output** 
> return a `promise`. 
>    If data is successfully fetched, promise gets resolved with data in format - 
>```	
>{ body: body, statusCode: response.statusCode  }
>```
>where `body` contains required data.
>
>`Else if` there is some error in fetching data a rejected promise is returned in format - 
>```
>{ error: error, statusCode: response.statusCode },
>```
>where `error` contains the cause of error.
>
>**usage**
>```
>var stock-directory = require('./index');
>
>stock-directory.getSimpleMovingAdjustedValues('aapl', 5, 60, "close").then(function(res){
>   ...
>})
>```