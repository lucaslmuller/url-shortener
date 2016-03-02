module.exports = function(app){
    const Model = require("./Model");
    
    Model();
    
    app.get("/:id", function(req, res) {
        
        Model.findOne({short_url: req.headers['x-forwarded-proto'] + "://" + req.headers.host + "/" + req.params.id }, function(err, data){
            if(err) console.log(err);
            if(data){
                res.redirect(data.original_url);
            } else {
                res.end(JSON.stringify({error: "Short URL doesn't exist"}));
            }
            
        });
    });
}