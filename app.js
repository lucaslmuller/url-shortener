var express = require("express");
var mongoose = require("mongoose");
var fs = require("fs");
var marked = require('marked');
var shortid = require('shortid');
var validator = require('validator');

mongoose.connect("mongodb://"+process.env.IP+"/urls");

const Schema = mongoose.Schema;

const _schema = new Schema({
    original_url: String,
    short_url: String
});


var query;

const Model = mongoose.model("url", _schema);

const app = new express();

app.get("/", function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    
    fs.readFile('README.md', function(err, data){
        if(err) console.log(err);
       res.end(marked(data.toString())); 
    });
});

app.get("/:id", function(req, res) {
    query = req.params.url;
    
    Model.findOne({short_url: req.headers['x-forwarded-proto'] + "://" + req.headers.host + "/" + req.params.id }, function(err, data){
        if(err) console.log(err);
        if(data){
            res.redirect(data.original_url);
        } else {
            res.end(JSON.stringify({error: "Short URL doesn't exist"}));
        }
        
    });
});

app.get("/new/:url(*)", function(req, res){
    query = req.params.url;
   
    if(!validator.isURL(query)){
        res.end(JSON.stringify({error: "URL invalid"}));
    } 
    
    
    else {
        Model.find({original_url: query}, {_id: 0, __v: 0}, function(err, data){
            if(err) console.log(err);
    
            if(data.length == 0){
                
                var short = req.headers['x-forwarded-proto'] + "://" + req.headers.host + "/" + shortid.generate();
                
                Model.create({
                    original_url: query,
                    short_url: short
                });
                
                
                Model.findOne({original_url: query}, {_id: 0, __v: 0}, function(err, data){
                    if(err) console.log(err);
                    res.send(data);
                });
                
                
            } else {
                res.send(data[0]);
            }
            
        });
    }
    
});

app.listen(process.env.PORT || 8080);