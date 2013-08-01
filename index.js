"use strict";
let xml2js = require('xml2js');
let parser = new xml2js.Parser;
let fs = require('fs');

fs.readdir('.',function(err,files){
	files.forEach(function(file){
		if(file.slice(-4)==='.xml'){
			fs.readFile('./'+file,{encoding:'utf8'},function(err,string){
				parser.parseString(string,function(err,rslt){
					fs.writeFile(string.slice(0,'-4')+'.json',rslt,{encoding:'utf8'},function(err){
						console.log('done with ',file);
					});
				});
			});
		}
	});
});
