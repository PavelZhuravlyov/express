var express = require('express'),
	http    = require('http'),
	app     = express();

app.set('port', 3000);

app.use(function(req, res, next){
	if(req.url == '/')
	{
		res.end('Dirrectory');
	}
	else next();
});

app.use(function(req, res, next){
	if(req.url == '/test')
	{
		next(new Error("ERROR"));
	}
	else next();
});

app.use(function(err, req, res, next){
	if(app.get('env') == 'development')
	{
		var errorHandler = express.errorHandler();
		errorHandler(err, req, res, next);
	}
	else 
	{
		res.send(500);
	}
});

app.listen(3000, function(){
	console.log('Server is running at ' + app.get('port') + ' port');
});

