# stock-directory

>**Installation**
```
npm install stock-directory
```
>**functions available**


>```
>getDetailsIntradayTimeSeries(stocksymbol: String, intervalInMinutes: Integer)
>```
>
>`returns` intraday time series (timestamp, open, high, low, close, volume) of the equity specified, updated realtime.
>
> `output` : return a `promise`. 
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

>```
>getDetailsDailyTimeSeries(stocksymbol: String)
>```
>
>`returns` daily time series (date, daily open, daily high, daily low, daily close, daily volume) of the equity specified.
> The most recent data point is the cumulative prices and volume information of the current trading day, updated realtime.
>
> `output` : return a `promise`. 
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

