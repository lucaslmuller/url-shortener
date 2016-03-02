module.exports = function(app){
    var fs = require("fs");
    var marked = require('marked');
    
    app.get("/", function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        
        fs.readFile('README.md', function(err, data){
            if(err) console.log(err);
           res.end(marked(data.toString())); 
        });
    });
}