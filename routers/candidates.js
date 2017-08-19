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

router.post('/:name', function(req, res, next) {
    queries.addCandidate(req.params.name, (err, response) => {
        if (err) {
            res.status(404);
            next();
        };
        res.status(201).json(response);
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

router.put('/:id/:name', function(req, res, next) {
    queries.updateCandidates(req.params.id, req.params.name, (err, response) => {
        if (err) {
            res.status(404);
            next();
        };
        res.status(200).json(response);
    });
});


module.exports = router;