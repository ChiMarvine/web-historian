var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var url = require('url');
// require more modules/folders here!

var asset = archive.paths.siteAssets + "/index.html";
var sites = archive.paths.archivedSites ;


var actions = {
  'GET': function(req, res){
    
    if( req.url === "/"){
      helpers.serveAssets(res, asset);
    } else {
      helpers.serveAssets(res, sites + "/" + req.url);
    }
  },

  'POST': function(req, res){
    
  },

  'OPTIONS': function(req, res){
    helpers.serveAssets(res, asset);
  }
}

exports.handleRequest = function (req, res) {
  var action = actions[req.method];
  if(action){
    action(req, res);
  } else {
    console.log('404');
  }
};

