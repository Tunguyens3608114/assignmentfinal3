//import libraries
var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk= require('monk');

//you need to update wp with your own database name
var db = monk('mongodb://admin:nth200486@ds255282.mlab.com:55282/shoppingonline'); //connect to database



//create neccessary objects
var app = express();
var router = express.Router();

//use objects in app
//app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    req.db = db;
    next();
});

//client side routing
app.set('views', __dirname + '/views');

app.get('/home', function (req, res) {
    res.render('home.ejs');

});

//serber side routing
app.use('/', router);

// products
router.get('/products', function(req, res) {
    req.db.collection('products').find({}, { "limit": 100 }, function (err, docs) {
        res.json(docs);
    });
});

router.get('/products/:id', function(req, res){
    req.db.collection('products').findOne({ _id: req.params.id }, function(err, docs){
        res.json(docs);
    })
});
router.delete('/products/:id', function(req, res) {
    req.db.collection('products').remove({ _id: req.params.id }, function (e, docs) {
        res.json(docs);
    })
});

router.post('/products', function(req, res) {
    req.db.collection('products').insert(req.body, function (e, docs) {
        res.json(docs);
    });
});



router.put('/products/:id', function(req, res) {
    req.db.collection('products').findOneAndUpdate({ _id: req.params.id }, req.body, function(err, docs){
        res.json(docs);
    })
});





//productTypes
router.get('/productTypes', function(req, res) {
    req.db.collection('productTypes').find({}, { "limit": 100 }, function (err, docs) {
        res.json(docs);
    });
});

router.get('/productTypes/:id', function(req, res){
    req.db.collection('productTypes').findOne({ _id: req.params.id }, function(err, docs){
        res.json(docs);
    });
});

router.delete('/productTypes/:id', function(req, res) {
    req.db.collection('productTypes').remove({ _id: req.params.id }, function (e, docs) {
        res.json(docs);
    });
});

router.post('/productTypes', function(req, res) {
    req.db.collection('productTypes').insert(req.body, function (e, docs) {
        res.json(docs);
    });
});



router.put('/productTypes/:id', function(req, res) {
    req.db.collection('productTypes').findOneAndUpdate({ _id: req.params.id }, req.body, function(err, docs){
        res.json(docs);
    });
});



//register
router.get('/registers', function(req, res){
    req.db.collection('registers').find({}, { "limit": 100 }, function(err, docs){
        res.json(docs);
    });
});

router.get('/registers/:id', function(req, res){
    req.db.collection('registers').findOne({ _id: req.params.id }, function(err, docs){
        res.json(docs);
    });
});
router.delete('/registers/:id', function(req, res){
    req.db.collection('registers').remove({ _id: req.params.id }, function(err, docs){
        res.json(docs);
    });
});

router.post('/registers', function(req, res){
    req.db.collection('registers').insert(req.body, function(err, docs){
        res.json(docs);
    });
});



router.put('/registers/:id', function(req, res){
    req.db.collection('registers').findOneAndUpdate({ _id: req.params.id }, req.body, function(err, docs){
        res.json(docs);
    });
});



// app.listen(app.get('port'), function () {
//     console.log('Server is running on port', app.get('port'));
// });

module.exports = app;
app.listen(8080)