class HomeController {
    index(req,res){
        res.render('index')
    }
    inscription(req,res){
        res.render('inscription')
    }
    store(req,res){
        res.render('store')
    }
};

module.exports = new HomeController();