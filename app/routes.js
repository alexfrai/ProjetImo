let homeController = require('../src/controllers/HomeController.js');

module.exports = (app) => {

    app.get('/',(req,res) => {
       // res.render('addTest')
        homeController.index(req,res)
    });
    
    app.get('/store',(req,res) => {
        //res.render('store')
        homeController.store(req,res)
    });
    
    app.get('/inscription',(req,res) => {
        //res.render('Inscription')
        homeController.inscription(req,res)
    });

};