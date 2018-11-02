var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var Hash = require('../Lila_tools/Hash');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6644',
    port: '6644',
    database: 'Lila',
    insecureAuth: true
});

function parseQuery(query, f) {
    return [
        [query.SC, query.name, f(query.SC + query.name)]
    ];
};

function parseUser(query) {
    return [
        [query.GSC, query.id, query.password, query.json]
    ];
};

/* GET home page. */
router.get('/new', function (req, res, next) {
    var query = req.query;
    connection.query("insert into Service(SC, group_name, group_SC) values ?", [parseQuery(query, (name) => Hash.makeHash(name))], (er) => {
        res.send({
            status: (!er),
            secretKey: (!er) ? Hash.makeHash(query.name) : ""
        });
    });
});

router.get('/add', function (req, res, next) {
    var query = req.query;
    console.log(query);
    connection.query("insert into GroupTable(group_SC, id, password, user_json) values ?", [parseUser(query)], (er) => {
        console.log(er);
        res.send({
            status: (!er)
        });
    });
});

module.exports = router;
