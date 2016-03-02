module.exports = function(app){
    var validator = require('validator');
    var query;
    const Model = require("./Model");
    
    Model();
    
    app.get("/new/:url(*)", function(req, res){
        query = req.params.url;
       
        if(!validator.isURL(query)){
            res.end(JSON.stringify({error: "URL invalid"}));
        } 
        
        
        else {
            Model.find({original_url: query}, {_id: 0, __v: 0}, function(err, data){
                if(err) console.log(err);
        
                if(data.length == 0){
                    
                    Model.find({}, function(err, data){
                        if(err) console.log(err);
                        
                        Model.create({
                            original_url: query,
                            short_url: req.headers['x-forwarded-proto'] + "://" + req.headers.host + "/" + (parseInt(data.length) + 1)
                        });
                        
                        Model.findOne({original_url: query}, {_id: 0, __v: 0}, function(err, data){
                            if(err) console.log(err);
                            res.send(data);
                        });
                    });
                    
                    
                } else {
                    res.send(data[0]);
                }
                
            });
        }
        
    });
}