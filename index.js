"use strict";
const xml2js = require('xml2js');
const parser = new xml2js.Parser;
const fs = require('fs');
const async = require('async');

fs.readdir('.',function(err,files){
	async.eachLimit(files,1,dealFile,function(){
	console.log('done');
	})
});

function dealFile(file, cb){
		if(file.slice(-4)==='.xml'){
			fs.readFile('./'+file,{encoding:'utf8'},function(err,string){
				parser.parseString(string,function(err,rslt){
					fs.writeFile(file.slice(0,'-4')+'.json',JSON.stringify(rslt),{encoding:'utf8'},function(err){
						if(err){
							console.log(err);
							cb(err);
						}else{
						console.log('done with ',file);
						cb();
						}
						
						
					});
				});
			});
		}else{
		cb();
		}
	}
