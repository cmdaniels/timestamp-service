# timestamp-service

A simple API micro-service to parse natural and unix dates

### Example usage:

    https://quiet-dusk-2351.herokuapp.com/December%2030,%202015

##### OR

    https://quiet-dusk-2351.herokuapp.com/1451433600

### Example output:

    {
        "unix": 1451433600,
        "natural": "December 30, 2015"
    }
