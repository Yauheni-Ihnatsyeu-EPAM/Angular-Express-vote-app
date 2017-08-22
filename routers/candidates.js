const express = require('express');
const queries = require('../modules/db/mysql/queries');
var router = express.Router();

router.get('/', function(req, res, next) {
    queries.getCandidates((err, response) => {
        if (err) {
            res.status(404);
            next();
        };
        res.status(200).json(response);
    });
});

router.get('/:id', function(req, res, next) {
    queries.getCandidate(req.params.id, (err, response) => {
        if (err) {
            res.status(404);
            next();
        };
        res.status(200).json(response);
    });
});

router.post('/', function(req, res, next) {
    queries.addCandidate(req.body.name, (err, response) => {
        if (err) {
            res.status(404);
            next();
        };
        res.status(201).json(req.body);
    });
});

router.delete('/:id', function(req, res, next) {
    queries.deleteCandidate(req.params.id, (err, response) => {
        if (err) {
            res.status(404);
            next();
        };
        res.status(200).json(response);
    });
});

router.put('/:id', function(req, res, next) {
    queries.updateCandidates(req.body.id, req.body.name, (err, response) => {
        if (err) {
            res.status(404);
            next();
        };
        res.status(200).json(req.body);
    });
});


module.exports = router;