var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

var app = express();

if (process.env.JAWSDB_URL) {
    var pool = mysql.createPool(process.env.JAWSDB_URL)
} else {
    var pool = mysql.createPool({
    connectionLimit: 100,
    host: '',
    user: '',
    password: '',
    database: ''
});

};

pool.getConnection(function(err, connection) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error connecting database");
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(process.cwd() + '/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
})

app.get('/test', function(req, res) {

    pool.query('SELECT * FROM survey_question', function(error, rows, fields) {

        if (error) console.log('There was a query error');

        res.json(rows);
    })
});

app.get('/tables', function(req, res) {

    pool.query('SHOW tables', function(error, rows, fields) {

        if (error) console.log('There was a query error');

        res.json(rows);
    })

});

app.post('/search/:query', function(req, res) {

    var query = req.params.query;
    console.log('req: ' + query);
    pool.query('SELECT * FROM ' + query + ' LIMIT 150', function(error, rows, fields) {

        if (error) console.log('There was a query error');

        res.json(rows);
    });

});

app.post('/rows/:table/:start/:end', function(req, res) {

    var table = req.params.table;
    var start = req.params.start;
    var end = req.params.end;
    var limit = parseFloat(end) - parseFloat(start) + 1;
    console.log('table: ' + table);
    console.log('start: ' + start);
    console.log('end: ' + end);
    console.log('limit ' + limit);
    pool.query('SELECT * FROM ' + table + ' LIMIT ' + start + ', ' + limit, function(error, rows, fields) {

        if (error) console.log('There was a query error');

        res.json(rows);
    });

});

app.get('/sql/:sqlQuery', function(req, res) {

    var sqlQuery = req.params.sqlQuery;
    console.log('sqlQuery: ' + sqlQuery);

    pool.query(sqlQuery, function(error, rows, fields) {

        if (error) {
            console.log('There was a query error');
            res.json(error);
        }

        if (!error) {
            res.json(rows);
        }
    })

});

app.post('/sql/:sqlQuery', function(req, res) {

    var sqlQuery = req.params.sqlQuery;
    console.log('sqlQuery: ' + sqlQuery);

    pool.query(sqlQuery, function(error, rows, fields) {

        if (error) {
            console.log('There was a query error');
            res.json(error);
        }

        if (!error) {
            res.json(rows);
        }

    })

});

app.get('/request/:table/:itemID', function(req, res) {

    var table = req.params.table;
    var itemID = req.params.itemID;

    pool.query('SELECT * FROM ' + table + ' WHERE itemID = ' + itemID, function(error, rows, fields) {

        if (error) {
            console.log('There was a query error');
            res.json(error);
        }

        if (!error) {
            res.json(rows);
        }
    })

});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
